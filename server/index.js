import http from 'node:http'
import { readFile, stat } from 'node:fs/promises'
import { resolve, extname, sep } from 'node:path'
import { fileURLToPath } from 'node:url'
import { levels, stories } from '../shared/stories.js'
const root=fileURLToPath(new URL('../frontend/dist/',import.meta.url))
const mime={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.ico':'image/x-icon'}
const normalize=value=>value.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim()
export function createApp({apiKey=process.env.OPENROUTER_API_KEY, model=process.env.OPENROUTER_MODEL||'openrouter/free', fetchImpl=fetch}={}) {
 if(model!=='openrouter/free'&&!model.endsWith(':free'))throw new Error('Elige openrouter/free o un modelo terminado en :free.')
 const clients=new Map()
 return http.createServer(async(req,res)=>{
  res.setHeader('X-Content-Type-Options','nosniff');res.setHeader('Referrer-Policy','no-referrer');res.setHeader('X-Frame-Options','DENY')
  const json=(status,data)=>{res.writeHead(status,{'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store'});res.end(JSON.stringify(data))}
  const url=new URL(req.url,'http://localhost')
  if(url.pathname==='/api/health')return json(200,{ok:true,aiConfigured:!!apiKey,model})
  if(url.pathname==='/api/hint'){
   if(req.method!=='POST')return json(405,{error:'Usa POST.'})
   const origin=req.headers.origin
   if(origin){let originHost;try{originHost=new URL(origin).host}catch{return json(403,{error:'Origen no permitido.'})}if(originHost!==req.headers.host&&!['localhost:5173','127.0.0.1:5173'].includes(originHost))return json(403,{error:'Origen no permitido.'})}
   if(!req.headers['content-type']?.includes('application/json'))return json(415,{error:'Se requiere JSON.'})
   let raw='',size=0
   try{for await(const chunk of req){size+=chunk.length;if(size>2048){json(413,{error:'Solicitud demasiado grande.'});return}raw+=chunk} }catch{return json(400,{error:'Solicitud incompleta.'})}
   let body;try{body=JSON.parse(raw)}catch{return json(400,{error:'JSON inválido.'})}
   const story=stories.find(s=>s.id===body?.storyId),index=body?.questionIndex,selectedAnswer=body?.selectedAnswer
   if(!story||!Number.isInteger(index)||index<0||index>=story.questions.length)return json(400,{error:'Cuento o pregunta inválidos.'})
   const question=story.questions[index]
   if(selectedAnswer!=null&&(!Number.isInteger(selectedAnswer)||selectedAnswer<0||selectedAnswer>=question.options.length))return json(400,{error:'Respuesta elegida inválida.'})
   const local=(reason)=>json(200,{hint:question.hint,source:'local',reason})
   if(!apiKey)return local('not_configured')
   const now=Date.now(),ip=req.socket.remoteAddress
   for(const [key,value] of clients)if(now-value.start>60000)clients.delete(key)
   const bucket=clients.get(ip)||{start:now,count:0};clients.set(ip,bucket)
   if(++bucket.count>12)return local('rate_limit')
   try{
    const level=levels.find(item=>item.id===story.level)
    const upstream=await fetchImpl('https://openrouter.ai/api/v1/chat/completions',{method:'POST',headers:{Authorization:`Bearer ${apiKey}`,'Content-Type':'application/json','X-Title':'Bloom lectura'},signal:AbortSignal.timeout(8000),body:JSON.stringify({model,max_tokens:300,reasoning_effort:'none',temperature:0,seed:42,messages:[{role:'system',content:'Eres Oli, tutor de comprensión lectora para niños de 6 a 9 años. Tu única tarea es reformular la pistaBase como una pista cálida y concreta, no resolver la pregunta. Usa una o dos frases cortas con vocabulario apropiado para el nivel. Empieza con «Vuelve», «Busca», «Piensa» o «Recuerda». Si hay una respuesta elegida, orienta la confusión sin juzgarla. No reveles la respuesta correcta, no copies ninguna opción y no indiques letras ni números de opción. No añadas hechos que no estén en pistaBase, no solicites datos personales y no sugieras enlaces o conversaciones externas.'},{role:'user',content:JSON.stringify({nivel:`${level.name} (${level.age})`,cuento:story.text.join('\n'),pregunta:question.text,respuestaElegida:selectedAnswer==null?undefined:question.options[selectedAnswer],pistaBase:question.hint})}]})})
    if(!upstream.ok)return local(`provider_${upstream.status}`)
    const data=await upstream.json(),hint=data?.choices?.[0]?.message?.content?.trim()
    if(!hint)return local('empty_response')
    if(hint.length>600)return local('response_too_long')
    if(/https?:\/\//i.test(hint))return local('external_link')
    const normalizedHint=normalize(hint),normalizedAnswer=normalize(question.options[question.answer])
    if((normalizedAnswer.length>=3&&normalizedHint.includes(normalizedAnswer))||/\b(?:opcion|respuesta)\s+(?:correcta\s+)?(?:es\s+)?[abc123]\b/.test(normalizedHint))return local('answer_leak')
    return json(200,{hint,source:'ai'})
   }catch{return local('provider_unavailable')}
  }
  if(url.pathname.startsWith('/api/'))return json(404,{error:'Ruta no encontrada.'})
  if(!['GET','HEAD'].includes(req.method))return json(405,{error:'Método no permitido.'})
  try{
   const decoded=decodeURIComponent(url.pathname)
   let file=resolve(root,'.'+decoded)
   if(file!==resolve(root)&&!file.startsWith(resolve(root)+sep))return json(403,{error:'Ruta no permitida.'})
   try{if(!(await stat(file)).isFile())file=resolve(root,'index.html')}catch{if(extname(file))return json(404,{error:'Archivo no encontrado.'});file=resolve(root,'index.html')}
   const data=await readFile(file)
   res.writeHead(200,{'Content-Type':mime[extname(file)]||'application/octet-stream','Cache-Control':'no-cache','Content-Security-Policy':"default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'"});res.end(req.method==='HEAD'?undefined:data)
  }catch{json(503,{error:'Primero ejecuta npm run build, o usa npm run dev.'})}
 })
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 const port=Number(process.env.PORT)||3001
 const host=process.env.HOST||'0.0.0.0'
 createApp().listen(port,host,()=>console.log(`Bloom disponible en http://localhost:${port}`))
}

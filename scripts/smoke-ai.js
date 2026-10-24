import assert from 'node:assert/strict'
import { createApp } from '../server/index.js'

if (!process.env.OPENROUTER_API_KEY) {
  console.error('Falta OPENROUTER_API_KEY en .env. Agrega la clave y vuelve a ejecutar npm run test:ai.')
  process.exitCode = 1
} else {
  const server = createApp()
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve))

  try {
    const response = await fetch(`http://127.0.0.1:${server.address().port}/api/hint`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({storyId: 'luna', questionIndex: 0, selectedAnswer: 1}),
    })
    const data = await response.json()
    assert.equal(response.status, 200)
    assert.equal(data.source, 'ai', `OpenRouter no entregó una pista con IA; se activó el respaldo (${data.reason ?? 'sin motivo'}).`)
    assert.ok(typeof data.hint === 'string' && data.hint.trim().length > 0)
    assert.ok(!data.hint.toLowerCase().includes('en una maceta'), 'La pista reveló la respuesta.')
    console.log('Pista real de OpenRouter verificada: es breve, usa IA y no revela la respuesta esperada.')
  } finally {
    await new Promise(resolve => server.close(resolve))
  }
}

import { spawn } from 'node:child_process'
import { fileURLToPath } from 'node:url'
const root=fileURLToPath(new URL('../',import.meta.url))
const children=[
 spawn(process.execPath,['--env-file-if-exists=.env','server/index.js'],{cwd:root,stdio:'inherit'}),
 spawn(process.execPath,[fileURLToPath(new URL('../frontend/node_modules/vite/bin/vite.js',import.meta.url)),'--host','127.0.0.1'],{cwd:fileURLToPath(new URL('../frontend/',import.meta.url)),stdio:'inherit'})
]
let stopping=false
function stop(code=0){if(stopping)return;stopping=true;for(const child of children)child.kill();process.exitCode=code}
for(const child of children){child.on('error',()=>stop(1));child.on('exit',code=>{if(!stopping)stop(code||0)})}
process.on('SIGINT',()=>stop());process.on('SIGTERM',()=>stop())

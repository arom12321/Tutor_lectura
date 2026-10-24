# Bloom · Tutor de lectura

Tutor en español para niños de 6 a 9 años. React + Vite y servidor Node.js sin dependencias adicionales. Requiere Node.js 22.9 o posterior (probado con 24).

## Iniciar

Desde la carpeta principal:

```sh
npm run dev
```

Abre http://localhost:5173. Inicia juntos React y el servidor de pistas (puerto 3001). Las dependencias del frontend ya están instaladas; en otra máquina ejecuta primero `npm --prefix frontend install`.

## Activar pistas con IA

Copia `.env.example` a `.env` en la carpeta principal y configura `OPENROUTER_API_KEY` con tu clave de OpenRouter. Reinicia el servidor. Nunca uses un prefijo `VITE_` para la clave ni la pongas en archivos del frontend. `.env` está excluido de Git.

Se usa `openrouter/free`, el enrutador de modelos gratuitos de OpenRouter. También puedes configurar un identificador terminado en `:free`; el servidor rechaza modelos de pago. La disponibilidad y los límites dependen de OpenRouter: https://openrouter.ai/openrouter/free.

El navegador solo envía el identificador del cuento y el número de pregunta. El servidor construye la solicitud desde contenido conocido. No se solicitan nombres, edades exactas ni otros datos personales. Las pistas generadas no tienen la misma garantía editorial que las pistas locales; para una demostración supervisada o contenido completamente predecible, activa **Usar pistas sin IA**.

## Respaldo

Los 9 cuentos, 27 preguntas, correcciones y pistas locales vienen incluidos. Funcionan sin una conexión a la IA, sin clave o con el servidor de pistas caído una vez cargada la aplicación. El respaldo es automático ante errores, límites o espera excesiva. El interruptor del pie permite elegirlo directamente. No se implementó una PWA: abrir o recargar la aplicación desde cero todavía requiere acceso al servidor local o al sitio.

## Recorrido

- Tres cuentos por nivel: Semilla (6–7), Brote (7–8) y Árbol (8–9).
- Lectura con tamaño de letra ajustable; texto disponible al responder.
- Tres preguntas por cuento, una respuesta por pregunta, pista opcional y explicación.
- Resultados por intento, repaso y registro de logros en localStorage del navegador.
- Los resultados son de práctica, no una evaluación validada de edad o capacidad lectora. Las edades son orientativas.

## Producción local

```sh
npm run build
npm start
```

Abre http://localhost:3001. Node sirve el frontend compilado y la API desde el mismo origen. Se enlaza a la interfaz local por defecto. Antes de exponer el servicio públicamente agrega autenticación, control de consumo global y un proxy HTTPS. El límite en memoria por IP incluido sirve para el uso local, no reemplaza esos controles.

## Verificación

```sh
npm test
npm --prefix frontend run lint
npm run build
```

Las pruebas verifican catálogo, entrada inválida, ausencia de clave, uso del modelo gratuito, secreto solo en servidor, origen externo, tamaño de solicitud y respaldo ante fallos y respuestas inválidas. Usan un proveedor simulado; la integración real requiere una clave.

Contenido editable: `shared/stories.js`. Interfaz: `frontend/src/App.jsx` y `App.css`. API: `server/index.js`.

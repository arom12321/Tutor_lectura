# Bloom · Tutor de lectura

Tutor en español para niños de 6 a 9 años. React + Vite y servidor Node.js sin dependencias adicionales. Requiere Node.js 22.9 o posterior (probado con 24).

## Iniciar

Desde la carpeta principal:

```sh
npm run dev
```

Abre http://localhost:5173. Inicia juntos React y el servidor de pistas (puerto 3001). Las dependencias del frontend ya están instaladas; en otra máquina ejecuta primero `npm --prefix frontend install`.

## Activar y comprobar las pistas con IA

Copia `.env.example` a `.env` en la carpeta principal y configura `OPENROUTER_API_KEY` con tu clave de OpenRouter. Reinicia el servidor. Nunca uses un prefijo `VITE_` para la clave ni la pongas en archivos del frontend. `.env` está excluido de Git.

Se usa `openrouter/free`, el enrutador de modelos gratuitos de OpenRouter. También puedes configurar un identificador terminado en `:free`; el servidor rechaza modelos de pago. La disponibilidad y los límites dependen de OpenRouter: https://openrouter.ai/openrouter/free.

Después de reiniciar, abre un cuento, entra a las preguntas, elige una respuesta y pide ayuda. El pie debe mostrar **Oli con IA está listo** y la tarjeta debe identificar una **Pista adaptada con IA**. La IA recibe el nivel y la opción elegida para adaptar la ayuda, pero el servidor descarta respuestas que copien la solución o indiquen su letra. Si el proveedor falla, la pista local aparece automáticamente.

También puedes ejecutar una prueba real aislada, sin mostrar la clave en la terminal:

```sh
npm run test:ai
```

La prueba falla de forma explícita si falta la clave, OpenRouter no responde con IA o la pista revela la solución.

El navegador solo envía el identificador del cuento, el número de pregunta y, si existe, el índice de la opción elegida. El servidor construye la solicitud desde contenido conocido. No se solicitan nombres, edades exactas ni otros datos personales. Las pistas generadas no tienen la misma garantía editorial que las pistas locales; para una demostración supervisada o contenido completamente predecible, activa **Usar pistas sin IA**.

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

Abre http://localhost:3001. Node sirve el frontend compilado y la API desde el mismo origen. En producción escucha el puerto y la interfaz indicados por el alojamiento. El límite en memoria activa el respaldo local después de 12 solicitudes por minuto y evita que una falla o un exceso de uso bloquee el recorrido.

## Publicar un enlace para la demostración

El repositorio incluye `render.yaml` para crear un servicio web en Render:

1. Sube estos cambios a GitHub.
2. En Render elige **New → Blueprint** y conecta este repositorio.
3. Cuando lo solicite, pega `OPENROUTER_API_KEY` como secreto. No la escribas en `render.yaml` ni en GitHub.
4. Espera que el health check `/api/health` quede saludable y abre la URL `onrender.com` desde otro celular o computador.
5. Antes de presentar, recorre un cuento completo y confirma que una pista muestre **Pista adaptada con IA**.

El plan gratuito se suspende tras un periodo de inactividad y puede tardar cerca de un minuto en despertar. Abre el enlace poco antes de la demo o usa un plan que permanezca activo. Los jurados no necesitan instalar nada ni crear una cuenta: el acceso es directo por HTTPS. El progreso se guarda solo en ese navegador; el inicio con Google no es necesario para este MVP.

## Verificación

```sh
npm test
npm --prefix frontend run lint
npm run build
```

Las pruebas verifican catálogo, entrada inválida, ausencia de clave, uso del modelo gratuito, secreto solo en servidor, origen externo, tamaño de solicitud y respaldo ante fallos y respuestas inválidas. Usan un proveedor simulado; la integración real requiere una clave.

Contenido editable: `shared/stories.js`. Interfaz: `frontend/src/App.jsx` y `App.css`. API: `server/index.js`.

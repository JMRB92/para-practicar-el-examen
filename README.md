# EXAMEN TEST v1.08 — Banco revisado a partir de v1.05

Aplicación web estática para GitHub Pages. No utiliza Firebase, base de datos, cuentas de usuario, panel del profesor ni envía los resultados de los alumnos a servidores. El alumnado descarga un PDF y lo entrega manualmente.

## Banco de preguntas

- Se han tomado **los 50 enunciados y las 50 respuestas correctas directamente de la v1.05**, respetando su texto y su ID.
- Se han **reescrito las 150 respuestas incorrectas** con distractores basados en los dos documentos de teoría, procurando que sean creíbles sin producir una segunda solución válida.
- **Para cada pregunta hay al menos una respuesta incorrecta más corta y otra más larga que la correcta** (en caracteres y en palabras). En unas preguntas hay una opción incorrecta más larga y en otras hay dos. El orden se aleatoriza.
- Las respuestas correctas y las preguntas mantienen su identificador original; en el examen se mezclan las preguntas y las opciones.

## Funcionalidades

- Nombre, apellidos y grupo A–H obligatorio.
- 50 preguntas, cuatro opciones y una única respuesta correcta.
- 30 minutos, con opción de ampliación única de 10 minutos al agotarse el plazo.
- Corrección: +0,20 acierto, −0,05 error y 0 en blanco; nota de 0 a 10.
- Recuperación del intento en el navegador y dispositivo originales, con el tiempo real transcurrido.
- Resultados básicos sin soluciones; descarga local del PDF resumen.
- Código para consultar soluciones: **`ILOVEIA`**. Una vez introducido se muestra la revisión ordenada y puede descargarse el PDF detallado con preguntas, las cuatro opciones, respuesta elegida, correcta y fallos.
- Ambos PDF incluyen los datos de tiempo y si se utilizó la ampliación.

## Instalación

1. Descomprime el ZIP y sube su contenido a la raíz del repositorio de GitHub Pages.
2. Asegúrate de que `index.html`, `test.html`, `sw.js` y `data/questions.json` están en sus rutas originales.
3. Tras publicar, recarga el navegador con Ctrl + Mayús + R para evitar la caché de versiones anteriores.
4. Si pruebas el HTML desde tu disco, ábrelo en Chrome; evita la vista previa de ChatGPT porque puede impedir ejecutar JavaScript.

**Privacidad:** los resultados no se transmiten automáticamente. La aplicación y su código de desbloqueo son públicos para el navegador; no son una barrera de seguridad frente a usuarios capaces de inspeccionar los archivos. La aplicación usa almacenamiento local para recuperar intentos y puede perderlos si se eliminan los datos del navegador.

**Precaución sobre el criterio de longitud:** al exigir que todas las respuestas correctas tengan al menos una incorrecta más larga y una más corta, ninguna correcta será la opción más corta ni la más larga. Es una consecuencia inevitable de ese requisito y podría permitir cierta estrategia de descarte. Para eliminar completamente la pista de longitud habría que permitir también respuestas correctas en los extremos en algunas preguntas.

# EXAMEN TEST · Inteligencia Artificial · v1.07

Aplicación web que funciona localmente en el navegador, sin Firebase, sin bases de datos ni envío automático de datos del alumnado. Todo el examen puede ejecutarse desde `index.html`, incluidas las preguntas y la generación de PDF.

## Novedades de la v1.07

- Se mantienen **íntegros** los 50 enunciados, la respuesta correcta de cada pregunta y las cuatro modificaciones pedagógicas de la v1.03.
- Se han **reescrito las 150 opciones incorrectas** para convertirlas en distractores plausibles de dificultad media, relacionados con los conceptos de los dos documentos de teoría.
- Se han revisado las longitudes: la opción correcta es la más corta en 14 preguntas, la segunda más corta en 12, la tercera en 12 y la más larga en 12. Las opciones se mezclan además en cada intento.
- Sigue utilizándose el código **`ILOVEIA`** para desbloquear la corrección detallada y el PDF completo.

## Uso para alumnado

1. Introduce nombre y apellidos, y selecciona obligatoriamente un grupo **A–H**.
2. Pulsa **Aceptar** y después **Comenzar examen**.
3. Responde 50 preguntas, de una en una; preguntas y opciones se mezclan independientemente. Puedes volver, avanzar, borrar y cambiar respuestas.
4. El examen dura **30 minutos**, medidos por tiempo real; al terminar, puede aceptar **una única ampliación de 10 minutos**. La ampliación no detiene el reloj: el límite absoluto es 40 minutos desde el inicio.
5. La calificación es `máximo(0, mínimo(10, aciertos × 0,20 − errores × 0,05))`.
6. Al finalizar, el alumno ve solo sus datos, grupo, fecha/hora, nota, aciertos, errores, blancos y tiempo empleado. Descarga el **PDF resumen de una página**, sin preguntas ni soluciones, para enviarlo manualmente al docente.
7. Si el profesor facilita el código **`ILOVEIA`**, se desbloquea la revisión de las 50 preguntas y el **PDF detallado**, con cuatro opciones originales en su orden original, respuesta elegida, solución y valoración de cada pregunta.
8. Ambos PDF indican si hubo ampliación y el tiempo máximo autorizado.

## GitHub Pages

Extrae el ZIP y sube su **contenido**, no la carpeta contenedora, a la raíz del repositorio. Deben estar `index.html`, `sw.js`, `data/questions.json`, `test.html` y este `README.md`. Activa GitHub Pages desde la rama principal y raíz (`/`).

El banco de preguntas se incluye **dentro de `index.html`** para que la aplicación inicie sin peticiones externas; `data/questions.json` contiene la copia editable. Si cambias preguntas, debes mantener ambas copias sincronizadas. En la web se intenta cargar el banco público del mismo origen, pero si falla se utiliza el integrado. **Nunca se envían datos del alumno** en esta operación.

Al publicar la actualización, fuerza la recarga del navegador (`Ctrl+Mayús+R`). El Service Worker usa una nueva caché v1.07. Si el navegador sigue mostrando una versión antigua, revisa los datos del sitio con cuidado: **eliminar almacenamiento local puede borrar exámenes pendientes**. Los intentos anteriores no se migran porque el banco de respuestas cambió.

## Prueba local

Además del ZIP hay un HTML independiente para abrirlo descargado con Chrome, Edge o Firefox. La vista previa de archivos dentro de ChatGPT puede impedir JavaScript, así que no es válida para comprobar botones.

`test.html` ofrece el mismo funcionamiento para pruebas manuales.

## Privacidad y limitaciones

No hay Firebase, cookies de seguimiento, analítica, correo, autenticación de usuarios ni servidor propio. La recuperación utiliza almacenamiento del mismo navegador/dispositivo; si se borra o se cambia de equipo, puede perderse. El alumno descarga y envía el PDF manualmente. Como todo el contenido está en el navegador, un usuario avanzado puede inspeccionar las respuestas y el código de acceso; **no es una medida de seguridad fuerte**, y el PDF tampoco está firmado digitalmente.

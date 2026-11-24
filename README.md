# EXAMEN TEST · Inteligencia Artificial · v1.06

Aplicación web completamente local en el navegador, compatible con GitHub Pages. Sin Firebase, sin panel del profesor, sin servidor de resultados y sin envío automático de datos del alumnado.

## Cambios v1.06

- **50 enunciados conservados** exactamente de v1.05, incluidos los ajustes pedagógicos de preguntas 15, 29, 31 y 49.
- **50 respuestas correctas conservadas** sin modificar su texto ni identificador.
- **150 respuestas incorrectas reescritas** con expresiones más fáciles y claras.
- Código de revisión: **`ILOVEIA`** (sustituye al antiguo `123456789`).
- El examen mantiene aleatorización independiente de preguntas y opciones.

## Uso

1. El alumno introduce **nombre, apellidos** y un grupo obligatorio de **A a H**.
2. Pulsa **Aceptar**, consulta las instrucciones y **Comenzar examen**.
3. Contesta 50 preguntas (una correcta entre cuatro opciones) en un máximo inicial de **30 minutos**.
4. Cuando vence el plazo puede solicitar **una única ampliación de 10 minutos**. El plazo de los 40 minutos cuenta desde el inicio del examen, no desde la apertura de la ventana de ampliación.
5. La nota es `máximo(0, mínimo(10, aciertos × 0,20 − errores × 0,05))`.
6. Al finalizar, ve **solo sus datos, fecha, nota, aciertos, errores, blancos y tiempo**. Puede descargar un **PDF resumen sin preguntas ni soluciones** para enviar al docente.
7. Para consultar la revisión, introduce el código `ILOVEIA`. Entonces puede visualizar las 50 preguntas y descargar un **PDF detallado** con todas las opciones originales, la elegida, la correcta y el estado de cada pregunta. Puede seguir descargando el PDF resumen.
8. La ampliación se indica en ambos PDF.

## Instalación en GitHub Pages

1. Extrae el ZIP.
2. Sube el **contenido** extraído, con `index.html`, `sw.js`, `data/questions.json` y demás archivos, a la raíz del repositorio.
3. Activa GitHub Pages desde la rama principal y la carpeta raíz.
4. Al actualizar una versión antigua, fuerza recarga (`Ctrl + Mayús + R`) y, si el navegador aún sirve una versión antigua, limpia los datos del sitio o elimina el Service Worker antiguo. **Advierte que borrar los datos del sitio elimina el progreso de exámenes en curso**.

Un archivo `EXAMEN_TEST_v1.06_HTML_INDEPENDIENTE.html` se distribuye también fuera del ZIP para abrirlo directamente en Chrome/Firefox/Edge. La vista previa HTML dentro de ChatGPT puede bloquear JavaScript; descarga el archivo antes de probarlo.

## Arquitectura

- `index.html`: interfaz, banco integrado, temporizador, recuperación, corrección y generador PDF local sin bibliotecas externas.
- `data/questions.json`: copia externa editable del mismo banco. En GitHub Pages se consulta de forma opcional desde el mismo origen. Se recomienda mantener sincronizadas ambas copias al cambiar preguntas.
- `sw.js`: caché offline de archivos públicos; versión de caché actualizada a v1.06.
- `test.html`: copia de diagnóstico para realizar pruebas manuales (usa el mismo motor).

El cambio de distractores implica un **nuevo intento local** v1.06. No se importan automáticamente exámenes incompletos de versiones anteriores, para evitar respuestas vinculadas a bancos distintos.

## Privacidad y límites

No se usa Firebase, almacenamiento en la nube, analítica ni envío automático de resultados. El progreso se guarda en el almacenamiento del navegador; un alumno debe descargar el PDF y enviarlo manualmente. El lector de preguntas opcional accede a archivos públicos de la propia web; **no envía información de estudiantes**.

En una aplicación 100 % estática el código y las respuestas se pueden inspeccionar técnicamente: el acceso mediante `ILOVEIA` es una barrera práctica, no una defensa contra usuarios avanzados. El PDF no tiene firma digital verificable. Cambiar el navegador o borrar datos locales puede hacer perder el examen en curso.

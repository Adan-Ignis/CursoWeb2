Ejercicio 1

1 La pagina web escogida es: https://downloads.khinsider.com/

2.1 En modo light/diurno, los enlaces se ven perfectamente respecto el texto es negro mientras que el fondo es un color muy cercano al blanco o es un azul palido (cercano al blanco).

Pero cuando seleccionas un album para escuchar en el menu principal los botones de reprodución se ven de color blanco teniendo alrededor un color azul palido (cercano al blanco), haciendolo poco visible, esto para el menu de reprodución general (si quieres escuchar las canciones en orden del album). Aunque si quiere escuchar un canción del album tienes que pulsar un boton con forma de triangulo mirando a la derecha, este boton es de color gris claro (no llega a ser gris neutro que es #7F7F7F o R127, G127, B127) que esta en fondo de un blanco que no es puro del todo (#FFFFFF o R255, G255, B255), a pesar de ello lo compensa poniendo la linea que tiene información de esa canción de un color diferente al resto de canción del album.

En el modo dark/nocturno, los enlaces se siguen viendo perfectamente pues el texto es blanco puro mientras que el fondo es un azul oscuro o un gris muy oscuro.

Cuando seleccionas un album para escuchar en el menu principal los botones de reproducción se ven de color blanco mientras que el fondo es un azul oscuro, por lo que su visibilidad es mucho mayor. Aunque si quiere escuchar una canción del album tienes que pulsar un boton con forma de triangulo mirando a la derecha, este botón de un color gris oscuro cercano al neutro que esta en un fondo oscuro sin llegar a negro completamente (#000000 o R0, G0, B0),a pesar de ello lo compensa poniendo la linea que tiene informaicón de esa canción de un color diferente al resto de la canción del album.

2.2 La consistencia de la navegación es muy buena, porque en todo momento el menu de navegación vertical siempre esta a la izquierda.

Cuando se busca algo ya sea por cuenta propia con la barra de busqueda o usando alguna de las opciones por defecto que tiene el menu de navegación los resultados de busqueda se muestran de la misma forma e incluso puedes escoger como se muestras

2.3 La pagina tiene una excelente retroalimentación visual te indica en todo momento donde tienes encima el cursor del ratón cambiando de color ya sea los enlaces, botones de reprodución, las canciones, incluso las imagenes que tiene el album en sí (muy util para ponerle una imagen al album de musica si lo descargas).

Todo esto lo logra sin sobrecargar sensorialmente al usuario, ya que la navegación por la pagina web es "relajante" porque no tiene constantemente estimulos visuales de todo tipo que intentan llamarte la atención.

A pesar de ello cuando pones el curso encima de un enlace apenas cambia de color respecto a los otros enlaces siendo este su mayor problema, tambien pasa con los botones de reprodución. Se ve perfectamente incluso cuando activa la opción de filtro de color de windows 10, no importa si alguna de estas:

    - Invertido (invetir colores de pantalla)
    - Escala de grises
    - Escala de grises invertida

    - Rojo y verde (verde suave, deuteranopía)
    - Eojo y verde (rojo suave, protanopía)
    - Azul-amarillo (tritonopía)

Pues en todos los casos veras la pagina web, ademas el cambio en la paleta de colores no influye en la experiencia de navegación de la pagina web.

En resumen la pagina web es excelente con la retroalimentación pero solamente si tienes una buena agudeza visual y esto no depende de si sufres daltonismo o su versión más extrema acromatosia (ver en escala de grises).

2.4 La jerarquía visual es clara en todo momento, teniendo el menu vertical a la izquierda visible en todo momento.

Cuando buscas albumnes para escuchar te aparecen columnas horizontales con información como año, plataforma en la que salio (la pagina web guarda musica de videojuegos. La plataforma es la consola o sistema operativo, es normal que un juego salga para varias plataformas).

Cuando escoges un album para escuchar la información aparece en el siguiente orden:

- Nombre completo del album

- Información de albúm

- Información de cuando se subio el albúm a la pagina web (incluye un enlace que pone los cambios que se la realizado al album y cuanndo se hicieron)

- Imagenes relacionada con el album, ya que algunas salieron en físico y las imagenes corresponden con las imagenes del manual que venia con el disco en sí (incluyendo el propio CD), hasta de las imagenes digitales (que no es lo mismo que las escaneadas del manual)

- La barra de reproducción general para el album con sus botones

- El album entero en donde cada canción tiene sus botones

- Descripción del album

- Los 12 albumnes que más suelen escuchar la gente que tambien escuchar el album que tu tambien estas escuchando.

- Los comentarios

3.1 Los 3 problemas de usabilidad más grandes son los siguientes:

- Los botones de reprodución tiene bajo contraste respecto al fondo

- Los enlaces apenas cambia de color

- El texto es pequeño

3.2 Mis dos propuestas para mejorar la pagina web son las siguientes:

- Hacer que los botones tengan un mayor contraste respecto al fondo

- El texto hacerlo algo más grande

No he puesto hacer que los enlaces cambie a un color más llamativo cuando se pone el cursor encima porque este (el cursor) contraste respecto al fondo, por lo que es lo más se puede descartar.

Ejercicio 2

Codigo original

<img src = "grafico.png">
<button>X</button>

Codigo modificado

<figure>
    <img src = "grafico.png" alt = "grafico">
    <figcaption>Grafico</figcaption>
</figure>
<button aria-label = "Cerrar grafico" title = "Cerrar grafico">X</button>

Ejercicio 3

1 La pagina web escogida es: https://www.sensacine.com/

2 Intentare comprar una entrada de cine para verla en sevilla

3.1 El acceso a elementos interactivos solamente funciona hasta que cuando tengo ya la pelicula seleccionada y no puedo escoger que día quiero verla en el cine, porque cuando lo escojo con el teclado el menu de seleción del día funciona como un unico elemento, este detalle es lo que impide poder comprar una entrada de cine para verla en el cine.

3.2 La visibilidad del foco es apenas visible porque la linea es muy delgada, de puntos en vez una linea continua, porque aunque sea color negro es apenas visibles debido a estas cosas por lo que basta con no tener una buena agudeza visual y/o daltonismo. Si tenemos esto en cuenta sería practicamente imposible moverse por el menu principal sin saber exactamente donde esta el foco.

3.3 La posibilidad de completar una tarea no solo es imposible si moverse por la propia pagina web es incluso con un poco de mala suerte inviable y esto se explica en el punto 3.1 y 3.2
Titulos/Encabezados
    etiqueta <hn>, sustituyendo "n" por un numero que va desde el 1 hasta el 6, Llendo de más a menos importante

Parrafos
    etiqueta <p>

    Nota: Para hacer salto de linea se utiliza la etiqueta <br>, y para que haya espacio entre parrafos se pone cada uno dentro de un <p>

Negrita
    etiqueta <b>

    Nota: No sirve para indicar que tiene gran importancia para ello es necesario utilizar <strong>

Cursiva (Italic o Italica en español)
    etiqueta <i>

    Nota: No sirve para hacer enfasis (que tiene importancia), para decir que es importante se utiliza la etiqueta <em>

Tabular un parrafo
    etiqueta <blockquote>

    Nota: No necesita usarse la etiqueta <p> porque hace de contenedor

Etiqueta de autocierre
    La etiqueta "funciona" como etiqueta de apertura y cierre

    Nota: No necesita usar "/" al principio, y si se pone debe ponerse al final de la etiqueta

Enlaces (url)
    etiqueta <a href="">

    Tipos de rutas:

        - Ruta absoluta: Utiliza la dirección entera de un archivo

            Nota: Las url son rutas absolutas

        - Ruta relativa: Parte desde donde esta hasta llegar a donde esta el archivo destinatario

        - Ruta interna: Va a la etiqueta que tiene la misma clase que tenia dentro del href pero si el "#"

            Nota: Para dirigirse al inicio de la pagina se pone "/"

    Si pones "tel:n", cambiando "n" por un numero de telefono en "href", hace que cuando es pulsado realizara una llamada

Imagen
    Etiqueta <img>

    Atributos:
        - src: Indica donde esta la imagen

        - alt: Cuano la imagen no aparece aparecera lo que hay en "alt"
        - title:
        - figcaption: Texto visible debajo de la imagen, independientemente si la imagen se ve o no. Es una etiqueta

            Nota: No se recomienda poner en el "alt", "title" y "figcaption", porque los lectores para ciegos dira lo mismo tres veces seguidas

            El profesor no ha sabido explicarme las diferencias por lo que entiendo que son practicamente lo mismo
        
        - Width: Marca el numero de pixeles que tiene a lo ancho
        - Heigh: Marca el numero de pixeles que tiene a lo alto

Estructura (normal) del body

    - Header: Cabecera de la pagina
    - Main: Contenido principal de la página
    - Footer: Pie de pagina

        Nota: Esto lo suele tener la pagina web

    - Nav: Menú principal
    - Section: sección de contenido
    - Aside: contenido adicional fuera del main
        Nota: Va entre el Main y el Footer

Unidades relativas

    rem
        Es proporcional al elemento raíz

        Nota: La raiz hace referencia al "html" o al "root"
    
    em
        em: font-size
        Es proporcional al elemento padre

Porcentajes

    vw y hw
        Es proporcional al tamaño de la ventana del navegador

Comentarios

    Para comentar algoya escrito se selecciona y se pulsa "control+ç"
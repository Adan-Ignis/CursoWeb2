Como aplicar CSS a un archivo

    Hay tres maneras de hacerlo:

        - Definir los elementos del CSS dentro de la propia etiquera, y se aplica solamente a esa etiqueta

        - Definir los elementos del CSS dentro del head del html, y se aplica a cada elemento del html

        - Poner un enlace del archivo CSS en el archivo html
            <Link rel="stylesheet" href="ruta/nombreDelArchivo.css>

    Nota: Hay una jerarquia a la hora de aplicarse el CSS, siguiendo las siguientes reglas:

        - Cercania: se aplicara el más cercano, teniendo el siguiente orden de más cercano a más lejano:

            1. CSS dentro de la propia etiqueta
            2. CSS dentro del head del html
            3. Archivo CSS independiente del html

        - Lo ultimo se aplicara: Si dentro del CSS se configura el mismo atributo más de una vez se aplicara el ultimo en aparecer

            Nota: Tambien ocurre si el html tiene enlace a varios CSS, se aplicara el ultimo. Igual si se aplicar dos CSS de formas diferentes en un mismo.

            Independiente de la forma en que se implemente varios CSS, se pueden complementar entre si, pues el segundo CSS puede definir caracteristicas de estilo que el primero no definio, por ejemplo.

Aplicar estilo por etiqueta
    Se pone el nombre de la etiqueta y luego se pone "{}" detro de esta se pone los atributos

Aplicar estilo por id
    Se pone "#", luego sin espacios se pone el nombre del id, y por ultimo se pone "{}". Dentro de los "{}" se pone los atributos

    Nota: Solamente se puede usar un id una sola vez en el archivo html, aunque otra etiqueta igual lo utilice

Aplicar estilo por class
    Se pone ".", luego sin espacios se pone el nombre de la clase, y por ultimo se pone "{}"

Aplicar estilo en general
    Se pone "*{}". Dentro de los "{}" se pone los atributos

    Nota: Se le conoce como "selector universal"

<!-- Estetica -->
Poner varios elementos a la misma altura
    Es necesario poner "float" y luego se pone "left", para poner las cosas en orden de izquierda a derecha y luego de arriba a abajo

Diferencia entre DIV y SPAN
    "div" es un contenedor para separar verticalmente, mientras que "span" es un contenedor en linea (y por tanto horizontalmente)
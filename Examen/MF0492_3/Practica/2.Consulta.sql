-- Utilizando la base de datos de jardinería, realiza las siguientes consultas:

--     a. Devuelve un listado de todos los pedidos que fueron rechazados en 2009.

La estructura de la base de datos no esta lo suficientemente bien hecha para saber cuales fueron los pedidos rechazados porque hay paquetes que han sido entregados y a la vez están rechazados. Esto lo entenderia que el pedido llego pero fue devuelto pero no hay un estado "Devuelto"

La tabla de los pedidos tienen las columnas "fecha_pedido", "fecha_esperada" y "fecha_entrega", supongamos que "fecha_entrega" siempre es nula en caso de que el pedido ha sido rechazada (aunque no es el caso realmente). Un pedido puede haberse hecho en 2008 y su fecha esperada es en 2009; o el pedido haberse hecho en 2009 y su fecha esperada en 2010. No hay manera de saber si el pedido fue rechazado en 2008, 2009 o 2010. Solamente se puede saber cuando "fecha_pedido" y "fecha_esperada" es en 2009, pero eso sería una parte de los pedidos, y si tenemos en cuenta los dos casos anteriores mencionados solamente podemos hacer estimaciones bastante vagas.

En ningún caso se puede saber exactamente todos los pedidos que se han rechazado en cualquier año.

--     b. Devuelve un listado de todos los pedidos que han sido entregados en el mes de enero de cualquier año.

SELECT * FROM pedido WHERE MONTH(fecha_entrega) = 1

--     c. Devuelve un listado con todos los productos que pertenecen a la gama ornamentales y que tienen más de 100 unidades en stock. El listado deberá estar ordenado por su precio de venta, mostrando en primer lugar los de mayor precio.

SELECT * FROM producto WHERE gama = "Ornamentales" AND cantidad_en_stock > 100 ORDER BY precio_venta DESC

--     d. Devuelve un listado de las diferentes gamas de producto que ha comprado cada cliente.

SELECT DISTINCT cliente.nombre_cliente, gama_producto.gama  FROM cliente
INNER JOIN pedido ON cliente.codigo_cliente = pedido.codigo_cliente
INNER JOIN detalle_pedido ON pedido.codigo_cliente = detalle_pedido.codigo_pedido
INNER JOIN producto ON detalle_pedido.codigo_producto = producto.codigo_producto
INNER JOIN gama_producto ON producto.gama = gama_producto.gama
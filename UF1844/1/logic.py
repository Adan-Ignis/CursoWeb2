precio_producto = 32
porcentaje_iva = 0.21
precio_total = precio_producto * (1 + porcentaje_iva)
print("El precio total es: " + str(precio_total))

grados_celsius = -17
grados_fh = grados_celsius * 9 / 5 + 32
mensajes = str(grados_celsius) + " Grados Celsius son " + str(grados_fh) + " Grados Fh"
print(mensajes)

peso = 57
altura = 1.77
imc = peso / altura ** 2
print(imc)
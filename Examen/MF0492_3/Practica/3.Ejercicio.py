# Dado este JSON:

#     [
#         {"nombre": "Ana", "edad": 25},
#         {"nombre": "Luis", "edad": 17},
#         {"nombre": "Carlos", "edad": 30}
#     ]

# Crea un programa python que:

#     1. Filtre solo los mayores de edad
#     2. Muestre sus nombres
#     3. Calcule la edad media

import json

data = [
    {"nombre": "Ana", "edad": 25},
    {"nombre": "Luis", "edad": 17},
    {"nombre": "Carlos", "edad": 30}
]

def filtrar_mayores(data):
    return [p for p in data if p["edad"] >= 18]

def obtener_nombres(personas):
    return [p["nombre"] for p in personas]

def calcular_media(personas):
    return sum(p["edad"] for p in personas) / len(personas) if personas else 0

mayores = filtrar_mayores(data)
# print("Mayores de edad: ", mayores)
print("Nombre: ", obtener_nombres(mayores))
print("Edad media: ", calcular_media(mayores))
# Crea una función python que valide una contraseña:

#     La contraseña debe cumplir:

#         - Mínimo 8 caracteres
#         - Al menos una mayúscula
#         - Al menos un número
#         - Al menos un carácter especial

# Devuelve:

#     - "Válida"
#     - o el motivo del error

import re

def validar_contrasena(password):

    if len(password) < 8:
        return False, "Debe tener al menos 8 caracteres"
    
    if not re.search(r"[A-Z]", password):
        return False, "Debe contener al menos una mayúscula"
    
    if not re.search(r"\d", password):
        return False, "Debe contener al menos un número"
    
    if not re.search(r"[!@#$%^&*(),.?\":{}|<>]", password):
        return False, "Debe contener al menos un carácter especial"

    return True, "Contraseña válida"

contrasena = input("Pon una contrasena: ")
print(f"{validar_contrasena(contrasena)}")
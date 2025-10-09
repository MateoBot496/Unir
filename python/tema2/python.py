def saludar() -> str:
    return "Hola, mundo!"

try:
    1/0
except ZeroDivisionError:
    print("Error: División por cero.")

print(saludar())
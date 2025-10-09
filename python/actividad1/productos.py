class producto: #Definimos la clase producto
    def __init__(self, id, nombre, precio, cantidad):
        self.id = id
        self.nombre = nombre
        self.precio = precio
        self.cantidad = cantidad
    def __repr__(self):
        return f"ID: {self.id:<3} | Nombre: {self.nombre:<15} | Precio: {self.precio:<8.2f} € | Cantidad: {self.cantidad:<5}"


#Creamos la lista productos y la variable next_id para dar una sensacion de autoincrement       
productos = []
next_id = 5


#Las 4 funciones CRUD        

def get_productos():
    for producto in productos:
        print(producto)
    return

def create_producto():
    global next_id
    name = input("Dame un nombre: ")
    precio = input("Dame un precio: ")
    cantidad = input("Dame una cantidad: ")
    new_producto = producto(next_id, name, int(precio), int(cantidad))
    next_id += 1
    productos.append(new_producto)

    print(new_producto)
    return

def update_producto():

    id = input("Dame el id del producto a modificar: ")
    name = input("Dame un nuevo nombre: ")
    precio = input("Dame un nuevo precio: ")
    cantidad = input("Dame una nueva cantidad: ")
    new_producto = producto(id, name, int(precio), int(cantidad))
    productos[int(id) - 1] = new_producto

    return

def delete_producto():
    id = input("Dame el id del producto a borrar: ")
    productos.remove(productos[int(id)])
    return  


laptop = producto(1,'Laptop', 1200.00, 10)
patata = producto(2,'Patata', 52.23, 10)
manta = producto(3,'Manta', 72.30, 10)
cocina = producto(4,'Cocina', 99.90, 10)
productos.append(laptop)
productos.append(patata)
productos.append(manta)
productos.append(cocina)



#Esto es el menú:


while True:
    print("")
    print("Menú:")
    print("1. Listar productos")
    print("2. Crear producto")
    print("3. Actualizar producto")
    print("4. Eliminar producto")
    print("5. Exit")

    respuesta = input("Seleccione una opción: ")
    print("")

    valores_validos = ["1","2","3","4","5"]

    if respuesta not in valores_validos:
        print('ERROR : Introduzca un valor valido.')
    else:
        match respuesta:
            case "1":
                get_productos()
            case "2":
                create_producto()
            case "3":
                update_producto()
            case "4":
                delete_producto()
            case "5":
                break

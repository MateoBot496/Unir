from producto import producto

productos = []

#Metemos 4 items dentro de la lista productos
laptop = producto('Laptop', 1200.00, 10)
patata = producto('Patata', 52.23, 10)
manta = producto('Manta', 72.30, 10)
cocina = producto('Cocina', 99.90, 10)
productos.append(laptop)
productos.append(patata)
productos.append(manta)
productos.append(cocina)

#Las 4 funciones CRUD        
def get_productos():
    for producto in productos:
        print(producto)
    return

def create_producto():
    #Validamos name.
    name = input("Dame un nombre: ").strip()
    if len(name) < 3 :
        print("ERROR: El nombre debe tener al menos 3 caracteres.")
        return
    
    #Validamos precio.
    precio = input("Dame un precio: ").strip()
    try:
        precio = float(precio)
        if precio < 0:
            print("ERROR: Precio debe ser un valor positivo.")
            return
    except ValueError:
        print("ERROR: Precio debe ser un numero.")
        return

    #Validamos cantidad.
    cantidad = input("Dame una cantidad: ").strip()
    try:
        cantidad = int(cantidad)
        if cantidad < 0:
            print("ERROR: Cantidad debe ser un valor positivo.")
            return
    except ValueError:
        print("ERROR: Cantidad debe ser un numero.")
        return

    new_producto = producto(name, precio, cantidad)
    productos.append(new_producto)
    print(new_producto)

    return

def update_producto():

    #Validamos id.
    id = input("Dame el id del producto a modificar: ").strip()
    try:
        id = int(id)
        if id < 1:
            print("ERROR: ID debe ser un valor entero mayor que 0.")
            return
    except ValueError:
        print("ERROR: ID debe ser un numero.")
        return
    
    #Validamos name.
    name = input("Dame un nuevo nombre: ").strip()
    if len(name) < 3 :
        print("ERROR: El nombre debe tener al menos 3 caracteres.")
        return
    
    #Validamos precio.
    precio = input("Dame un nuevo precio: ").strip()
    try:
        precio = float(precio)
        if precio < 0:
            print("ERROR: Precio debe ser un valor positivo.")
            return
    except ValueError:
        print("ERROR: Precio debe ser un numero.")
        return

    #Validamos cantidad.
    cantidad = input("Dame una nuevo cantidad: ").strip()
    try:
        cantidad = int(cantidad)
        if cantidad < 0:
            print("ERROR: Cantidad debe ser un valor positivo.")
            return
    except ValueError:
        print("ERROR: Cantidad debe ser un numero.")
        return

    for p in productos:
        if p.id == id:
            p.nombre = name
            p.precio = precio
            p.cantidad = cantidad
            print(f'Producto ID: {p.id} con nombre {p.nombre} actualizado correctamente!')
            return

    print("No hay ningun producto con ese id")
    return

def delete_producto():
    #Validamos id.
    id = input("Dame el id del producto a eliminar: ").strip()
    try:
        id = int(id)
        if id < 1:
            print("ERROR: ID debe ser un valor entero mayor que 0.")
            return
    except ValueError:
        print("ERROR: ID debe ser un numero.")
        return
    
    for p in productos:
        if p.id == id :
            productos.remove(p)
            return
    
    print("ERROR: No hay un objeto con ese ID.")
    return 
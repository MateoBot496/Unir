class producto: #Definimos la clase producto

    #Ponemos esta var id para dar sensacion de auto_increment cada vez que creamos un nuevo producto.
    id = 1
    
    def __init__(self, nombre, precio, cantidad):
        self.id = producto.id
        self.nombre = nombre
        self.precio = precio
        self.cantidad = cantidad
        producto.id += 1

    def __str__(self):
        return f"ID: {self.id:<3} | Nombre: {self.nombre:<15} | Precio: {self.precio:<8.2f} € | Cantidad: {self.cantidad:<5}"



from producto import producto
from logic import productos, get_productos, create_producto, update_producto, delete_producto

if __name__ == "__main__":
    #Creamos la lista productos y la variable next_id para dar una sensacion de autoincrement       

    #Esto es el menú:


    salir = False

    while salir == False:
        print("")
        print("Menu:")
        print("1. Listar productos")
        print("2. Crear producto")
        print("3. Actualizar producto")
        print("4. Eliminar producto")
        print("5. Exit")

        respuesta = input("Seleccione una opcion: ").strip()
        print("")


        try:
            valores_validos = [1, 2, 3, 4 , 5]
            if int(respuesta) not in valores_validos:
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
                        salir = True
        except ValueError:
            print('ERROR : Solo se admiten numeros como respuesta.')

        

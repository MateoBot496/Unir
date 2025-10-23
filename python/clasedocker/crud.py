
import mysql.connector
from mysql.connector import Error


def leer():
    query = "SELECT * FROM categorias"
    cursor.execute(query)
    categorias = cursor.fetchall()
    return categorias

def crear():
    nombre = input("Ingrese el nombre de la nueva categoría: ")
    descripcion = input("Ingrese la descripción de la nueva categoría: ")
    query = "INSERT INTO categorias (nombre, descripcion) VALUES (%s, %s)"
    cursor.execute(query, (nombre, descripcion))
    conexion.commit()
    print("Categoría creada exitosamente.")
    print(leer())
    return


def conectar():
    try:
        conexion = mysql.connector.connect(
            port="3307",
            host="localhost",
            user="python_app",
            password="password_segura",
            database="tienda",
            auth_plugin='mysql_native_password',
            use_pure=True
        )
        return conexion
    except Error as e:
        print(f"Error al conectar a MySQL: {e}")
        return None

try:
    conexion = conectar()
    if conexion:
    
        cursor = conexion.cursor()


        
        while True:
            print("1. leer categorias")
            print("2. crear categoria")
            print("3. actualizar categoria")
            print("4. eliminar categoria")
            print("5. salir")
            opcion = input("Seleccione una opción: ")

            match opcion:
                case "1":
                    print(leer())
                case "2":
                    crear()
except Error as e:
    print(f"Error al conectar a MySQL: {e}")
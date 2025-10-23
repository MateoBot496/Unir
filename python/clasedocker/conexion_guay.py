import mysql.connector
from mysql.connector import Error

try:
    # Usar with para gestionar automáticamente la conexión
    with mysql.connector.connect(
        port=3307,
        host="localhost",
        user="python_app",
        password="password_segura", 
        database="tienda",
        auth_plugin='mysql_native_password',
        use_pure=True
) as conexion:
        print("Conexión establecida correctamente")

# Aquí iría el código para trabajar con la base de datos
# La conexión se cerrará automáticamente al salir del bloque with
except Error as e:
    print(f"Error al conectar a MySQL: {e}")

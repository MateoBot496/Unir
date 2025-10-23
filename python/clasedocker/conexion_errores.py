import mysql.connector
from mysql.connector import Error, errorcode
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
    print("Conexión establecida correctamente" + str(conexion))
except Error as err:
    if err.errno == errorcode.ER_ACCESS_DENIED_ERROR:
        print("Error: Credenciales incorrectas")
    elif err.errno == errorcode.ER_BAD_DB_ERROR:
        print("Error: La base de datos no existe")
    elif err.errno == errorcode.CR_CONN_HOST_ERROR:
        print("Error: No se puede conectar al servidor MySQL")
    else:
        print(f"Error inesperado: {err}")
else:
    print(f"Conexión exitosa")
    conexion.close()
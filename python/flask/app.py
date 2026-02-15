from flask import Flask, jsonify
import mysql.connector
from mysql.connector import Error

app = Flask(__name__)

def get_db_connection():
    try:
        connection = mysql.connector.connect(
            host='localhost',
            port=3307,
            user='root',
            password='0236',
            database='tienda'
        )
        return connection
    except Error as e:
        print(f"Error connecting to MySQL: {e}")
        return None
    
@app.route('/api/products', methods=['GET'])
def get_products():
    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)

    cursor.execute("SELECT * FROM productos")
    products = cursor.fetchall()

    cursor.close()
    conn.close()

    return jsonify(products)

@app.route('/')

def home():
    return "Hello, World! Welcome to the Flask app."

#@app.route('/api/')
#def api():    
#    return jsonify(productos)


@app.route('/api/<int:product_id>', methods=['GET'])

def get_product(product_id):
    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)
    
    query = "SELECT * FROM productos WHERE id = %s"
    cursor.execute(query, (product_id,))

    product = cursor.fetchone()

    cursor.close()
    conn.close()

    if product is None:
        return jsonify({"error": "Product not found"}), 404

    return jsonify(product)


@app.route('/api/category/<string:category_name>', methods=['GET'])

def get_products_by_cat(category_name):
    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)

    query = """
        SELECT productos.*
        FROM productos
        JOIN categorias ON productos.categoria_id = categorias.id
        WHERE categorias.nombre LIKE %s
    """

    cursor.execute(query, (f"%{category_name}%",))
    productos = cursor.fetchall()

    cursor.close()
    conn.close()

    if not productos:
        return jsonify({"error": "No products found for this category"}), 404

    return jsonify(productos)

if __name__ == '__main__':
    app.run(debug=True)


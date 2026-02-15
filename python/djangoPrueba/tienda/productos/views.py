from django.shortcuts import render
from .models import Producto

def lista_productos(request):
    productos = Producto.objects.all()  # obtiene todos los productos de la BD
    return render(request, 'productos/lista.html', {'productos': productos})

def detalle(request, producto_id):
    producto = Producto.objects.get(id = producto_id)
    return render(request, 'productos/detalle.html', {'producto': producto})
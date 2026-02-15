from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
from .models import Producto  # 👈 importa tu modelo

def productos_list(request):
    return HttpResponse("Lista de productos")

def detalle_producto(request, producto_id):
    producto = get_object_or_404(Producto, id=producto_id)
    return render(request, 'productos/detalle_producto.html', {'producto': producto})

from django.contrib import admin # type: ignore
from .models import Producto, Categoria

admin.site.register(Producto)
admin.site.register(Categoria)

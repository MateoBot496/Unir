from django.contrib import admin

from .models import Producto, Categoria

class ProductoAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'precio', 'categoria', 'stock', 'disponible')
    list_filter = ('disponible', 'categoria')
    search_fields = ('nombre', 'descripcion')
    list_editable = ('precio', 'stock', 'disponible')
admin.site.register(Producto, ProductoAdmin)
admin.site.register(Categoria)
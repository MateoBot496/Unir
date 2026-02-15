from django.contrib import admin # type: ignore
from .models import Libro
# Register your models here.


class LibroAdmin(admin.ModelAdmin):
    list_display = ('titulo', 'autor')
    list_filter = ('disponible', 'autor')
    search_fields = ('titulo', 'autor')

admin.site.register(Libro, LibroAdmin)
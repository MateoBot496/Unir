from django.contrib import admin
from django.urls import path, include

from rest_framework.routers import DefaultRouter
from productos.api import ProductoViewSet

# Enrutador automático de Django REST Framework
router = DefaultRouter()
router.register('productos', ProductoViewSet, basename='producto')

urlpatterns = [
    path('admin/', admin.site.urls),
    # Rutas de la parte web (plantillas/templates)
    #path('productos/',include('productos.urls')),

    # Rutas de la API REST
    path('api/', include(router.urls)),
]
from django.urls import path
from . import views

urlpatterns = [
    path('', views.lista_libros, name='lista_libros'),
    path('<int:libro_id>/', views.detalle, name='detalle'),
    path('crear/', views.crear, name='crear'),
    path('update/<int:libro_id>/', views.update, name='update'),
    path('borrar/<int:libro_id>/', views.borrar, name='borrar')
]
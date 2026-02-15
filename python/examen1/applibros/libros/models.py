from django.db import models # type: ignore

# Create your models here.
class Libro(models.Model):
    titulo = models.CharField(max_length=100)  
    autor = models.CharField(max_length=100)   
    fecha_publicacion = models.DateField(blank=True, null=True)
    paginas = models.IntegerField()  
    disponible = models.BooleanField(default=True) 
    creado = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = 'libros'

    def __str__(self):
        return self.titulo
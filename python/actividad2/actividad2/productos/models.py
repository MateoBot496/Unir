from django.db import models

class Producto(models.Model):
    nombre = models.CharField(max_length=100)
    precio = models.FloatField()
    cantidad = models.IntegerField()

    class Meta:
        db_table = 'productos'

    def __str__(self):
        return self.nombre
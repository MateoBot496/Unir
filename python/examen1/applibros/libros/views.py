from django.shortcuts import render,redirect, get_object_or_404
from .models import Libro
from .forms import LibroForm
# Create your views here.

def lista_libros(request):
    libros = Libro.objects.all()
    return render(request, 'libros/lista.html', {'libros': libros})

def detalle(request, libro_id):
    libro = Libro.objects.get(id = libro_id)
    return render(request, 'libros/detalle.html', {'libro': libro})

def crear(request):
    form = LibroForm(request.POST or None)
    if request.method == 'POST' and form.is_valid():
        p = form.save()
        return redirect('detalle', libro_id=p.id)
    return render(request, 'libros/crear.html', {'form': form})

def update(request, libro_id):
    libro = get_object_or_404(Libro, id=libro_id)
    form = LibroForm(request.POST or None, instance=libro)
    if request.method == 'POST' and form.is_valid():
        form.save()
        return redirect('detalle', libro_id=libro.id)
    return render(request, 'libros/update.html', {'form': form, 'libro': libro})

def borrar(request, libro_id):
    libro = get_object_or_404(Libro, id=libro_id)
    if request.method == 'POST':
        libro.delete()
        return redirect('lista_libros')
    return render(request, 'libros/borrar.html', {'libro': libro})
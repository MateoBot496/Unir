from fastapi import FastAPI, Depends, HTTPException
from pydantic import BaseModel, Field
from sqlalchemy.orm import Session
from auth import router as auth_router
from deps import get_current_user

from db import get_db
from models import Producto

app = FastAPI(
    title="FastAPI + Swagger + JWT (básico)",
    description="Login → token → endpoint protegido",
    version="1.0.0"
)

class ProductoCreate(BaseModel):
    nombre: str = Field(min_length=1, max_length=100)
    precio: float = Field(gt=0)
    stock: int = Field(ge=0, default=0)

class ProductoResponse(ProductoCreate):
    id: int
    class Config:
        from_attributes = True  # Pydantic v2

app.include_router(auth_router)

@app.get("/")
def root():
    return {"ok": True, "mensaje": "API con MySQL lista. Ve a /docs"}

@app.get("/privado")
def privado(usuario: str = Depends(get_current_user)):
    return {"mensaje": f"Hola {usuario}, estás autenticado"}


@app.get("/productos", response_model=list[ProductoResponse])
def listar_productos(db: Session = Depends(get_db)):
    return db.query(Producto).all()

@app.get("/productos/{producto_id}", response_model=ProductoResponse)
def obtener_producto(producto_id: int, db: Session = Depends(get_db)):
    prod = db.query(Producto).filter(Producto.id == producto_id).first()
    if not prod:
        raise HTTPException(status_code=404, detail="Producto no encontrado")
    return prod
@app.post("/productos", response_model=ProductoResponse, status_code=201)
def crear_producto(
    producto: ProductoCreate,
    db: Session = Depends(get_db),
    usuario: str = Depends(get_current_user)
):
    nuevo = Producto(
        nombre=producto.nombre,
        precio=producto.precio,
        stock=producto.stock
    )
    db.add(nuevo)
    db.commit()
    db.refresh(nuevo)
    return nuevo

@app.get("/nombre")
def nombre(usuario: str = Depends(get_current_user)):
    return{"usuario": usuario}

@app.put("/productos/{producto_id}", response_model=ProductoResponse)
def actualizar_producto(
    producto_id: int,
    producto: ProductoCreate,
    db: Session = Depends(get_db),
    usuario: str = Depends(get_current_user)
):
    existente = db.query(Producto).filter(Producto.id == producto_id).first()
    if not existente:
        raise HTTPException(status_code=404, detail="Producto no encontrado")

    existente.nombre = producto.nombre
    existente.precio = producto.precio
    existente.stock = producto.stock

    db.commit()
    db.refresh(existente)
    return existente


@app.delete("/productos/{producto_id}", status_code=204)
def eliminar_producto(
    producto_id: int,
    db: Session = Depends(get_db),
    usuario: str = Depends(get_current_user)
):
    existente = db.query(Producto).filter(Producto.id == producto_id).first()
    if not existente:
        raise HTTPException(status_code=404, detail="Producto no encontrado")

    db.delete(existente)
    db.commit()
    return
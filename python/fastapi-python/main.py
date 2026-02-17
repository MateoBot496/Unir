from fastapi import FastAPI, Depends, HTTPException
from pydantic import BaseModel, Field
from sqlalchemy.orm import Session
from auth import router as auth_router
from deps import get_current_user

from db import get_db
from models import Incidencia

app = FastAPI(
    title="FastAPI + Swagger + JWT (básico)",
    description="Login → token → endpoint protegido",
    version="1.0.0"
)

class IncidenciaCreate(BaseModel):
    titulo: str = Field(min_length=1, max_length=100)
    descripcion: str = Field(min_length=1, max_length=255)
    prioridad: str = Field(default="media")
    estado: str = Field(default="abierto")

class IncidenciaResponse(IncidenciaCreate):
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


@app.get("/incidencias", response_model=list[IncidenciaResponse])
def listar_incidencias(
    db: Session = Depends(get_db),
    usuario: str = Depends(get_current_user)  # <- protección JWT
):
    return db.query(Incidencia).all()


@app.get("/incidencias/{incidencia_id}", response_model=IncidenciaResponse)
def obtener_incidencia(incidencia_id: int, db: Session = Depends(get_db), usuario: str = Depends(get_current_user)):
    incid = db.query(Incidencia).filter(Incidencia.id == incidencia_id).first()
    if not incid:
        raise HTTPException(status_code=404, detail="Incidencia no encontrada")
    return incid
@app.post("/incidencias", response_model=IncidenciaResponse, status_code=201)
def crear_incidencia(
    incidencia: IncidenciaCreate,
    db: Session = Depends(get_db),
    usuario: str = Depends(get_current_user)
):
    nuevo = Incidencia(
        titulo=incidencia.titulo,
        descripcion=incidencia.descripcion,
        prioridad=incidencia.prioridad,
        estado=incidencia.estado
    
    )
    db.add(nuevo)
    db.commit()
    db.refresh(nuevo)
    return nuevo

@app.get("/nombre")
def nombre(usuario: str = Depends(get_current_user)):
    return{"usuario": usuario}

@app.put("/incidencias/{incidencia_id}", response_model=IncidenciaResponse)
def actualizar_incidencia(
    incidencia_id: int,
    incidencia: IncidenciaCreate,
    db: Session = Depends(get_db),
    usuario: str = Depends(get_current_user)
):
    existente = db.query(Incidencia).filter(Incidencia.id == incidencia_id).first()
    if not existente:
        raise HTTPException(status_code=404, detail="Incidencia no encontrada")

    existente.titulo = incidencia.titulo
    existente.descripcion = incidencia.descripcion
    existente.prioridad = incidencia.prioridad
    existente.estado = incidencia.estado

    db.commit()
    db.refresh(existente)
    return existente


@app.delete("/incidencias/{incidencia_id}", status_code=204)
def eliminar_incidencia(
    incidencia_id: int,
    db: Session = Depends(get_db),
    usuario: str = Depends(get_current_user)
):
    existente = db.query(Incidencia).filter(Incidencia.id == incidencia_id).first()
    if not existente:
        raise HTTPException(status_code=404, detail="Incidencia no encontrada")

    db.delete(existente)
    db.commit()
    return
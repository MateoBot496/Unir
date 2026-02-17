from sqlalchemy import Column, Integer, String, Numeric
from db import Base

class Incidencia(Base):
    __tablename__ = "incidencias"

    id = Column(Integer, primary_key=True, index=True)
    titulo = Column(String(100), nullable=False)
    descripcion = Column(String(255), nullable=False)
    prioridad = Column(String(50), nullable=False, default="media")
    estado = Column(String(50), nullable=False, default="abierto")
import pandas as pd
datos_estudiantes = {
    'Nombre': ['Juan', 'María', 'Pedro', 'Ana'],
    'Edad': [20, 22, 19, 21],   
    'Calificación': [85, 90, 78, 92]
}
df_estudiantes = pd.DataFrame(datos_estudiantes)
print(df_estudiantes)

# Acceder a una columna
print("Esto es .info()")
print(df_estudiantes.info())
print("Esto es .describe()")
print(df_estudiantes.describe())

print("Esto es .unique()")
print(df_estudiantes['Nombre'].unique())
edad_media = df_estudiantes['Edad'].mean()
print(f'La edad media de los estudiantes es: {edad_media}')

edad_por_nombre = df_estudiantes.groupby('Nombre')['Edad'].sum()
print("Esto es .groupby()")
print(edad_por_nombre.sum())

persona_mas_mayor = edad_por_nombre.sort_index(ascending=False)
print(f'La persona más mayor es: {persona_mas_mayor}')

df_estudiantes['Aprobado'] = df_estudiantes['Calificación'] >= 60
print(f"Estas personas han aprobado: {df_estudiantes['Aprobado']}")
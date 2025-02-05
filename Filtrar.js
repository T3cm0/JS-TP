// Función para filtrar actividades de nivel "intermedio"
function filtrarActividadesIntermedias(actividades) {
    return actividades.filter(actividad => actividad.nivel === "intermedio");
  }
  
  // Ejemplo de datos de entrada
  const actividades = [
    { titulo: "Introducción a funciones", nivel: "básico" },
    { titulo: "Gráficas de funciones", nivel: "intermedio" },
    { titulo: "Análisis complejo", nivel: "avanzado" }
  ];
  
  // Llama a la función y muestra el resultado
  const actividadesIntermedias = filtrarActividadesIntermedias(actividades);
  console.log("Actividades de nivel intermedio:", actividadesIntermedias);
  
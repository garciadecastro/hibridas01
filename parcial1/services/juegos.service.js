import { readFile } from "node:fs/promises"; // Importa la función readFile del módulo fs/promises para leer archivos de forma asíncrona

//FUNCIONES con los datos para exportar
//Traer todos los productos
export async function getJuegos () {
  return readFile("./data/juegos.json", "utf-8")       // Lee el archivo productos.json como texto UTF-8
  .then((data) => JSON.parse(data))              // Convierte el contenido leído a objeto/array con JSON.parse
  .catch(err => [])                              // Si hay error al leer, devuelve un array vacío
}

//Filtrar los productos por id
export async function getJuegoById (id) {
  return getJuegos ()
  .then ((juegos) => {
    let juego;
    for (let i = 0 ; i < juegos.length ; i++) {
      if (juegos[i].id == id) {
            juego = juegos[i]
          }

    }
    return juego;
  });  
}
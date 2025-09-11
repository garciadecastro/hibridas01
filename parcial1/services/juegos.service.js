import { readFile, writeFile } from "node:fs/promises"; // Importa la función readFile del módulo fs/promises para leer archivos de forma asíncrona

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

// Filtrar los productos por categoría
export async function getJuegosBySection(categoria) {
  return getJuegos()
    .then((juegos) => {
      return juegos.filter((j) => j.categoria === categoria);
    });
}
// Guardar un nuevo juego en juegos.json
export function guardarJuego(juego){
  return getJuegos().then( async juegos => {
    const nuevoJuego = {
      id: juegos.length + 1,
      ...juego
    }

    juegos.push(nuevoJuego)
    await writeFile( "./data/juegos.json", JSON.stringify(juegos) )
    return nuevoJuego
  });
}

//Editar Juego
//export function editarJuego(id, juego){
export function editarJuego(id, juego) {
  return getJuegos().then(async juegos => {
    console.log("juego editado", juego)
    const juegoEditado = {
      id: id,
      ... juego
    }
    const nuevoListado = juegos.filter( j => j.id != id )
    nuevoListado.push(juegoEditado)
    console.log("Nuevo listado", juegos)
    await writeFile("./data/juegos.json", JSON.stringify(nuevoListado))
    console.log("Nuevo juego devuelto", juegoEditado)
    return juegoEditado
  })
}


//Borrar Juego
export function borrarJuego(id){
  return getJuegos().then( async (juegos) => {

    const nuevoListado = juegos.map( j => {
      if( j.id == id ){
        j.eliminado = true
      }
      return j
    } )

    await writeFile("./data/juegos.json", JSON.stringify(nuevoListado))

    return id
  });
}
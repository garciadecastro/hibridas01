import { readFile, writeFile } from "node:fs/promises"; // Importa la función readFile del módulo fs/promises para leer archivos de forma asíncrona

//FUNCIONES con los datos para exportar
//Traer todos los productos
export async function getJuegos() {
  return readFile("./data/juegos.json", "utf-8")
    .then(data => {
      const juegos = JSON.parse(data);
      // Solo devuelvo los que no tienen eliminado: true
      return juegos.filter(j => !j.eliminado);
    })
    .catch(err => []);
}


// Trae TODOS los juegos, incluso eliminados. La necesitamos para no perder los juegos eliminados.
//Quizás vuelvan al catálogo en el futuro y necesitamos además mantener la integridad de las id
async function getAllJuegos() {
  return readFile("./data/juegos.json", "utf-8")
    .then(data => JSON.parse(data))
    .catch(err => []);
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
  return getAllJuegos().then( async juegos => {
    // Para que no se den casos de Id repetida busco el id más alto y le sumo 1
    const idMax = juegos.length > 0 ? Math.max(...juegos.map(j => j.id)) : 0;

    const nuevoJuego = {
      id: idMax + 1, // los id no se repetirán aunque borre juegos
      ...juego
    };

    juegos.push(nuevoJuego)
    // Acá uso JSON.stringify con null, 2 → eso significa que el archivo se guarda con espacios e indentado
    // Así se leerá mejor
    await writeFile("./data/juegos.json", JSON.stringify(juegos, null, 2));
    return nuevoJuego
  });
}

//Editar Juego
//export function editarJuego(id, juego){

export function editarJuego(juego) {
  return getAllJuegos().then(async juegos => {
    console.log("juego editado", juego)
    const nuevoListado = juegos.map(j => j.id == juego.id ? juego : j);

    await writeFile("./data/juegos.json", JSON.stringify(nuevoListado, null, 2));
    return juego;
  });
}

//Actualizar Juego
export function actualizarJuego(juego) {
  return getAllJuegos().then(async juegos => {
    console.log("juego actualizado parcialmente", juego)

    const nuevoListado = juegos.map(j => {
      if (j.id == juego.id) {
        return {
          id: j.id,
          nombre: juego.nombre || j.nombre,
          editorial: juego.editorial || j.editorial,
          precio: juego.precio || j.precio,
          year: juego.year || j.year,
          categoria: juego.categoria || j.categoria
        }
      }
      return j
    });

    await writeFile("./data/juegos.json", JSON.stringify(nuevoListado, null, 2));
    return juego;
  });
}



//Borrar Juego
export function borrarJuego(id) {
  return getJuegos().then(async juegos => {
    // Marco como eliminado
    const nuevoListado = juegos.map(j =>
      j.id == id ? { ...j, eliminado: true } : j
    );

    await writeFile("./data/juegos.json", JSON.stringify(nuevoListado, null, 2));
    return id;
  });
}

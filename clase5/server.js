//Importación del módulo express
//sintaxis ES Modules (ESM) (import) en lugar de require().
import express from "express";
import { readFile } from "node:fs/promises";

import { createPage } from "./pages/utils.js"; //no olvidla extensión .js en la ruta

// La llamada express() devuelve una aplicación de Express, que es un objeto que representa tu servidor.
// app es la instancia donde vas a:
// Definir rutas (app.get(), app.post(), etc.).
// Configurar middlewares (funciones que procesan las peticiones antes de responder).
// Manejar errores, cabeceras, JSON, etc.
// Piensa en app como la fábrica de tu servidor.
const app = express();

// req = request (la petición que envía el cliente).
// Aquí tienes datos como parámetros, cabeceras, cuerpo (si fuera POST), etc.
// res = response (la respuesta que enviará el servidor).
// Aquí decides qué enviar de vuelta al cliente: texto, JSON, HTML, etc.

/* ---------------------- TIPOS DE PARÁMETROS ---------------------- 
   - Query params → req.query (pasan en la URL después de ?ejemplo=valor)
   - Route params → req.params (definidos en la ruta con :ejemplo)
   - Body → req.body (datos enviados en POST/PUT en formato JSON o form-data)
-------------------------------------------------------------------*/

//SEPARACIÓN DE FUNCIONES
async function getJuegos () {
  return readFile("./data/juegos.json", "utf-8")       // Lee el archivo productos.json como texto UTF-8
  .then((data) => JSON.parse(data))              // Convierte el contenido leído a objeto/array con JSON.parse
  .catch(err => [])                              // Si hay error al leer, devuelve un array vacío
}

//Listar nuestros juegos
function crearListaDeJuegos (juegos) {
  let html = "<ul>";                           // Inicializa un string HTML con una lista desordenada
      juegos.forEach(juego => {                            // Recorre cada producto
          html += `<li>                                          
                      <strong>ID:</strong> ${juego.id}
                      <br>     
                      <strong>Nombre:</strong> ${juego.nombre} <a href="/${juego.id}">Ver</a>
                      <br>   
                      <strong>Editorial:</strong> ${juego.editorial} 
                      <br>  
                      <strong>Año:</strong> ${juego.year} 
                    </li>`;                                      // Agrega todos los campos
      });                                           // Fin del bucle forEach
      
      html += "</ul>";    

      return html;

}

//Filtrar los productos por id
async function getJuegosbyId (id) {
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

// Ruta principal: devuelve un listado de productos
app.get("/", (req, res) => {                       // Define una ruta GET en "/" que recibe request y response
  readFile("./data/juegos.json", "utf-8")       // Lee el archivo productos.json como texto UTF-8
    getJuegos()                                 // Se llama a la función que ya trae todos los juegos en un objeto.
    .then((juegos) => {                         // Recibe los productos (array del JSON ya parseado)
     res.send(createPage("Listado de Juegos", crearListaDeJuegos (juegos)));                              // Envía el HTML como respuesta al cliente
    })
})     

// Ruta con parámetro dinámico :id → devuelve un producto específico por ID
app.get("/:id", (req, res) => {          // Define una ruta GET con un parámetro dinámico ":id"
  const id = req.params.id;              // Extrae el valor del parámetro "id" de la URL
  
  getJuegosbyId (id)
  .then(juego =>{
    let html = "";

        if (juego) { // Caso de que exista el juego
                  
          html += "<ul>"
          html += `<li>Nombre: ${juego.nombre} </li>`
          html += `<li>Editorial: ${juego.editorial} </li>`
          html += `<li>Año: ${juego.year} </li>`
          html += "</ul>"
          html += `<a href="/">Volver</a>`

          res.send(createPage("Detalles de juego", html)); 

        } else {
          html += `<h2>No se encontró ningún juego con esa 'id' </h2>`
          html += `<a href="/">Volver</a>`
          res.send(createPage("404", html)); 
        }
  })     
                                          
});  




//Esta función levanta el servidor y lo pone a escuchar peticiones HTTP en un puerto específico (ej: 3000).
app.listen(12305, ()=> console.log("Funcionando en puerto extraño: 12305."));

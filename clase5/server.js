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

// MANERAS DE RECIBIR LA INFORMACIÓN
// 1 Query params → req.query (ENTRA POR LA URL A LAS CONSTANTES QUE HAYAMOS INDICADO)
// 2 Route params → req.params (arámetros en la ruta con :)
// 3 Body (JSON, form-data, etc.) → req.body cuerpo de la petición, normalmente en POST/PUT

app.get("/", (req, res) => {                       // Define una ruta GET en "/" que recibe request y response
  readFile("./data/productos.json", "utf-8")       // Lee el archivo productos.json como texto UTF-8
    .then((data) => JSON.parse(data))              // Convierte el contenido leído a objeto/array con JSON.parse
    .catch(err => [])                              // Si hay error al leer, devuelve un array vacío
    .then((productos) => {                         // Recibe los productos (array del JSON ya parseado)
      let html = "<ul>";                           // Inicializa un string HTML con una lista desordenada
      productos.forEach(producto => {                            // Recorre cada producto
          html += `<li>                                          
                      <strong>ID:</strong> ${producto.id} <br>     
                      <strong>Nombre:</strong> ${producto.nombre} <br>   
                      <strong>Editorial:</strong> ${producto.editorial} <br>  
                      <strong>Año:</strong> ${producto.year}
                    </li>`;                                      // Agrega todos los campos
      });                                           // Fin del bucle forEach
      
      html += "</ul>";                             // Cierra la lista HTML
      res.send(createPage("Listado de Juegos", html));                              // Envía el HTML como respuesta al cliente
    })
})     

//Esta función levanta el servidor y lo pone a escuchar peticiones HTTP en un puerto específico (ej: 3000).
app.listen(12305, ()=> console.log("Funcionando en puerto extraño: 12305."));

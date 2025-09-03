//Importación del módulo express
//sintaxis ES Modules (ESM) (import) en lugar de require().
import express from "express";
import { readFile } from "node:fs/promises";
import { getJuegos, getJuegoById  } from "./service/juegos.service.js"; // Esta línea importa las funciones getJuegos y getJuegosbyId desde el archivo juegos.service.js ubicado en la carpeta service. Estas funciones se utilizan para obtener datos relacionados con los juegos desde un archivo JSON.

import * as controller from "./controllers/juegos.controller.js";
// Crear una aplicación de Express
// La función express() es el núcleo de una aplicación Express.
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


// Ruta principal: devuelve un listado de productos
app.get("/", controller.getJuegos);

// Ruta con parámetro dinámico :id → devuelve un producto específico por ID
app.get("/juegos/:id", controller.getJuegoById);
//OJO CARLOS CON LAS RUTAS QUE LA LÍAS PARDA



//Esta función levanta el servidor y lo pone a escuchar peticiones HTTP en un puerto específico (ej: 3000).
app.listen(12305, ()=> console.log("Funcionando en puerto extraño: 12305."));

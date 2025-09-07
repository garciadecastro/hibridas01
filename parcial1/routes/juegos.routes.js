import express from "express"
import * as controller from '../controllers/juegos.controller.js'

//Creación del router con express. Esto sirve para definir rutas en un módulo separado.
const route = express.Router();

// Ruta principal: devuelve un listado de productos
route.get("/juegos", controller.getJuegos);
//Ruta para juego individual
route.get("/juegos/:id", controller.getJuegoById);
// Rurta para filtrar por categoría
route.get("/seccion/:categoria", controller.getJuegosByCategoria);


export default route;
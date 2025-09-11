import express from "express"
import * as controller from '../controllers/juegos.controller.js'

//Creación del router con express. Esto sirve para definir rutas en un módulo separado.
const route = express.Router();

// Ruta principal: devuelve un listado de juegos
route.get("/juegos", controller.getJuegos);
// Ruta añadir juego nuevo
route.get("/juegos/nuevo", controller.formularioNuevoJuego);
// Ruta POST para guardar un nuevo juego
route.post("/juegos/nuevo", controller.guardarJuego);
// Ruta de edición
route.get("/juegos/editar/:id", controller.formularioEditarJuego)
route.post("/juegos/editar/:id", controller.editarJuego)

//Rutas de Borrado
route.get("/juegos/borrar/:id", controller.formularioBorrarJuego)
route.post("/juegos/borrar/:id", controller.borrarJuego)

//Ruta para juego individual
route.get("/juegos/:id", controller.getJuegoById);
// Rurta para filtrar por categoría
route.get("/seccion/:categoria", controller.getJuegosByCategoria);



export default route;
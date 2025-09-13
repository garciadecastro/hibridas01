import express from 'express';
import * as controllers from '../controllers/juegos.api.controller.js' 

const router = express.Router();

router.get('/', controllers.getJuegos);
router.get("/:id", controllers.getJuegoById)


export default router;

//ACÁ VAN A IR TODAS NUESTRAS RUTAS
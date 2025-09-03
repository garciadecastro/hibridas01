//Importación del módulo express
//sintaxis ES Modules (ESM) (import) en lugar de require().
import express from "express";
import JuegosRoute from "./routes/juegos.routes.js" 

const app = express();

app.use(JuegosRoute);

//Middleware para procesar datos en formato JSON
app.use(express.json());


//Esta función levanta el servidor y lo pone a escuchar peticiones HTTP en un puerto específico (ej: 3000).
app.listen(12305, ()=> console.log("Funcionando en puerto extraño: 12305."));

//Estamos trabajando con el framework 'Express'

//COMANDOS
//npm init -y comando 1 para que npm maneje mi proyecto
//npm i nodemon -D -E (desarrollo y versión exacta)
//npm i express -E (E es versión estable)

//Express es un framework, aunque se instala como una dependencia

import express from "express";
import path from "path";
import { fileURLToPath } from "url";

// Para poder usar __dirname con módulos ES (import/export)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//app es una instancia de la clase Express
const app = express();


// Middleware para servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, "public")));

//Los middleware sonfunciones que se ejecutan antes de que la solicitud llegue a una ruta
// Middleware para parsear datos del formulario
app.use(express.urlencoded({"extended": true}));


//Con esta función enviamos información por la URL

//GET manda la información por la URL y se puede ver
//GET para filtros, productos...
//Ejemplo: http://localhost:2025/?key=Juli&apellido=Urrestarazu
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "contacto.html"));
});

//POST LLEGA POR EL BODY DEL MENSAJE
app.post("/", (req, res) => {
  console.log("Datos enviados por POST:", req.body);
  res.send("¡Formulario recibido!");
});

// Chequeo del funcionamiento del servidor
app.listen(2025, () => {
  console.log("Servidor funcionando en http://localhost:2025");
});
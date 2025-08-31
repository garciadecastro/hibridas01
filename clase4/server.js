//PAUSADO EN EL MINUTO 35


//Estamos trabajando con el framework 'Express'

//COMANDOS
//npm init -y comando 1 para que npm maneje mi proyecto
//npm i nodemon -D -E (desarrollo y versión exacta)
//npm i express -E (E es versión estable)

//Express es un framework, aunque se instala como una dependencia

import express from "express";

//app es una instancia de la clase Express
const app = express();

//Los middleware sonfunciones que se ejecutan antes de que la solicitud llegue a una ruta
// Middleware para parsear datos del formulario
app.use(express.urlencoded({"extended": true}));

// Middleware para ARCHIVOS JSON
//De esta forma ya manejamos JSON
app.use( express.json() );


//Con esta función enviamos información por la URL

//GET manda la información por la URL y se puede ver
//GET para filtros, productos...
//Ejemplo: http://localhost:2025/?key=Juli&apellido=Urrestarazu
    app.get("/", (req, res) => {
      res.sendFile(path.join(__dirname, "public", "contacto.html"));
    });

//GET con parámetros
app.get("/:nombre", (req, res) => {
  console.log("Hola, estoy usando parámetros", req.params);
  res.send("¡Recibido intento con paraámetros!");
});

//POST Es una función de Express que define una ruta POST, 
// es decir, una ruta que responde a solicitudes HTTP de tipo POST.
//POST LLEGA POR EL BODY DEL MENSAJE
app.post("/", (req, res) => {
  console.log("Datos enviados por POST:", req.body);
  res.send("¡Formulario recibido!");
});



// Chequeo del funcionamiento del servidor
app.listen(2025, () => {
  console.log("Servidor funcionando en http://localhost:2025");
});

//INFO
//fetch es una función de JavaScript que se usa para hacer peticiones HTTP
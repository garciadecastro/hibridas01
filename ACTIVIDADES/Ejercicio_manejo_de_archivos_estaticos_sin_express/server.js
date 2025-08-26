//const http = require("http"); Con 'module' en el packagejson no usamos más 'require'
import http from "http";

// const productos = require("./data/productos.js"); viejo
import productos from "./data/productos.js"; //nuevo

// const pages = require("./pages/utils.js"); VIEJO
import {createPage, createProductsList} from "./pages/utils.js"

import { readFile } from "fs";

const server = http.createServer(function(request, response){
  switch (request.url) {
    case "/":
            response.write(createPage("Home", "Nombre y Apellidos"));
            
    break;
    
     case "/materia":
           response.write(createPage("Materia","Aplicaciones Híbridas"));
    break;

    case "/profesor":
        response.write(createPage("Profesor","Victor Emanuel Villafañe"));
    break;

    case "/cafes":
           response.write(createPage("Página de cafés",createProductsList(productos)));
    break;

    case "/contacto.html": //ruta para probar APLI fs
        readFile("public/contacto.html", function(err, data) {
          if (err) {
            console.error("No se encontró el archivo o no tiene permisos");
          }
          response.write(data);
          response.end();
          
        })
    break;

    case "/style.css": //usando archivo hoja de estilo
        readFile("public/style.css", function(err, data) {
          if (err) {
            console.error("No se encontró el archivo o no tiene permisos");
          }
          response.write(data);
          response.end();
          
        })
    break;

    default:
        response.write(createPage("404","Página no encontrada"));
    break;
  }

  
});

server.listen(2023, () => {
  console.log("¡Funcionando!...") 
})

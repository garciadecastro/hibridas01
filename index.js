const http = require("http");

//ya tengo el protocolo, commonjs

//import http from "http" requiere más configuración

//1 NECESITAMOS FUNCIÓN DE CALL BACK

http.createServer( function(request, response){
    console.log("Hola desde el servidor");
}).listen(2025);
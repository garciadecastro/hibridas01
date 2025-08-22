const http = require("http")

const server = http.createServer(function(request, response){
  switch (request.url) {
    case "/":
        response.write("Hola bienvenido\n");
        response.write("Esta es la segunda linea\n");
        response.write("Esta es la tercera linea\n");
        response.end("Hemos terminado");
      break;
    case "/usuarios":
      response.end("Listado usuarios");
      break;
    default:
      response.end("No se encontro la ruta");
      break;
  }
});

server.listen(2025, () => {
  console.log("¡Funcionando!...") 
})

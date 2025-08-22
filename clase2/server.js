const http = require("http")

const server = http.createServer(function(request, response){
  switch (request.url) {
    case "/":
      response.end("Hola bienvenido");
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

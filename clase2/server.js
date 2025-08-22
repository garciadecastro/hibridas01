const http = require("http")

const server = http.createServer(function(request, response){
    console.log("Route que me envió el cliente: ", request.url);
  response.end("Puedo enviar un mensaje, pero no usar tildes á é í ó ú");
})

server.listen(2025, () => {
  console.log("¡Funcionando!...") 
})

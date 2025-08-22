const http = require("http")

const usuarios = [
  { id: 1, nombre: "Juan", apellido: "Perez" },
  { id: 2, nombre: "Pepe", apellido: "Perez" },
  { id: 3, nombre: "Juan", apellido: "Gonzalez" }
];

const server = http.createServer(function(request, response){
  switch (request.url) {
    case "/":
        response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        response.write("Hola bienvenido<br>");
        response.write("Esta es la segunda línea<br>");
        response.write("Esta es la tercera línea<br>");
        response.end("Hemos terminado");
      break;
    case "/usuarios":
        response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        response.write("<h1>Mi pagina</h1>");
        response.write("<ul>")
        
            usuarios.forEach(usuario => {
            
                response.write(`<li>${usuario.id} - ${usuario.nombre} - ${usuario.apellido}</li>`)
            })

        response.write("</ul>")
        
        response.end("Listado usuarios")
        
        break

        default:
            response.end("No se encontro la ruta");
        break;
  }
});

server.listen(2025, () => {
  console.log("¡Funcionando!...") 
})

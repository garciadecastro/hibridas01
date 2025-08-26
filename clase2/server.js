const http = require("http")

const usuarios = [
    { 
        id: 1, 
        nombre: "Juan", 
        apellido: "Perez" 
    },

    { 
        id: 2, 
        nombre: "Pepe", 
        apellido: "Perez" 
    },
    { 
        id: 3, 
        nombre: "Juan", 
        apellido: "Gonzalez" 
    }

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
          response.write(`
    <html>
      <head>
        <title>Mi página</title>
        <style>
          body { font-family: Arial, sans-serif; background: #f4f4f4; padding: 20px; }
          h1 { color: #333; }
          table { border-collapse: collapse; width: 50%; margin-top: 20px; }
          th, td { border: 1px solid #999; padding: 8px; text-align: left; }
          th { background: #eee; }
        </style>
      </head>
      <body>
        <h1>Mi página</h1>
        <table>
          <tr>
            <th>id</th>
            <th>nombre</th>
            <th>apellido</th>
          </tr>
  `);

  usuarios.forEach(usuario => {
    response.write(`
      <tr>
        <td>${usuario.id}</td>
        <td>${usuario.nombre}</td>
        <td>${usuario.apellido}</td>
      </tr>
    `);
  });

  response.write(`
        </table>
        <p>Listado usuarios</p>
      </body>
    </html>
  `);

  response.end();
        break;
  }
});

server.listen(2023, () => {
  console.log("¡Funcionando!...") 
})

const http = require("http")

const materias = [
    { 
        id: 1, 
        nombre: "Programación 1", 
        curso: "curso 1" 
    },

    { 
        id: 2, 
        nombre: "Programación 2", 
        curso: "curso 2" 
    },
    { 
        id: 3, 
        nombre: "Programación 3", 
        curso: "curso 3" 
    }

];

const profesores = [
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
            response.write("Este es nuestro listado de materias<br>");
            response.write("Y también tenemos la lista de profesores<br>");
            response.end("Eso es todo");
    break;
    
     case "/materia":
            response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
            response.write(`
        <html>
        <head>
            <title>Mis materias</title>
            <style>
            body { font-family: Arial, sans-serif; background: #f4f4f4; padding: 20px; }
            h1 { color: #333; }
            table { border-collapse: collapse; width: 50%; margin-top: 20px; }
            th, td { border: 1px solid #999; padding: 8px; text-align: left; }
            th { background: #eee; }
            </style>
        </head>
        <body>
            <h1>Mis materias</h1>
            <table>
            <tr>
                <th>id</th>
                <th>nombre</th>
                <th>curso</th>
            </tr>
    `);

        materias.forEach(materia => {
            response.write(`
            <tr>
                <td>${materia.id}</td>
                <td>${materia.nombre}</td>
                <td>${materia.curso}</td>
            </tr>
            `);
        });

        response.write(`
                </table>
                <p>Listado de materias</p>
            </body>
            </html>
        `);

        response.end();
    break;

    case "/profesor":
            response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
            response.write(`
        <html>
        <head>
            <title>Mis profesores</title>
            <style>
            body { font-family: Arial, sans-serif; background: #f4f4f4; padding: 20px; }
            h1 { color: #333; }
            table { border-collapse: collapse; width: 50%; margin-top: 20px; }
            th, td { border: 1px solid #999; padding: 8px; text-align: left; }
            th { background: #eee; }
            </style>
        </head>
        <body>
            <h1>Mis materias</h1>
            <table>
            <tr>
                <th>id</th>
                <th>nombre</th>
                <th>curso</th>
            </tr>
    `);

        profesores.forEach(profesor => {
            response.write(`
            <tr>
                <td>${profesor.id}</td>
                <td>${profesor.nombre}</td>
                <td>${profesor.apellido}</td>
            </tr>
            `);
        });

        response.write(`
                </table>
                <p>Listado de profesores</p>
            </body>
            </html>
        `);

        response.end();
    break;

    default:
        response.end("No se encontro la ruta");
    break;
  }
});

server.listen(2023, () => {
  console.log("¡Funcionando!...") 
})

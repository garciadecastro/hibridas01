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

const productos = [
    { 
        id: 1, 
        nombre: "Café Expreso", 
        precio: 200 
    },
    
    { 
        id: 2, 
        nombre: "Café Americano", 
        precio: 250 
    },
    
    { 
        id: 3, 
        nombre: "Café Cortado", 
        precio: 200 
    },
    
    { 
        id: 4, 
        nombre: "Café Doble", 
        precio: 250 
    },
    
    { 
        id: 5, 
        nombre: "Café Lagrima", 
        precio: 200 
    }
];

const server = http.createServer(function(request, response){
  switch (request.url) {
    case "/":
            response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
            response.write(`
        <html>
        <head>
            <title>Página de inicio</title>
            <style>
            body { font-family: Arial, sans-serif; background: #f4f4f4; padding: 20px; }
            h1 { color: #333; }
            table { border-collapse: collapse; width: 50%; margin-top: 20px; }
            th, td { border: 1px solid #999; padding: 8px; text-align: left; }
            th { background: #eee; }
            </style>
        </head>
            <body>
            
            <h1>Mi espectacular página web!</h1>
            <h2>Bienvenidos y bien venidas.</h2>
            <p>Nuestro contenido:</p>
            
            <ul>
                <li><a href="http://localhost:2023/materias">Nuestras materias</a></li>
                <li><a href="http://localhost:2023/profesore">Nuestros profesores</a></li>
                <li><a href="http://localhost:2023/productos">Nuestros Cafés</a></li>
                <li><a href="http://localhost:2023">Home</a></li>
            </ul> 
            
         </body>
        </html>
        `);

        response.end();
    break;
    
     case "/materias":
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
            <h1>Mi espectacular página web!</h1>
            <h2>Esta es nuestra oferta de materias.</h2>
            <p>Nuestro contenido:</p>
            
            <ul>
                <li><a href="http://localhost:2023/materias">Nuestras materias</a></li>
                <li><a href="http://localhost:2023/profesores">Nuestros profesores</a></li>
                <li><a href="http://localhost:2023/productos">Nuestros Cafés</a></li>
                <li><a href="http://localhost:2023">Home</a></li>
            </ul> 
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

    case "/profesores":
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
            <h1>Mi espectacular página web!</h1>
            <h2>Estos son nuestros profesores.</h2>
            <p>Nuestro contenido:</p>
            
            <ul>
                <li><a href="http://localhost:2023/materias">Nuestras materias</a></li>
                <li><a href="http://localhost:2023/profesores">Nuestros profesores</a></li>
                <li><a href="http://localhost:2023/productos">Nuestros Cafés</a></li>
                <li><a href="http://localhost:2023">Home</a></li>
            </ul> 
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

    case "/productos":
            response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
            response.write(`
        <html>
        <head>
            <title>Mis productos</title>
            <style>
            body { font-family: Arial, sans-serif; background: #f4f4f4; padding: 20px; }
            h1 { color: #333; }
            table { border-collapse: collapse; width: 50%; margin-top: 20px; }
            th, td { border: 1px solid #999; padding: 8px; text-align: left; }
            th { background: #eee; }
            </style>
        </head>
        <body>
            <h1>Mi espectacular página web!</h1>
            <h2>Estos son nuestros cafés.</h2>
            <p>Nuestro contenido:</p>
            
            <ul>
                <li><a href="http://localhost:2023/materias">Nuestras materias</a></li>
                <li><a href="http://localhost:2023/profesores">Nuestros profesores</a></li>
                <li><a href="http://localhost:2023/productos">Nuestros Cafés</a></li>
                <li><a href="http://localhost:2023">Home</a></li>
            </ul>  
            <table>
            <tr>
                <th>id</th>
                <th>nombre</th>
                <th>precio</th>
            </tr>
    `);

        productos.forEach(producto => {
            response.write(`
            <tr>
                <td>${producto.id}</td>
                <td>${producto.nombre}</td>
                <td>${producto.precio}</td>
            </tr>
            `);
        });

        response.write(`
                </table>
                <p>Listado de cafés</p>
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

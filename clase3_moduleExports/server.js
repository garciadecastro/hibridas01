const http = require("http")
;

const productos = require("./data/productos.js");

const pages = require("./pages/utils.js");

const server = http.createServer(function(request, response){
  switch (request.url) {
    case "/":
            response.write(pages.createPage("Home", "Nombre y Apellidos"));
            
    break;
    
     case "/materia":
           response.write(pages.createPage("Materia","Aplicaciones Híbridas"));
    break;

    case "/profesor":
        response.write(pages.createPage("Profesor","Victor Emanuel Villafañe"));
    break;

    case "/cafes":
           response.write(pages.createPage("Página de cafés",pages.createProductsList(productos)));
    break;

    default:
        response.write(pages.createPage("404","Página no encontrada"));
    break;
  }

  response.end();
});

server.listen(2023, () => {
  console.log("¡Funcionando!...") 
})

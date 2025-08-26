//Funciones para contenido de la página
function createPage (titulo, contenido) {
    let html = "";
    
    html += '<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">';
    
    html += '<title>'+titulo+'</title>';

    html += '</head><body>';

    html += '<h1>Mi espectacular página Web</h1>';

    html += contenido;

    html += '</body></html>';

    return html;

}

function createProductsList (productos) {
   let html = '<ul>'

    productos.forEach(cafe => 

       html += `<li>${cafe.id} - ${cafe.nombre} - ${cafe.precio}</li>`

    );

    html += '</ul>'


    return html;

}

//Exportación de las funciones
module.exports = {createPage,createProductsList };

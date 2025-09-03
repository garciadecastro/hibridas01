//Funciones para contenido de la página
export function createPage(titulo, contenido) {
  let html = "";
  html +=
    '<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">';
  html += "<title>" + titulo + "</title>";
  html += "</head><body>";
  html += `<h1>${titulo}</h1>`;
  html += contenido;
  html += "</body></html>";

  return html;
}

export function createJuegosListPage(juegos) {
  let html = "<ul>";
  juegos.forEach((juego) => {
    html += `<li>${juego.nombre} <a href="/juegos/${juego.id}">Ver</a></li>`;
  });
  html += "</ul>";

  return createPage("Juegos", html);
}

export function createDetailPage(juego) {
  let html = "";
  html += "<ul>";
  html += `<li>Nombre: ${juego.nombre}</li>`;
  html += `<li>Editorial: ${juego.editorial}</li>`;
  html += `<li>Año: ${juego.year}</li>`;
  html += "</ul>";
  html += `<a href="/">Volver</a>`;
  return createPage(juego.nombre, html);
}

export function errorPage() {
  let html = "";
  html += "<h2>No se encontro el juego buscado</h2>";
  html += `<a href="/">Volver</a>`;
  return createPage("404", html);
}
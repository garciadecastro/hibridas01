import { createPage } from "../utils/page.js";

export function createJuegosListPage(juegos) {
  let html = "<ul>";
  juegos.forEach((juego) => {
    html += `<li>${juego.nombre} <a href="/juegos/${juego.id}">Ver</a></li>`;
  });
  html += "</ul>";

  // Enlace para volver al menú principal
  html += `<a href="/">Volver al menú principal</a>`;

  return createPage("Catálogo de Juegos", html);
}

export function createDetailPage(juego) {
  let html = "";
  html += "<ul>";
  html += `<li>Nombre: ${juego.nombre}</li>`;
  html += `<li>Editorial: ${juego.editorial}</li>`;
  html += `<li>Año: ${juego.year}</li>`;
  html += "</ul>";
  html += `<a href="/juegos">Volver</a>`;
  return createPage(juego.nombre, html);
}

export function errorPage() {
  let html = "";
  html += "<h2>No se encontro el juego buscado</h2>";
  html += `<a href="/">Volver</a>`;
  return createPage("404", html);
}
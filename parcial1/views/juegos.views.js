import { createPage } from "../utils/page.js";

// Menú de navegación par todos los filtros
const navLinks = `
  <li><a href="/" class="hover:text-blue-600 font-semibold">Inicio</a></li>
  <li><a href="/juegos" class="hover:text-blue-600">Catálogo completo</a></li>
  <li><a href="/seccion/clásicos" class="hover:text-blue-600">Clásicos</a></li>
  <li><a href="/seccion/fantasía" class="hover:text-blue-600">Fantasía</a></li>
  <li><a href="/seccion/terror" class="hover:text-blue-600">Terror</a></li>
  <li><a href="/seccion/ciencia-ficcion" class="hover:text-blue-600">Ciencia Ficción</a></li>
  <li><a href="/seccion/historia-mitos" class="hover:text-blue-600">Historia y Mitos</a></li>
`;


export function createJuegosListPage(juegos) {
  let contenido = "<ul class='space-y-2'>";
  juegos.forEach((juego) => {
    contenido += `
      <li class="p-2 border-b border-gray-200">
        <span class="font-semibold">${juego.nombre}</span>
        <a href="/juegos/${juego.id}" class="ml-2 text-blue-600 hover:underline">Ver</a>
      </li>`;
  });
  contenido += "</ul>";

  return createPage("Catálogo de Juegos", navLinks, contenido);
}

export function createDetailPage(juego) {
  let contenido = `
    <ul class="space-y-2">
      <li><strong>Nombre:</strong> ${juego.nombre}</li>
      <li><strong>Editorial:</strong> ${juego.editorial}</li>
      <li><strong>Año:</strong> ${juego.year}</li>
    </ul>
    <div class="mt-4 space-x-4">
      <a href="/juegos" class="text-blue-600 hover:underline">Volver al catálogo</a>
      <a href="/" class="text-blue-600 hover:underline">Volver al menú principal</a>
    </div>
  `;

  return createPage(juego.nombre, navLinks, contenido);
}

export function errorPage() {
  let contenido = `
    <h2 class="text-red-600 font-bold mb-4">No se encontró el juego buscado</h2>
    <a href="/" class="text-blue-600 hover:underline">Volver al menú principal</a>
  `;

  return createPage("404", navLinks, contenido);
}

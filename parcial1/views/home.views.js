import { createPage } from "../utils/page.js";

export function menuPage() {
  const navLinks = `
    <li><a href="/juegos" class="hover:text-blue-600">Catálogo completo</a></li>
    <li><a href="/seccion/clásicos" class="hover:text-blue-600">Clásicos</a></li>
    <li><a href="/seccion/fantasía" class="hover:text-blue-600">Fantasía</a></li>
    <li><a href="/seccion/terror" class="hover:text-blue-600">Terror</a></li>
    <li><a href="/seccion/ciencia-ficcion" class="hover:text-blue-600">Ciencia Ficción</a></li>
    <li><a href="/seccion/historia-mitos" class="hover:text-blue-600">Historia y Mitos</a></li>
  `;

  const contenido = `<h1 class="text-3xl font-bold">Bienvenido a tu Tienda de Juegos de Rol.</h1>`;


  return createPage("Tienda de Juegos de Rol", navLinks, contenido);
}

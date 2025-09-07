import { createPage } from "../utils/page.js";

// Página de menú principal
export function menuPage() {
  return createPage(
    "Tienda de Juegos de Rol",
    `
      <ul>
        <li><a href="/juegos">Catálogo completo</a></li>
        <li><a href="/seccion/clásicos">Clásicos</a></li>
        <li><a href="/seccion/fantasía">Fantasía</a></li>
        <li><a href="/seccion/terror">Terror</a></li>
        <li><a href="/seccion/ciencia-ficcion">Ciencia Ficción</a></li>
        <li><a href="/seccion/historia-mitos">Historia y Mitos</a></li>
      </ul>
    `
  );
}

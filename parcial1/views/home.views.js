// Función genérica para armar páginas
function createPage(titulo, contenido) {
  return `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>${titulo}</title>
    </head>
    <body>
      <h1>${titulo}</h1>
      ${contenido}
    </body>
    </html>
  `;
}

// Página de menú principal
export function menuPage() {
  return createPage(
    "Tienda de Juegos de Rol",
    `
      <ul>
        <li><a href="/juegos">Listado de Juegos</a></li>
        <li><a href="/seccion/mobile">Mobile</a></li>
        <li><a href="/seccion/landing">LandingPage</a></li>
        <li><a href="/seccion/webapp">Web App</a></li>
        <li><a href="/seccion/ecommerce">e-Commerce</a></li>
        <li><a href="/seccion/games">Games</a></li>
      </ul>
    `
  );
}

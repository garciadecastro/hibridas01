// Función genérica para armar páginas HTML
export function createPage(titulo, contenido) {
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

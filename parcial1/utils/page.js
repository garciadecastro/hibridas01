// Función genérica para armar páginas HTML// utils/page.js
export function createPage(titulo, navLinks, contenido) {
  return `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>${titulo}</title>
      <!-- Tailwind CDN -->
      <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body class="bg-slate-50 text-slate-800">
      
      <!-- Navbar -->
      <nav class="bg-white shadow">
        <div class="max-w-6xl mx-auto px-4">
          <div class="flex justify-between items-center py-4">
            
            <!-- Logo / Título -->
           
            <div class="text-xl font-bold text-blue-700">
              ${titulo}
            </div>

            
            <!-- Links -->
            <div>
              <ul class="flex space-x-6">
                ${navLinks}
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <!-- Contenido principal -->
      <main class="max-w-6xl mx-auto px-4 py-6">
        ${contenido}
      </main>

    </body>
    </html>
  `;
}

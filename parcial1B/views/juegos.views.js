import { createPage } from "../utils/page.js";

// 🔮 Menú de navegación con estilo medieval
const navLinks = `
  <li><a href="/juegos"class="hover:text-yellow-400 font-bold tracking-wide">🏰 Inicio</a></li>
  <li><a href="/juegos?categoria=clásicos" class="hover:text-yellow-400">📖 Clásicos</a></li>
  <li><a href="/juegos?categoria=fantasía" class="hover:text-yellow-400">🧙 Fantasía</a></li>
  <li><a href="/juegos?categoria=terror" class="hover:text-yellow-400">👻 Terror</a></li>
  <li><a href="/juegos?categoria=ciencia-ficcion" class="hover:text-yellow-400">🚀 Ciencia Ficción</a></li>
  <li><a href="/juegos?categoria=historia-mitos" class="hover:text-yellow-400">⚖️ Historia y Mitos</a></li>
  <li><a href="/juegos/nuevo" class="hover:text-yellow-400">⚔️ Nuevo juego</a></li>
`;

export function createJuegosListPage(juegos, query = {}) {
  let contenido = `
    <div class="bg-gradient-to-b from-gray-900 to-black text-gray-200 p-6 rounded-lg shadow-lg">
      <h1 class="text-3xl font-extrabold text-yellow-500 mb-6 font-serif">📜 Catálogo de Juegos</h1>
      
      <!-- Formulario de búsqueda por nombre -->
      <form method="get" action="/juegos" class="mb-4 flex space-x-2">
        <input 
          type="text" 
          name="nombre" 
          placeholder="Buscar por nombre..." 
          value="${query?.nombre ?? ""}" 
          class="flex-1 p-2 rounded bg-gray-800 border border-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <button 
          type="submit"
          class="bg-yellow-600 text-black px-4 py-2 rounded hover:bg-yellow-500 font-bold"
        >
          Buscar por nombre
        </button>
      </form>

      <!-- Formulario de búsqueda por precio -->
      <form method="get" action="/juegos" class="mb-6 flex space-x-2">
        <input
          type="number"
          name="precioMax"
          placeholder="Precio máximo..."
          value="${query?.precioMax ?? ""}"
          class="w-32 p-2 rounded bg-gray-800 border border-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <button 
          type="submit"
          class="bg-yellow-600 text-black px-4 py-2 rounded hover:bg-yellow-500 font-bold"
        >
          Buscar por precio
        </button>
      </form>
  `;

  // Si no hay resultados
  if (juegos.length === 0) {
    contenido += `
      <div class="text-center p-6 bg-red-900 border border-red-700 rounded-lg">
        <h2 class="text-xl font-bold text-red-300">❌ No tenemos juegos que coincidan con tu búsqueda, lo siento amigo</h2>
        <a href="/juegos" class="mt-4 inline-block bg-yellow-600 text-black px-4 py-2 rounded-lg hover:bg-yellow-500 font-bold">
          ↩️ Volver al catálogo completo
        </a>
      </div>
    </div>`; 
    return createPage("Sin resultados", navLinks, contenido);
  }

  // Si hay resultados
  contenido += `<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">`;

  juegos.forEach((juego) => {
    contenido += `
      <div class="p-4 border border-yellow-700 rounded-lg bg-gray-800 hover:bg-gray-700 transition flex flex-col items-center">
        <img 
          src="${juego.imagen || "https://placehold.co/200x200?text=Juego"}" 
          alt="Portada de ${juego.nombre}" 
          class="w-48 h-48 object-cover rounded-lg mb-4 shadow-md border border-yellow-600"
        />
        <span class="font-bold text-lg text-yellow-400 font-serif text-center">${juego.nombre}</span>
        <div class="mt-3 flex space-x-4">
          <a href="/juegos/${juego._id}" class="text-blue-400 hover:text-yellow-300">Ver</a>
          <a href="/juegos/editar/${juego._id}" class="text-green-400 hover:text-yellow-300">Editar</a>
          <a href="/juegos/borrar/${juego._id}" class="text-red-400 hover:text-yellow-300">Borrar</a>
        </div>
      </div>`;
  });

  contenido += `</div></div>`;
  return createPage("Catálogo de Juegos", navLinks, contenido);
}


export function createDetailPage(juego) {
  let contenido = `
    <div class="bg-gray-900 text-gray-200 p-6 rounded-lg shadow-xl border border-yellow-700 max-w-lg mx-auto">
      <img 
        src="${juego.imagen || "https://placehold.co/400x400?text=Juego"}" 
        alt="Portada de ${juego.nombre}" 
        class="w-64 h-64 object-cover rounded-lg mb-6 shadow-md border border-yellow-600 mx-auto"
      />
      <h2 class="text-2xl font-bold text-yellow-500 mb-4 font-serif text-center">${juego.nombre}</h2>
      <ul class="space-y-2 text-gray-300">
        <li><strong>Editorial:</strong> ${juego.editorial}</li>
        <li><strong>Año:</strong> ${juego.year}</li>
        <li><strong>Categoría:</strong> ${juego.categoria}</li>
        <li><strong>Precio:</strong> ${juego.precio}</li>
      </ul>
      <div class="mt-6 flex justify-center space-x-6">
        <a href="/juegos" class="text-blue-400 hover:text-yellow-300">↩️ Catálogo</a>
        <a href="/juegos/editar/${juego._id}" class="text-green-400 hover:text-yellow-300">Editar</a>
        <a href="/juegos/borrar/${juego._id}" class="text-red-400 hover:text-yellow-300">Borrar</a>
      </div>
    </div>
  `;
  return createPage(juego.nombre, navLinks, contenido);
}

export function formularioNuevoJuego() {
  const contenido = `
    <div class="bg-gray-900 text-gray-200 p-6 rounded-lg shadow-lg border border-yellow-700">
      <h2 class="text-2xl font-extrabold text-yellow-500 mb-4 font-serif">Añadir un nuevo juego</h2>
      <form class="space-y-4" action="/juegos/nuevo" method="post">
        ${crearCampo("Nombre", "nombre", "HeroQuest")}
        ${crearCampo("Editorial", "editorial", "Games Workshop")}
        ${crearCampo("Año", "year", "1989", "number")}
        <div>
          <label class="block text-sm font-medium text-yellow-400">Categoría</label>
            <select 
              name="categoria"
              class="w-full border border-yellow-700 bg-gray-800 text-gray-200 rounded p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            >
              <option value="clásicos">Clásicos</option>
              <option value="fantasía">Fantasía</option>
              <option value="terror">Terror</option>
              <option value="ciencia-ficcion">Ciencia Ficción</option>
              <option value="historia-mitos">Historia y Mitos</option>
            </select>
        </div>

        ${crearCampo("Precio", "precio", "50000", "number")}
        ${crearCampo("Imagen (URL)", "imagen", "https://.../imagen.jpg", "url")}
        <button type="submit" class="bg-yellow-600 text-black px-6 py-2 rounded-lg hover:bg-yellow-500 font-bold">
          Guardar
        </button>
      </form>
    </div>
  `;
  return createPage("Nuevo juego", navLinks, contenido);
}

// Formulario para editar juegos
export function formularioEditarJuego(juego){
  let html  = `
    <div class="bg-gray-900 text-gray-200 p-6 rounded-lg shadow-lg border border-yellow-700">
      <h2 class="text-2xl font-extrabold text-yellow-500 mb-4 font-serif">✒️ Editar juego</h2>
      <form class="space-y-4" action='/juegos/editar/${juego._id}' method='post'>
        ${crearCampoEditar("Nombre", "nombre", juego.nombre)}
        ${crearCampoEditar("Editorial", "editorial", juego.editorial)}
        ${crearCampoEditar("Año", "year", juego.year, "number")}
        <div>
          <label class="block text-sm font-medium text-yellow-400">Categoría</label>
            <select 
              name="categoria"
              class="w-full border border-yellow-700 bg-gray-800 text-gray-200 rounded p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            >
              <option value="clásicos" ${juego.categoria === "clásicos" ? "selected" : ""}>Clásicos</option>
              <option value="fantasía" ${juego.categoria === "fantasía" ? "selected" : ""}>Fantasía</option>
              <option value="terror" ${juego.categoria === "terror" ? "selected" : ""}>Terror</option>
              <option value="ciencia-ficcion" ${juego.categoria === "ciencia-ficcion" ? "selected" : ""}>Ciencia Ficción</option>
              <option value="historia-mitos" ${juego.categoria === "historia-mitos" ? "selected" : ""}>Historia y Mitos</option>
            </select>
      </div>

        ${crearCampoEditar("Precio", "precio", juego.precio, "number")}
        ${crearCampoEditar("Imagen (URL)", "imagen", juego.imagen || "", "url")}
        <button type='submit' class="bg-yellow-600 text-black px-6 py-2 rounded-lg hover:bg-yellow-500 font-bold">
          Guardar cambios ⚔️
        </button>
      </form>
      <div class="mt-4">
        <a href="/juegos" class="text-yellow-400 hover:text-white">↩️ Volver</a>
      </div>
    </div>
  `;
  return createPage("Editar juego", navLinks, html);
}

// Helper para inputs (sirve tanto en nuevo como en editar)
function crearCampo(label, name, placeholder, type = "text", value = "") {
  return `
    <div>
      <label class="block text-sm font-medium text-yellow-400">${label}</label>
      <input 
        type="${type}" 
        name="${name}" 
        placeholder="${placeholder}" 
        value="${value}" 
        class="w-full border border-yellow-700 bg-gray-800 text-gray-200 rounded p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        required
      >
    </div>
  `;
}

// Helper para inputs ya rellenos (editar juego)
function crearCampoEditar(label, name, value, type="text") {
  return `
    <div>
      <label class="block text-sm font-medium text-yellow-400">${label}</label>
      <input 
        type="${type}" 
        name="${name}" 
        value="${value}" 
        class="w-full border border-yellow-700 bg-gray-800 text-gray-200 rounded p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        required
      >
    </div>
  `;
}

export function errorPage() {
  let contenido = `
    <div class="bg-red-900 text-red-200 p-6 rounded-lg shadow-lg border border-red-700">
      <h2 class="text-2xl font-bold mb-4 font-serif">❌ No se encontró el juego buscado o no se actualizó</h2>
      <a href="/juegos" class="text-yellow-400 hover:text-white">Volver al menú principal</a>
    </div>
  `;
  return createPage("404", navLinks, contenido);
}

export function formularioBorrarJuego(juego) {
  let html = `
    <div class="bg-gray-900 text-gray-200 p-6 rounded-lg shadow-lg border border-red-700">
      <h2 class="text-2xl font-bold text-red-500 mb-4 font-serif">🗡️ ¿Seguro que quieres borrar este juego?</h2>
      <form class="space-y-4" action='/juegos/borrar/${juego._id}' method='post'>
        <div class="p-4 bg-gray-800 border border-yellow-700 rounded-lg">
          <p><span class="font-semibold">Nombre:</span> ${juego.nombre}</p>
          <p><span class="font-semibold">Editorial:</span> ${juego.editorial}</p>
          <p><span class="font-semibold">Precio:</span> ${juego.precio}</p>
          <p><span class="font-semibold">Año:</span> ${juego.year}</p>
          <p><span class="font-semibold">Categoría:</span> ${juego.categoria}</p>
        </div>
        <div class="flex space-x-4">
          <button type='submit' class="bg-red-700 text-white px-6 py-2 rounded-lg hover:bg-red-600 font-bold">
            Borrar
          </button>
          <a href="/juegos" class="text-yellow-400 hover:text-white">↩️ Volver</a>
        </div>
      </form>
    </div>
  `;
  return createPage("Borrar juego", navLinks, html);
}

export function borrarExito(id) {
  let html = `
    <div class="bg-green-900 text-green-200 p-6 rounded-lg shadow-lg border border-green-700">
      <p class="text-xl font-bold">✅ Juego borrado con éxito</p>
      <div class="mt-4">
        <a href="/juegos" class="bg-yellow-600 text-black px-6 py-2 rounded-lg hover:bg-yellow-500 font-bold">
          ↩️ Volver al catálogo
        </a>
      </div>
    </div>
  `;
  return createPage("Juego borrado correctamente", navLinks, html);
}

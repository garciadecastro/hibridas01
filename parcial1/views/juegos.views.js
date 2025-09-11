import { createPage } from "../utils/page.js";

// Menú de navegación par todos los filtros
const navLinks = `
  <li><a href="/" class="hover:text-blue-600 font-semibold">Inicio</a></li>
  <li><a href="/juegos/nuevo" class="hover:text-blue-600">Nuevo juego</a></li>
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
         <a href="/juegos/editar/${juego.id}" class="text-blue-600 hover:underline">Editar</a>
         <a href="/juegos/borrar/${juego.id}" class="text-blue-600 hover:underline">Borrar</a>
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
      <a href="/juegos/editar/${juego.id}" class="text-blue-600 hover:underline">Editar</a>
      <a href="/juegos/borrar/${juego.id}" class="text-blue-600 hover:underline">Borrar</a>
    </div>
  `;

  return createPage(juego.nombre, navLinks, contenido);
}

export function formularioNuevoJuego() {
  const contenido = `
    <h2 class="text-xl font-bold mb-4">Añadir un nuevo juego</h2>
    <form class="space-y-4" action = "/juegos/nuevo" method="post">
      <div>
        <label class="block text-sm font-medium">Nombre</label>
        <input 
          type="text" 
          name="nombre" 
          placeholder="Ej: HeroQuest" 
          class="w-full border rounded p-2"
          required
        >
      </div>
      <div>
        <label class="block text-sm font-medium">Editorial</label>
        <input 
          type="text" 
          name="editorial" 
          placeholder="Ej: Games Workshop" 
          class="w-full border rounded p-2"
          required
        >
      </div>
      <div>
        <label class="block text-sm font-medium">Año</label>
        <input 
          type="number" 
          name="year" 
          placeholder="1989" 
          class="w-full border rounded p-2"
          required
        >
      </div>
      <div>
        <label class="block text-sm font-medium">Categoría</label>
        <input 
          type="text" 
          name="categoria" 
          placeholder="fantasía, clásicos..." 
          class="w-full border rounded p-2"
          required
        >
      </div>
      <div>
        <label class="block text-sm font-medium">Precio</label>
        <input 
          type="number" 
          name="precio" 
          placeholder="Ej: 50000$" 
          class="w-full border rounded p-2"
          required
        >
      </div>
      <div>
        <button 
          type="submit" 
          class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Guardar
        </button>
      </div>
    </form>
  `;

  return createPage("Nuevo juego", navLinks, contenido);
}

//Función para cargar vista de edición
export function formularioEditarJuego(juego){
  let html  = `
    <h2 class="text-xl font-bold mb-4">Editar juego</h2>
    <form class="space-y-4" action='/juegos/editar/${juego.id}' method='post'>
      <div>
        <label class="block text-sm font-medium">Nombre</label>
        <input 
          type='text' 
          name='nombre' 
          placeholder='nombre' 
          value="${juego.nombre}" 
          class="w-full border rounded p-2"
          required
        />
      </div>
      <div>
        <label class="block text-sm font-medium">Editorial</label>
        <input 
          type='text' 
          name='editorial' 
          placeholder='editorial' 
          value="${juego.editorial}" 
          class="w-full border rounded p-2"
          required
        />
      </div>
      <div>
        <label class="block text-sm font-medium">Año</label>
        <input 
          type='text' 
          name='year' 
          placeholder='year' 
          value="${juego.year}" 
          class="w-full border rounded p-2"
          required
        />
      </div>
      <div>
        <label class="block text-sm font-medium">Categoría</label>
        <input 
          type='text' 
          name='categoria' 
          placeholder='categoria' 
          value="${juego.categoria}" 
          class="w-full border rounded p-2"
          required
        />
      </div>
      <div>
        <label class="block text-sm font-medium">Precio</label>
        <input 
          type='number' 
          name='precio' 
          placeholder='precio' 
          value="${juego.precio}" 
          class="w-full border rounded p-2"
          required
        />
      </div>
      <div>
        <button 
          type='submit' 
          class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Editar
        </button>
      </div>
    </form>
    <div class="mt-4">
      <a href="/" class="text-blue-600 hover:underline">Volver</a>
    </div>
  `;
  return createPage("Editar juego", navLinks, html);
}


export function errorPage() {
  let contenido = `
    <h2 class="text-red-600 font-bold mb-4">No se encontró el juego buscado</h2>
    <a href="/" class="text-blue-600 hover:underline">Volver al menú principal</a>
  `;

  return createPage("404", navLinks, contenido);
}





export function formularioBorrarJuego(juego) {
  let html = `
    <h2 class="text-xl font-bold mb-4 text-red-600">¿Seguro que quieres borrar este juego?</h2>
    <form class="space-y-4 bg-red-50 border border-red-200 rounded p-4" action='/juegos/borrar/${juego.id}' method='post'>
      <div class="p-2 bg-white border rounded">
        <p><span class="font-semibold">Nombre:</span> ${juego.nombre}</p>
        <p><span class="font-semibold">Editorial:</span> ${juego.editorial}</p>
        <p><span class="font-semibold">Precio:</span> ${juego.precio}</p>
        <p><span class="font-semibold">Año:</span> ${juego.year}</p>
        <p><span class="font-semibold">Categoría:</span> ${juego.categoria}</p>
      </div>
      <div>
        <button 
          type='submit' 
          class="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Borrar
        </button>
        <a 
          href="/" 
          class="ml-4 text-blue-600 hover:underline"
        >
          Volver
        </a>
      </div>
    </form>
  `;
  return createPage("Borrar juego", navLinks, html);
}

export function borrarExito(id) {
  let html = `
    <div class="bg-green-50 border border-green-200 p-4 rounded">
      <p class="text-green-700 font-semibold">Juego borrado correctamente ✅</p>
    </div>
    <div class="mt-4">
      <a 
        href="/juegos" 
        class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Volver
      </a>
    </div>
  `;
  return createPage("Juego borrado correctamente", navLinks, html);
}

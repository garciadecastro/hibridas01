import * as service from "../services/juegos.service.js";
import * as views from "../views/juegos.views.js";

export function getJuegos(req, res) {
  service.getJuegos().then((juegos) => {
    res.send(views.createJuegosListPage(juegos));
  });
}

//Filtro por id para ver los juegos de forma individual
export function getJuegoById(req, res) {
  const id = req.params.id;
  service.getJuegoById(id).then((juego) => {
    if (juego) {
      res.send(views.createDetailPage(juego));
    } else {
      res.send(views.errorPage());
    }
  });
}

//Filtro por categorías para ver juegos del mismo tipo
export function getJuegosByCategoria(req, res) {
  const categoria = req.params.categoria; // viene de la URL
  service.getJuegosBySection(categoria).then((juegos) => {
    if (juegos.length > 0) {
      res.send(views.createJuegosListPage(juegos));
    } else {
      res.send(views.errorPage());
    }
  });
}

//Introducir juegos nuevos
export function formularioNuevoJuego(req, res) {
  res.send(views.formularioNuevoJuego());
}

export function guardarJuego(req, res){
  const juego = {
    nombre: req.body.nombre,
    editorial: req.body.editorial,
    precio: req.body.precio,
    year: req.body.year,
    categoria: req.body.categoria

  }
  service.guardarJuego(juego)
    .then( juegoGuardado => res.send( views.createDetailPage(juegoGuardado) ) )
    .catch(err => res.send(views.errorPage()) )
}

//Edición del Juego
export function formularioEditarJuego(req, res){
  const id = req.params.id
  return service.getJuegoById(id)
    .then( juego => res.send( views.formularioEditarJuego(juego) ) )
}

export function editarJuego(req, res) {
  
  const juego = {
    id: Number(req.params.id),
    nombre: req.body.nombre,
    editorial: req.body.editorial,
    precio: req.body.precio,
    year: req.body.year,
    categoria: req.body.categoria
  }

  service.editarJuego(juego)
    .then(juegoEditado => 
      res.send( views.createDetailPage(juegoEditado) )
    )
}


export function formularioBorrarJuego(req, res){
  const id = req.params.id
  service.getJuegoById(id)
    .then( (juego) => res.send(views.formularioBorrarJuego(juego)) )
}

export function borrarJuego(req, res){
  const id = req.params.id
  service.borrarJuego(id)
    .then( (id) => res.send( views.borrarExito(id) ) )
}
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
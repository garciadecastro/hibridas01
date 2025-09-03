import * as service from "../service/juegos.service.js";
import * as views from "../views/juegos.views.js";

export function getJuegos(req, res) {
  service.getJuegos().then((juegos) => {
    res.send(views.createJuegosListPage(juegos));
  });
}

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
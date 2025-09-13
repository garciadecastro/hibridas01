// Importamos el servicio para que nos traiga los datos
import * as services from "../../services/juegos.service.js"


export function getJuegos(req, res){
    services.getJuegos()
        .then ( juegos => res.status(200).json( juegos ))
}



export function getJuegoById(req, res){
    const id = req.params.id
    services.getJuegoById(id)
        .then(juego => {
            if(juego){
                res.status(200).json(juego)
            }else{
                res.status(404).json({ message: "Recurso no encontrado" })
            }
        })
}


// ACÁ VAN A IR LOS CONTROLADORES DE LA API
// La idea hoy en día es migrar todo a procesos NOT BLOCKING o no bloqueantes
//Este es el motivo de usar funciones asincrónicas
//Nodejs nos invita a no bloquear el hilo principal de ejecución a apostar por el multitareas
function esperarTiempo (ms, mensaje){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(mensaje)
        }, ms)
    })
}

function A () {
    console.log("Soy la función A, terminé");
}

function B () {
    console.log("Soy la función B, terminé");
}

function C () {
    console.log("Soy la función C, terminé");
}

esperarTiempo(2000, "Soy argentina, y llego tarde").then( (valor) => console.log(valor));
A();
B();
C();
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

//ASINCRONÍA CON PROMESA Y CATCH
function esperarTiempoConCatch(error = false) {
    return new Promise((resolve, reject) => {
        if (error) {
            reject("Soy la promesa con Catch: Algo salió mal");
        } else {
            resolve("Soy la promesa con Catch: Todo salió bien");
        }
    });
}


//FUNCIONES SINCRÓNICAS, LAS NORMALES

function A () {
    console.log("Soy la función A, terminé");
}

function B () {
    console.log("Soy la función B, terminé");
}

function C () {
    console.log("Soy la función C, terminé");
}

//ejecutando las funciones
esperarTiempoConCatch()
  .then(mensaje => console.log(mensaje))

  .catch(error => console.error(error));
esperarTiempo(2000, "Soy la promesa argentina, y llego tarde").then( (valor) => console.log(valor));

esperarTiempoConCatch()
  .then((mensaje) => esperarTiempo(1000, mensaje))
  .then((resultado) => console.log(resultado))
  .catch((error) => console.error(error));


A();
B();
C();

//async y await son bloqueantes, los usamos dentro de funciones por ese motivo

esperarTiempoConCatch()
  .then(async (mensaje) => {
    A();
    const resultado = await esperarTiempo(1000, mensaje);
    console.log(resultado);
    C();
  })
  .catch((error) => console.error(error));

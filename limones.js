let canvas = document.getElementById("areajuego");
let ctx = canvas.getContext("2d");
const ALTURASUELO = 20;
const ALTURAPERSONAJE = 60;
const ANCHOPERSONAJE = 40;
const ANCHOLIMON = 20;
const ALTOLIMON = 20;
let personajeX=canvas.width/2;
let personajeY=canvas.height-(ALTURASUELO + ALTURAPERSONAJE);
let limonX=canvas.width/2;
let limonY=5;
function iniciarJuego() {
    dibujarsuelo();
    dibujarPersonaje();
    dibujarLimon();
    aparecerLimon();
}
function dibujarsuelo() {
    ctx.fillStyle = "green";
    ctx.fillRect(0, canvas.height - ALTURASUELO, canvas.width, ALTURASUELO);
}
function dibujarPersonaje() {
    ctx.fillStyle = "blue";
    ctx.fillRect(personajeX, personajeY, ANCHOPERSONAJE, ALTURAPERSONAJE);
}
function moverIzquierda() {
    personajeX=personajeX-10;
    limpiarCanvas();
    actualizarPantalla();
    
    }
function moverDerecha() {
    personajeX=personajeX+10;
    limpiarCanvas();
    actualizarPantalla();
   
}
function actualizarPantalla() {
    limpiarCanvas();
    dibujarPersonaje();
    dibujarsuelo();
    dibujarLimon();
}
function limpiarCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
function dibujarLimon() {
        ctx.fillStyle = "yellow";
        ctx.fillRect(limonX,limonY,ANCHOLIMON,ALTOLIMON);
       
}
function bajarlimon() {
    limonY = limonY + 10;
    dibujarLimon();
    actualizarPantalla();
    detectarColision();
 }   
 function detectarColision() {
    if (limonY == personajeX && limonY == personajeY)
    {
     alert("¡Has atrapado el limón!");   
    }
    }
function detectarColision() {
    if (limonY + ALTOLIMON >= personajeY && limonX + ANCHOLIMON >= personajeX && limonX <= personajeX + ANCHOPERSONAJE) {
       // alert("¡Has atrapado el limón!");
        aparecerLimon();
    }
     }
function probarAleatorio() {
    let max = canvas.width - ANCHOLIMON;
    let min = 0;
    let aleatorio = generarAleatorio(min, max);
    console.log(aleatorio);
    }
function aparecerLimon() {
    limonX = generarAleatorio(0, canvas.width - ANCHOLIMON);
    limonY = 0;
    dibujarLimon();
    actualizarPantalla();
}
let puntaje = 0;
let limones = [];
let jugador = {
  x: canvas.width / 2 - ANCHOPERSONAJE / 2,
  y: canvas.height - ALTURASUELO - ALTURAPERSONAJE,
  width: ANCHOPERSONAJE,
  height: ALTURAPERSONAJE
};
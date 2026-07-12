let canvas = document.getElementById("areajuego");
let ctx = canvas.getContext("2d");
const ALTURASUELO = 20;
const ALTURAPERSONAJE = 60;
const ANCHOPERSONAJE = 40;
let personajeX=canvas.width/2;
function iniciarJuego() {
    dibujarsuelo();
    dibujarJugador();
}
function dibujarsuelo() {
    ctx.fillStyle = "green";
    ctx.fillRect(0, canvas.height - ALTURASUELO, canvas.width, ALTURASUELO);
}
function dibujarJugador() {
    ctx.fillStyle = "blue";
    ctx.fillRect(personajeX, canvas.height - (ALTURASUELO+ALTURAPERSONAJE), ANCHOPERSONAJE, ALTURAPERSONAJE);
}
function moverIzquierda() {
    personajeX=personajeX-10;
    limpiarCanvas();
    dibujarJugador();
    }
function limpiarCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    dibujarsuelo();
    dibujarJugador();
}
function moverDerecha() {
    personajeX=personajeX+10;
    limpiarCanvas();
    dibujarJugador();
}
let puntaje = 0;
let limones = [];
let jugador = {
  x: canvas.width / 2 - ANCHOPERSONAJE / 2,
  y: canvas.height - ALTURASUELO - ALTURAPERSONAJE,
  width: ANCHOPERSONAJE,
  height: ALTURAPERSONAJE
};
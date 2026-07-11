let canvas = document.getElementById('areajuego');
let ctx = canvas.getContext('2d');
const ALTURASUELO = 40;
const ALTURAPERSONAJE = 60;
const ANCHOPERSONAJE = 40;
function iniciarJuego() {
    dibujarsuelo();
    dibujarJugador();
}
function dibujarsuelo() {
    ctx.fillStyle = 'green';
    ctx.fillRect(0, canvas.height - ALTURASUELO, canvas.width, 20);
}
function dibujarJugador() {
    ctx.fillStyle = 'blue';
    ctx.fillRect(canvas.width  / 2, canvas.height - (ALTURASUELO+ALTURAPERSONAJE), ANCHOPERSONAJE, ALTURAPERSONAJE);
}
let puntaje = 0;
let limones = [];
let jugador = {
  x: canvas.width / 2 - ANCHOPERSONAJE / 2,
  y: canvas.height - ALTURASUELO - ALTURAPERSONAJE,
  width: ANCHOPERSONAJE,
  height: ALTURAPERSONAJE
};
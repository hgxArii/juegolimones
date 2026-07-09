let canvas = document.getElementById('areajuego');
let ctx = canvas.getContext('2d');
function iniciarJuego() {
    dibujarsuelo();
    dibujarJugador();
}
function dibujarsuelo() {
    ctx.fillStyle = 'green';
    ctx.fillRect(0, canvas.height - 20, canvas.width, 20);
}
function dibujarJugador() {
    jugador.x = Math.max(0, Math.min(canvas.width - jugador.width, jugador.x));
    ctx.fillStyle = 'blue';
    ctx.fillRect(canvas.width  / 2, canvas.height - (20+60), 40, 60);
}
let puntaje = 0;
let limones = [];
let jugador = {
  x: canvas.width / 2 - 25,
  y: canvas.height - 50,
  width: 50,
  height: 50
};
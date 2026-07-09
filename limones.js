let canvas = document.getElementById('areajuego');
let ctx = canvas.getContext('2d');
let puntaje = 0;
let limones = [];
let jugador = {
  x: canvas.width / 2 - 25,
  y: canvas.height - 50,
  width: 50,
  height: 50
};
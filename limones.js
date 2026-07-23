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
let puntaje = 0;
let vidas = 3;
let velocidadLimon = 200;
let intervalo;


function iniciarJuego() {

    clearInterval(intervalo);

    limpiarCanvas();
    dibujarsuelo();
    dibujarPersonaje();
    aparecerLimon();

    intervalo = setInterval(bajarlimon, velocidadLimon);
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
    detectarPiso();
 }  
function generarAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function detectarColision() {

    if (
        limonX + ANCHOLIMON > personajeX &&
        limonX < personajeX + ANCHOPERSONAJE &&
        limonY + ALTOLIMON > personajeY &&
        limonY < personajeY + ALTURAPERSONAJE
    ) {

        puntaje++;
        document.getElementById("txtPuntaje").textContent = puntaje;

        aparecerLimon();

        if (puntaje == 3) {
            velocidadLimon = 150;
            clearInterval(intervalo);
            intervalo = setInterval(bajarlimon, velocidadLimon);
        }

        if (puntaje == 6) {
            velocidadLimon = 100;
            clearInterval(intervalo);
            intervalo = setInterval(bajarlimon, velocidadLimon);
        }

        if (puntaje == 10) {
            clearInterval(intervalo);
            alert("¡TIENES LOS LIMONES, AHORA SOLO FALTA SAL Y TEQUILA! 🍋");
        }
    }
}
function aparecerLimon() {
    limonX = generarAleatorio(0, canvas.width - ANCHOLIMON);
    limonY = 0;
    dibujarLimon();
    actualizarPantalla();
}
function detectarPiso() {

    if (limonY + ALTOLIMON >= canvas.height - ALTURASUELO) {

        vidas--;
        document.getElementById("txtVidas").textContent = vidas;

        if (vidas <= 0) {
            vidas = 0;
            document.getElementById("txtVidas").textContent = vidas;
            clearInterval(intervalo);
            alert("GAME OVER");
            return;
        }

        aparecerLimon();
    }
}

function reiniciar() {

    clearInterval(intervalo);

    puntaje = 0;
    vidas = 3;
    velocidadLimon = 200;

    personajeX = canvas.width / 2;
    personajeY = canvas.height - (ALTURASUELO + ALTURAPERSONAJE);

    limonX = canvas.width / 2;
    limonY = 0;

    document.getElementById("txtPuntaje").textContent = puntaje;
    document.getElementById("txtVidas").textContent = vidas;

    iniciarJuego();
}
function generarAleatorio(min, max) {
    let random = Math.random();
    let numero=random*(max - min + 1);
    let numeroEntero= Math.ceil(numero);
    return numeroEntero;
}

//funcion que retorna un saludo 
function saludar() {
    return "Hola como estas boludo ";
}
var saludio = saludar();
console.log(saludio);
Math.random(); // genera un numero aleatorio entre 0 y 1
Math.floor(3.14); // redondea hacia abajo
Math.ceil(3.14); // redondea hacia arriba
//vamos a definir una funcuion que genere numeros entre o y 10 
function getRandomNumber() {
    var random = Math.random();
    var multiplier = random * 10;
    var redon = Math.floor(multiplier);
    var result = redon + 1; // para que no me de 0
    return result;
}
console.log(getRandomNumber());
// vamos a crear funciones con parametros
function cuadrado(numero) {
    return numero * numero;
}
console.log(cuadrado(7));
function salu(nombre) {
    var r = "hola" + nombre;
    return r;
}
console.log(salu("juan"));
// el orden de los parametros importa y bastante 
function cardnet(edad, name, married) {
    if (edad < 21) {
        return name + "no Valido edad -> " + edad;
    }
    else if (edad >= 21 && married === false) {
        return name + " Valido edad -> " + edad + " y soltero";
    }
    else {
        return name + " No valido -> " + edad + "casado";
    }
}
console.log(cardnet(22, "fancisco", false));

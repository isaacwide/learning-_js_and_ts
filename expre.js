// primero veamo suna funcion expression
// funcion que retorna un saludo
// asi decvlaramos las funcones expres en ts
var hallo = function (nombre, apellido) {
    return "Hola " + nombre + " " + apellido;
};
var saludo = hallo("Juan", "Pérez");
console.log(saludo);
var suma = function (number1, number2) {
    return number1 + number2;
};
var resultado = suma(5, 10);
console.log("El resultado de la suma es: " + resultado);

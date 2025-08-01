var frutas = ["manzana", "pera", "naranja"];
var i = 0; // inicializamos el índice en 0
while (i < frutas.length) {
    console.log(frutas[i]); // imprime el elemento en la posición i
    i++; // incrementamos el índice en 1 para la siguiente iteración
}
for (var i_1 = 0; i_1 < frutas.length; i_1++) {
    console.log(frutas[i_1]); // imprime el elemento en la posición i
}
for (var i_2 = frutas.length - 1; i_2 >= 0; i_2--) {
    console.log(frutas[i_2]); // imprime el elemento en la posición i
}
// recorremos el string con la sigiente funcion
var nombre = "isaac_aguilar_duran_2025";
for (var _i = 0, nombre_1 = nombre; _i < nombre_1.length; _i++) {
    var letra = nombre_1[_i];
    console.log(letra); // imprime cada letra del nombre
}
for (var _a = 0, frutas_1 = frutas; _a < frutas_1.length; _a++) {
    var fruta = frutas_1[_a];
    console.log(fruta);
}

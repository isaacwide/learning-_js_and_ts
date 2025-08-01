//esto es un hola mundo pe/*+/
console.log("hola typescript ");
var numnber1 = 3;
var numnber2 = 4;
if ((numnber1 + numnber2) === 6) {
    console.log("tu valor es 6");
}
else {
    var contador = 10;
    while (contador > 0) {
        console.log(contador);
        contador = contador - 1;
        if (contador == 5) {
            break;
        }
    }
}
var boolean = false;
if (boolean || numnber1 == 3) {
    console.log("cierto");
}
else {
    console.log("falso");
}
// funciones 
function myDum(num1, num2) {
    return num1 + num2;
}
var a = myDum(numnber1, numnber2);
console.log(a);
//listas 
var list = [11, 234, 31, 47, 59];
for (var i = 0; i < 5; i++) {
    console.log(list[i]);
    if (list[i] === 11) {
        console.log("tu numero es once");
    }
}
//for invertido para que no se me olvide xd 
for (var i_1 = 10; i_1 >= 0; i_1--) {
    if (i_1 === 0) {
        console.log('¡Despegue 🚀!');
    }
    else {
        console.log('Faltan ' + i_1 + ' segundos');
    }
}
for (var i_2 = 0, j = 5; i_2 < 5; i_2++, j--) {
    console.log(i_2, j);
}

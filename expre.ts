// primero veamo suna funcion expression
// funcion que retorna un saludo
// asi decvlaramos las funcones expres en ts
let hallo: (nombre: string, apellido: string) => string = function(nombre: string, apellido: string) {
    return "Hola " + nombre + " " + apellido;
}

let saludo: string = hallo("Juan", "Pérez");
console.log(saludo);

// ahora vemos una funcion expres en js 
const suma = function(number1:number,number2:number){
    return number1 + number2;
}

let resultado: number = suma(5, 10);
console.log("El resultado de la suma es: " + resultado);
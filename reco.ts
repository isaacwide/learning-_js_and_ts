let frutas: Array<string> = ["manzana", "pera", "naranja"]; 
let i = 0; // inicializamos el índice en 0
while (i < frutas.length) {
  console.log(frutas[i]) // imprime el elemento en la posición i
  i++ // incrementamos el índice en 1 para la siguiente iteración
}

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]); // imprime el elemento en la posición i
}

for (let i = frutas.length - 1; i >= 0; i--) {
  console.log(frutas[i]) // imprime el elemento en la posición i
}

// recorremos el string con la sigiente funcion
let nombre:string="isaac_aguilar_duran_2025"

for(const letra of nombre) {
  console.log(letra); // imprime cada letra del nombre

}
//otra  forma de recorrer un array
for(const fruta of frutas){
  console.log(fruta);
}
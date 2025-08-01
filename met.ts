//metodos para arrays
const numeros:Array<number> = [1, 2, 3, 4, 5];
const numeros2:Array<number>= [6, 7, 8, 9, 10];
// CONECTAR 2 ARRAYS
const total:Array<number>=numeros.concat(numeros2)

const numbers = [1, 2, 3]
const numbers2 = [4, 5]

//                    1, 2, 3        4, 5                     
const allNumbers = [...numbers, ...numbers2]

console.log(allNumbers) // [1, 2, 3, 4, 5]
console.log(total); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(total); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// AÑADIR UN ELEMENTO AL FINAL
function procesarPedido(pedidos) {
  let cliente = pedidos[0];
  let restoPedidos = pedidos.slice(1);
  return ["bebida", ...restoPedidos, cliente];
}


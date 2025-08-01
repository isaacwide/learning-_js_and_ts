/*indexOf, some, every, find, findIndex e includes */
// lo anterior son metodos de los arrays que nos permiten buscar un elemento en el array
const emojis = ['star', 'avocado', 'face']
//indexOf
const index = emojis.indexOf('avocado')//nos devuelve la posicion del arreglo 
console.log(index) // 1

// exista el elemento
const ex=emojis.includes('avocado') // nos devuelve un booleano si existe el elemento en el arreglo

if(ex) {
    console.log('El emoji existe en el arreglo')

}

//some verifica si alun elemento cumple con la condicion
const some = emojis.some((emoji) => emoji.length > 5) // verifica si al menos un elemento cumple con la condicion   
console.log(some) // true, porque 'avocado' tiene más de 5 caracteres
//every verifica si todos los elementos cumplen con la condicion        
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const tieneNumeroMayorA5 = numbers.some(number => {// si encuentra algun valor se detiene 
  console.log(`Estoy iterando sobre el número ${number}`) // -> Imprime hasta el número 6
  return number > 5
})

console.log(tieneNumeroMayorA5) // -> true    

let edades = [18, 20, 25, 30, 35, 40, 45, 50, 55, 60]
const menores=edades.every(edades => edades < 45) // verifica si todos los elementos cumplen con la condicion
console.log(menores) // true, porque todas las edades son menores a 65


const numbe = [13, 27, 44, -10, 81]
// encuentra el primer número negativo
const firstNegativeNumber = numbe.find(numbe => numbe < 0) //nos devuelve el primer elemento que cumple con la condicion

console.log(firstNegativeNumber) // -> -10

//con findIndex obtenemos el indice del primer elemento que cumple con la condicion
const firstNegativeIndex = numbe.findIndex(numbe => numbe < 0) // nos devuelve el indice del primer elemento que cumple con la condicion        
console.log(firstNegativeIndex) // -> 3, porque -10 es el primer número negativo y está en el índice 3

















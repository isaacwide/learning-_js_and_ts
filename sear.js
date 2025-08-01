/*indexOf, some, every, find, findIndex e includes */
// lo anterior son metodos de los arrays que nos permiten buscar un elemento en el array
var emojis = ['star', 'avocado', 'face'];
//indexOf
var index = emojis.indexOf('avocado'); //nos devuelve la posicion del arreglo 
console.log(index); // 1
// exista el elemento
var ex = emojis.includes('avocado'); // nos devuelve un booleano si existe el elemento en el arreglo
if (ex) {
    console.log('El emoji existe en el arreglo');
}

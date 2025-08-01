// ahora veremos una funcion flecha
const plus= (a,b) =>{
   return a + b;
}

console.log(plus(4,5))

// otra funcion flecha 
const minus = (a, b) => {
    return a - b;
}
console.log(minus(10, 3));


// veamos funciones recursivas 
function factorial(n: number): number {
    if (n <= 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(5)); // 120

// cuenta atras
function cuentaAtras(n:number):void{
   if(n<0){
       return;
   }
   console.log(n);
   cuentaAtras(n-1);
}

cuentaAtras(3)


function recursive(n:number): number {
  if (n === 0) {
    return 0;
  } else {
    return n + recursive(n - 1);
  }
}

console.log(recursive(3)); // 


const recur =(n:number)=>{
    if (n === 0) {
    return 0;
  } else {
    return n + recursive(n - 1);
  }
    
}

console.log(recur(3)); // 6
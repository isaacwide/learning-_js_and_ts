
function sumaPares(n: number[]): number{
    let suma= 0 
     for(let i = 0 ; i< n.length ; i++){
            if(n[i]%2===0){
                suma += n[i]
            }
     }

    return suma
}

let numeros: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let resultado = sumaPares(numeros);
console.log(resultado); // 30, la suma de los números pares del array   
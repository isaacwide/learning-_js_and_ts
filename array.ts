const numbers:Array<number> = [1, 2 ,3]
let names:Array<string> = ['Dani', 'Miguel', 'Maria']

const imprimir=(n,x)=>{
    if(n<0){
        return 'Acciones no permitidas';
    
    }else{
        let result = '';    
        for(let i = 0; i < n; i++){
            result= x + ' ' + result;
        }
        return result
    }
}

for(let i =0;i<3;i++){
   console.log(imprimir(numbers[i], names[i]));
}



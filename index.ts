//esto es un hola mundo pe/*+/
console.log("hola typescript ")

let numnber1: number = 3

let numnber2: number = 4


if((numnber1+numnber2)===6){
    console.log("tu valor es 6")
}else{
    let contador:number=10
    while(contador>0){
         console.log(contador)
         contador= contador-1
         if(contador==5){
            break
         }
    }
}


let boolean:boolean=false

if (boolean || numnber1 ==3){
    console.log("cierto")
}else{
    console.log("falso")
}


// funciones 

function myDum(num1, num2):number{
   return num1 + num2
}

let a:number = myDum(numnber1,numnber2)

console.log(a)


//listas 
let list:Array<number>=[11,234,31,47,59]

for(var i = 0;i<5;i++){
    console.log(list[i])
    if(list[i]===11){
        console.log("tu numero es once")
    }
}

//for invertido para que no se me olvide xd 
for (let i = 10; i >= 0; i--) {
  if (i === 0) {
    console.log('¡Despegue 🚀!')
  } else {
    console.log('Faltan ' + i + ' segundos')
  }
}


for (let i = 0, j = 5; i < 5; i++, j--) {
  console.log(i, j);
}


const dia = new Date().getDay()

// segun el dia de la semana, mostramos un mensaje diferente
switch (dia) {
  case 0:
    console.log("¡Hoy es domingo! 😴")
    break
  case 1:
    console.log("¡Nooo, es lunes! 😢")
    break
  case 2:
    console.log("¡Hoy es martes! 🥵")
    break
  case 3:
    console.log("¡Hoy es miércoles! 🤓")
    break
  default:
    console.log("Se acerca el fin de! 🚀")
    break
}

//funcion que retorna un saludo 
function saludar(): string {
	return "Hola como estas boludo "
}

let saludio: string= saludar()
console.log(saludio)

Math.random() // genera un numero aleatorio entre 0 y 1
Math.floor(3.14) // redondea hacia abajo
Math.ceil(3.14) // redondea hacia arriba

//vamos a definir una funcuion que genere numeros entre o y 10 
function getRandomNumber():number{
    const random:number= Math.random()
    const multiplier:number= random * 10
    const redon:number= Math.floor(multiplier)
    const result:number= redon + 1 // para que no me de 0
    return result

}
console.log(getRandomNumber())

// vamos a crear funciones con parametros
function cuadrado(numero:number):number{
    return numero * numero
}
console.log(cuadrado(7))


function salu(nombre:string):string{
    let r = "hola" + nombre
    return r
}
console.log(salu("juan"))


// el orden de los parametros importa y bastante 
function cardnet(edad:number,name:string,married:boolean):any{
    if(edad<21){
        return name + "no Valido edad -> "+ edad
    }else if(edad>=21 && married===false){
        return name + " Valido edad -> "+ edad + " y soltero"
    }else{
        return name + " No valido -> "+ edad + "casado"
    }
}

console.log(cardnet(22,"fancisco",false))
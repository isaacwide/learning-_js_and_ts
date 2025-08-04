const agregar = document.getElementById("agregar");// obtiene el elemento del DOM con el id "agregar"
const dinamic = document.getElementById("dinamic");
let size =0;
let contador = 0; 


    // Función para agregar un nuevo input al div dinamic
    agregar.addEventListener('click',e =>{
        let input = document.createElement("input"); // crea un nuevo elemento input
        contador++; // incrementa el contador para el siguiente input
        input.type = "number"; // establece el tipo de input
        input.id = "input" + contador; // asigna un id único al input
       // input.innerHTML = "input" + contador; // establece el contenido del input solo en testo 
        input.placeholder = "input" + contador; // establece un placeholder para el input
        dinamic.appendChild(input); // agrega el input al div dinamic
        dinamic.appendChild(document.createElement("br")); // agrega un salto de línea después del input

    });

    function generarArreglo(){
         const size = document.getElementById("size").value; // obtenemos el valor del array
         const arrar = document.getElementById("arrar");

         if (size<1){
            let error = document.createElement("p");
            error.textContent = "El tamaño del arreglo debe ser mayor que 0";
            arrar.innerHTML = ""; // Limpiamos el contenido previo
            arrar.appendChild(error); // Agregamos el mensaje de error    

         }else{
            for(i=1; i<=size; i++){
                let input = document.createElement("input"); // obtenemos el input por su id
                input.type = "number"; // aseguramos que el input sea de tipo number
                input.id = "input" + i; // asignamos un id único al input
                input.placeholder = "input" + i; // establecemos un placeholder para el input
              //  arrar.innerHTML = ""; // Limpiamos el contenido previo no lo pngas en un array 
                arrar.appendChild(input); // Agregamos el input al div arrar
                arrar.appendChild(document.createElement("br")); // Agregamos un salto de línea después del input
            }  
         }
         
    }

    const impr = document.getElementById("impr");

    impr.addEventListener('click', e => {
            let inputs = [];
            let imprimirarreglo = document.getElementById("imprimirarreglo");
            const size = document.getElementById("size").value; // obtenemos el valor del array

            imprimirarreglo.innerHTML = ""; // Limpiamos el contenido previo

            for (let i = 1; i <= size; i++) {
                let input = document.getElementById("input" + i);
                if (input && input.value !== "") {
                    inputs.push(parseFloat(input.value));
                } else {
                    inputs.push(0);
                }
            }

            inputs.forEach(function(elemento) {
                let p = document.createElement("p");
                p.textContent = elemento;
                imprimirarreglo.appendChild(p);
            });
});

    function limpiar() {
        const arrar = document.getElementById("arrar");
        arrar.innerHTML = ""; // Limpiamos el contenido previo
        const imprimirarreglo = document.getElementById("imprimirarreglo");
        imprimirarreglo.innerHTML = ""; // Limpiamos el contenido previo
        generarArreglo(); // Llamamos a la función para generar el arreglo nuevamente
        size = 0; // Reiniciamos el tamaño del arreglo
    }

    // Función para crear una matriz
    function matriz(){
        const m = document.getElementById("m").value;
        const n = document.getElementById("n").value;
        const spaceofmatriz = document.getElementById("spaceofmatriz");

        if(m <1 || n<1){
             let error = document.createElement("p");
             error.textContent = "ingrese los valores correctos de m y n";
             spaceofmatriz.innerHTML = ""; // Limpiamos el contenido previo
             spaceofmatriz.appendChild(error);
        }else{
            spaceofmatriz.innerHTML= ""; // limpiamos toda la shit
            for(i=1; i<=m; i++){
                let div = document.createElement("div"); // crea un nuevo elemento label
                for(j=1; j<=n; j++){
                    let input = document.createElement("input"); // crea un nuevo elemento input
                    input.type = "number"; 
                    input.id = "matriz" + i + j; 
                    input.placeholder = `(${i}, ${j})`; 
                    div.appendChild(input); 
                }
                spaceofmatriz.appendChild(div); // agrega el div al espacio de la matriz
            }
        }
    }
   const showmatriz = document.getElementById("showmatriz");

    showmatriz.addEventListener('click',e =>{
        let matriz = [];
        const m = document.getElementById("m").value;
        const n = document.getElementById("n").value;
        const auswerfem = document.getElementById("auswerfen");
        auswerfem.innerHTML = "";

            for(let i=1; i<=m; i++){
                aux = []
                for(let j=1 ; j<=n; j++){
                    let input = document.getElementById("matriz" + i + j);
                    if(input && input.value !== ""){
                        aux.push(parseFloat(input.value));
                    }else{
                        aux.push(0); // Si el input está vacío, se agrega 0
                    }
                }
                matriz.push(aux); // Agrega la fila al arreglo matriz
            }
            for(i=1; i<=m; i++){
                let div = document.createElement("div"); 
                for(j=1; j<=n; j++){
                    let p = document.createElement("p");
                    p.textContent = matriz[i-1][j-1]; // Accede al valor de la matriz
                    div.appendChild(p); // Agrega el párrafo al div
                    
                }
                auswerfem.appendChild(div);
            }

   });
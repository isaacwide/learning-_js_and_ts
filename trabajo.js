let formulario = document.getElementById("js");

document.getElementById("mostrar").addEventListener('click',e=>{
    e.preventDefault();
     // obtenermos los valores de los input 
     const elements = document.querySelectorAll('input[name="data"]:checked');
     formulario.innerHTML = ""; // Limpiar el formulario antes de agregar nuevos elementos
     elements.forEach(element => {
        let pointer = element.value;
        mostrar_json(pointer); 
     });

});


function mostrar_json(pointer){
     fetch('datos.json')
     .then(response => response.json())
     .then(data =>{
        const datos=data.map(datos => datos[pointer]);

        // vamos a imprimir los datos en el formulario 
        datos.forEach(dato => {
            let data = document.createElement("p");
            data.textContent = dato;
            formulario.appendChild(data);   
        });

     })
        
}


let indice = 1;
document.getElementById("agregar").addEventListener('click', e =>{
   const div = document.getElementById("dinamic");
   let imagen = document.createElement("img");
  
   if (indice <=3){
        imagen.src = `/punto${indice}.jpeg`;
        imagen.alt = "Imagen Dinámica";
        imagen.style.width = "200px";
        div.appendChild(imagen);
        indice++;
   } else {
        alert("No se pueden agregar más imágenes");
   }  
});


const input = document.getElementById("miInput");
input.addEventListener('keydown', function(evenet) {
     if(event.key==="Enter"){
        const div = document.getElementById("dinamic");
        let texto = document.createElement("p");
        texto.textContent = input.value;
        div.appendChild(texto);
        input.value = ""; // Limpiar el input después de agregar el texto
     }

})
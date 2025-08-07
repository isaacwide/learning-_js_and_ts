document.getElementById("show").addEventListener('click',e =>{
   //parse the JSON string from the textarea
   fetch("products.json")
   .then(response => response.json())
   .then(data => {
         const div = document.getElementById("grid");
         data.forEach(producto => {
              let p = document.createElement("p");
              //p.textContent = `${producto.nombre} - ${producto.precio} <br> ${producto.desarrollador}`solo da el texto
              // use innerHTML to include HTML tags;
              p.innerHTML = `${producto.nombre} - ${producto.precio} <br> ${producto.desarrollador}`
              let spacer = document.createElement("br");
              div.appendChild(p);
              div.appendChild(spacer);
         });
   })
});

document.getElementById("press").addEventListener('click', e => {
    let text1 = document.getElementById("text1");
    let text2 = document.getElementById("text2"); 
    

});
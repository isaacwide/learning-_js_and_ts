const mostrar = document.getElementById("mostrar");

mostrar.addEventListener('click',e =>{
    
});

function obtener_nombre(){
    let nombres = [];
    fetch('datos.json')
    .then(response => response.json()) // convertir la respuesta a JSON
    .then(data => {
      // data es un array de objetos
      nombres = data.map(datos => datos.name); // extrae solo los nombres
      console.log(nombres); // ["Ana", "Luis", "Carlos"]
    })
    .catch(error => {
      console.error('Error al cargar el JSON:', error);
    });
}
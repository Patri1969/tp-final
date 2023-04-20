fetch("https://rickandmortyapi.com/api/character")
.then((response) => {
    return response.json();
})
.then((data) => {
 const $contenedor = document.getElementById("contenedor-personajes");
 const personajes = data.results;


 for (let i = 0; i < personajes.length; i++) {
 console.log(personajes[i].name);

 $contenedor.innerHTML += `
 <div class="tarjeta">
 <img src="${personajes[i].image}">
<p class="nombre-personaje">${personajes[i].name}</p>
 <p>${personajes[i].gender}<p> 
 <p>${personajes[i].species}<p> 
 <p>${personajes[i].status}<p> 
 <p>${personajes[i].location.name}<p>
 
 </div>
 `
}
});

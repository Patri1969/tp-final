const $contenedor = document.getElementById("personajes");

const URL_API = "https://rickandmortyapi.com/api/character/?page=17";

fetch(URL_API)
.then((response) => {
    return response.json();
})
.then((data) => {
    const personajes = data.results;
    console.log(personajes)

 
for (let i = 0; i < personajes.length; i++){
   //destructuring 
   const { name, gender, species, status, image } = personajes [i];
   
   $contenedor.innerHTML += `
   <div class="cont-personaje">
   <img 
      src="${image}"
      alt="imagen de ${name}"
      />
   <h3>${name}</h3>
   <p>Status: ${status}</p>
   <p>Gender: ${gender}</p>
   <p>Species: ${species}</p>
 </div>`
}
});

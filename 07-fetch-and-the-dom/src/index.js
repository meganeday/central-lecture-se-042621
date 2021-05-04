document.addEventListener("DOMContentLoaded", () => { 
  const pokemonForm = document.querySelector('form')
  pokemonForm.addEventListener('submit', addPokemon)
  fetchAll()
})

// console.log('before loop')

// function loop(n){
//   let i = 0
//   while(i < 12 ){
//     console.log(i)
//     i++
//   }
// }
// loop(100)

// console.log('after loop')


//Fetches

function fetchAll(){
  fetch('http://localhost:3000/pokemon')
  .then(res => res.json())
  .then(pokemon => pokemon.forEach(pokemon => renderPokemon(pokemon)))
}

function fetchOne(id){
  console.log(id)
  fetch(`http://localhost:3000/pokemon/${id}`)
  .then(res => res.json())
  .then(pokemon => showPokemon(pokemon))
}

function createPokemon(pokemon){
  fetch('http://localhost:3000/pokemon',{
    method:'POST',
    headers: {
      'Content-Type':'application/json'
    },
    body: JSON.stringify(pokemon)
  })
  .then(res => res.json())
  .then(pokemon => renderPokemon(pokemon))
}

//Handlers
function addPokemon(e){
  e.preventDefault()
  const pokemon = {
    name: e.target['name-input'].value,
    sprites:{front: e.target.spriteinput.value}
  }
  createPokemon(pokemon)
}

//DOM Manipulation 


function renderPokemon(pokemon){
  let pokemonCard = document.createElement('div')
  pokemonCard.innerHTML = `
    <div class='card' id=${pokemon.id}> 
      <h2>${pokemon.name}</h2>
      <img src="${pokemon.sprites.front}"/>
    </div>
  `
  pokemonCard.addEventListener('click', () => fetchOne(pokemon.id))
  document.querySelector('#pokemon-container').appendChild(pokemonCard)

}

function showPokemon(pokemon){
  console.log(pokemon)
  let pokemonCard = document.createElement('div')
  pokemonCard.className = 'card'
  pokemonCard.id = pokemon.id
  let header = document.createElement('h3')
  header.textContent = `${pokemon.id} : ${pokemon.name}`
  let image = document.createElement('img')
  image.src = pokemon.sprites.front
  let height = document.createElement('h3')
  height.textContent = `height: ${pokemon.height}`
  let weight = document.createElement('h3')
  weight.textContent = `weight: ${pokemon.weight}`
  let type = document.createElement('h3')
  type.textContent = pokemon.types
  let ul = document.createElement('ul')
  pokemon.stats.forEach(stat => {
    let li = document.createElement('li')
    li.textContent = `${stat.value}: ${stat.name}`
    ul.appendChild(li)
  })
  pokemonCard.append(header,image,height,weight,type,ul)
  const container = document.querySelector('#pokemon-container')
  container.innerHTML = ''
  container.appendChild(pokemonCard)
  console.log(pokemonCard)
  //   pokemonCard.innerHTML += `
//     <div class='card' id='${pokemon.id}'>
//       <h2>${pokemon.id}: ${pokemon.name}</h2>
//       <img src="${pokemon.sprites.front}"/>
//       <h3>types: ${pokemon.types}</h3>
//       <h3>height: ${pokemon.height}</h3>
//       <h3>weight: ${pokemon.height}</h3>
//       <ul>
//         ${pokemon.stats
//           .map((stat) => `<li>${stat.name}: ${stat.value}</li>`)
//           .join(" ")}
//       </ul>
//     </div>
//   `;
}


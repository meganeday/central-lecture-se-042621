document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector('#pokemon-post-form')
    form.addEventListener('submit', addPokemon)
    getAllPokemon()
  })
  
  function getAllPokemon(){
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(pokemon => pokemon.forEach(pok => renderPokemon(pok)))
  }
  
  function fetchOne(id){
    fetch(`http://localhost:3000/pokemon/${id}`)
    .then(res => res.json())
    .then(pokemon => renderDetail(pokemon))
  }
  
  function createPokemon(pokemon){
    fetch('http://localhost:3000/pokemon',{
        method: 'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(pokemon)
    })
    .then(res => res.json())
    .then(pokemon =>{
        document.querySelector('form').reset()
        renderPokemon(pokemon)
    } )
  }

  function patchPokemon(newPokemon, id){
    fetch(`http://localhost:3000/pokemon/${id}`,{
      method:'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPokemon)
    })
    .then(res => res.json())
    .then(pokemon => showPokemon(pokemon.id))
  }

  function deletePokemon(id){
    fetch(`http://localhost:3000/pokemon/${id}`,{
      method:'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res=> res.json())
    .then(() => {
      document.querySelector('#pokemon-container').innerHTML = ''
      getAllPokemon()
    })
  }


  
  
  //DOM manipulation 
  
  function addPokemon(e){
    e.preventDefault()
    console.log('add pokemon')
    const pokemon = {
        name:e.target['name-input'].value,
        sprites:{front:e.target["sprite-input-front"].value}
        }
    createPokemon(pokemon)
  
  }
  
  function renderPokemon(pokemon){
    let pokemonCard = document.createElement('div')
    pokemonCard.innerHTML = `
        <div class="card" id=${pokemon.id}>
            <h2>${pokemon.name}</h2>
            <img src="${pokemon.sprites.front}" />
  
        </div>
    `
    pokemonCard.addEventListener('click', ()=> showPokemon(pokemon.id))
    document.querySelector('#pokemon-container').appendChild(pokemonCard)
  }
  
  function showPokemon(id){
    const container = document.querySelector('#pokemon-container')
    container.innerHTML = ''
    fetchOne(id)
  
  }
  
  function renderDetail(pokemon){
    let pokemonCard = document.createElement('div')
    pokemonCard.innerHTML = `
        <div class="card" id=${pokemon.id}>
            <h2>${pokemon.name}</h2>
            <img src="${pokemon.sprites.front}" />
            <img src="${pokemon.sprites.back}" />
            <h3> height: ${pokemon.height} </h3.
            <h3> weight: ${pokemon.weight} </h3>            
           <button id="edit">Edit</button>
           <button id="delete">Delete</button>
        </div>
    `

    // console.log(pokemonCard.querySelector('#edit'))
    document.querySelector('#pokemon-container').appendChild(pokemonCard)
    document.getElementById('edit').addEventListener('click', () => editPokemon(pokemon))
    document.getElementById('delete').addEventListener('click',() => deletePokemon(pokemon.id))

  }

  function editPokemon(pokemon){
    console.log(pokemon)
    const form = document.querySelector('form')
    form['name-input'].value = pokemon.name
    form['sprite-input-front'].value = pokemon.sprites.front
    form['sprite-input-back'].value = pokemon.sprites.back
    form['height-input'].value = pokemon.height
    form['weight-input'].value = pokemon.weight

    form.removeEventListener('submit', addPokemon )
    form.addEventListener('submit',(e) => updatePokemon(e,pokemon) )

  }

  function updatePokemon(e, pokemon){
    e.preventDefault()
    const newPokemon = {
      name: e.target['name-input'].value,
      sprites: {
        front: e.target['sprite-input-front'].value,
        back: e.target['sprite-input-back'].value,
      },
      height: e.target['height-input'].value,
      weight: e.target['weight-input'].value
    }
    patchPokemon(newPokemon, pokemon.id)
  }
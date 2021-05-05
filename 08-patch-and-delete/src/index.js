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
        renderPokemon(pokemon)
    } )
  }

  function patchPokemon(updatedPokemon, id){
    console.log(updatedPokemon)
    fetch(`http://localhost:3000/pokemon/${id}`,{
      method: 'PATCH',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(updatedPokemon)
    })
    .then(res => res.json())
    .then(pokemon => {
      document.querySelector('#pokemon-container').innerHTML = ''
      renderDetail(pokemon)
    })
  }

  function deletePokemon(id){
    fetch(`http://localhost:3000/pokemon/${id}`,{
      method:'DELETE',
      headers: {
        'Content-Type':'application/json'
      }
    })
    .then(res => res.json())
    .then(() => {
      document.querySelector('#pokemon-container').innerHTML = ''
      getAllPokemon()
    })
  }
  

  
  
  //DOM manipulation 
  
  function addPokemon(e){
    e.preventDefault()
    const pokemon = {
        name:e.target['name-input'].value,
        sprites:{front:e.target["sprite-input"].value}
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
            <h3> Stats </h3>
            <ul>
                ${pokemon.stats.map(stat=> `<li>${stat.name}: ${stat.value}</li>`).join(' ')}
            </ul>
           <h3>Moves </h3>
           <ul>
              ${pokemon.moves.map(move => `<li>${move} </li>`).join(' ')}
           </ul> 
           <button id="edit" >Edit</button>
           <button id="delete" >Delete</button>
        </div>
    `
    
 
    // console.log(pokemonCard.querySelector('#edit'))
    document.querySelector('#pokemon-container').appendChild(pokemonCard)
    const editButton = document.querySelector('#edit')
  
    editButton.addEventListener('click', () => editPokemon(pokemon))
    document.querySelector('#delete').addEventListener('click', () => deletePokemon(pokemon.id))
  }

  function editPokemon(pokemon){
    let form = document.querySelector('form')
    form.removeEventListener('submit', addPokemon)
    form.addEventListener('submit', (e) => updatePokemon(e, pokemon))
    // console.log(form.querySelector('#name-input'))
   form['name-input'].value = pokemon.name
   form['sprite-input-front'].value = pokemon.sprites.front
   form['sprite-input-back'].value = pokemon.sprites.back
   form['height-input'].value = pokemon.height
   form['weight-input'].value = pokemon.weight 
   form.submit.value = 'Edit'

  }

  function updatePokemon(e, pokemon){
    e.preventDefault()


    const updatedPokemon = {
      name: e.target['name-input'].value,
      sprites: {
        front: e.target['sprite-input-front'].value,
        back: e.target['sprite-input-back'].value
      },
      height: e.target['height-input'].value,
      weight: e.target['weight-input'].value
    }

    let form = document.querySelector('form')
    form.reset()
    form.submit.value = 'submit'
    form.removeEventListener('submit', (e) => updatePokemon(e, pokemon))
    form.addEventListener('click', addPokemon)


    patchPokemon(updatedPokemon, pokemon.id)
  }
   
  


  
  
 
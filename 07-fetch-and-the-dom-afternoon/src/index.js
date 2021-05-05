document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector('#pokemon-post-form')
    form.addEventListener('submit', addPokemon)
    getAllPokemon()
})
//Bulbasaur
// console.log('before count')
// function count(){
//     let i = 0
//     while(i < 5){
//         console.log(i)
//         i++
//     }
// }
// count()
// console.log('after count')

// console.log('before fetch')

//Fetch

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


//DOM manipulation 

function addPokemon(e){
    e.preventDefault()
    const pokemon = {
        name:e.target['name-input'].value,
        sprites:{front:e.target.spriteinput.value}
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
    let h2 = document.createElement('h2')
    h2.innerText = `${pokemon.id} : ${pokemon.name}`
    let img = document.createElement('img')
    img.src = pokemon.sprites.front

    pokemonCard.append(h2, img)

    container.appendChild(pokemonCard)
}


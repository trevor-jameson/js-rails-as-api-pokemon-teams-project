// Ensure that students are running and requesting from the 3000 server
const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`


document.addEventListener('DOMContentLoaded', function(){
    renderAllTrainers()
})

// Takes an array of pokemon objects and enumeratively renders to page
function renderAllTrainers() {
    fetchAllTrainers().then(trainers => {
        trainers.forEach(trainer => {
            console.table(trainer.pokemons)
            renderSingleTrainer(trainer)
        })
    })
}

// Takes a pokemon object and renders it in a pokemon card appended to the pokemons-container
function renderSingleTrainer(trainer) {

    const TRAINERS_CONTAINER = document.getElementById('trainers-container')

    const trainerCard = document.createElement('div')
    trainerCard.classList.add('card')
    trainerCard.dataset.id = 1
    TRAINERS_CONTAINER.append(trainerCard)

    const trainerName = document.createElement('p')
    trainerName.innerText = trainer.name
    trainerCard.append(trainerName)

    const addPokemonBtn = document.createElement('button')
    addPokemonBtn.dataset.trainerId = trainer.id
    addPokemonBtn.innerText = "Add Pokemon"
    trainerCard.append(addPokemonBtn)

    const pokemonList = document.createElement('ul')
    trainerCard.append(pokemonList)

    trainer.pokemons.forEach(mon => renderPokemonListItem(mon, pokemonList))
    
    
    // Could either create and append, or interpolate data into innerHTML. Using innerHTML may remove eventListeners
    /*
      < div class="card" data - id="1" > <p>Prince</p>
        <button data-trainer-id="1">Add Pokemon</button>
        <ul>
            <li>Jacey (Kakuna) <button class="release" data-pokemon-id="140">Release</button></li>
            <li>Zachariah (Ditto) <button class="release" data-pokemon-id="141">Release</button></li>
            <li>Mittie (Farfetch'd) <button class="release" data-pokemon-id="149">Release</button></li>
            <li>Rosetta (Eevee) <button class="release" data-pokemon-id="150">Release</button></li>
            <li>Rod (Beedrill) <button class="release" data-pokemon-id="151">Release</button></li>
        </ul>
      </div >
      */


}

function renderPokemonListItem(pokemon, trainerCard) {

    const pokemonLi = document.createElement('li')
    pokemonLi.innerText = `${pokemon.nickname} (${pokemon.species}) `
    trainerCard.append(pokemonLi)

    const pokemonBtn = document.createElement('button')
    pokemonBtn.classList.add('release')
    pokemonBtn.innerText = 'Release'
    pokemonBtn.dataset.pokemonId = pokemon.id
    pokemonLi.append(pokemonBtn)

    
}



function fetchAllTrainers() {
    return fetch(TRAINERS_URL)
        .then(data => data.json())
        .catch(console.log)
}


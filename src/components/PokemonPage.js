import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const url = "http://localhost:3001/pokemon"
  const [pokemons, setPokemons] = useState([])
  const [ searchName, setSearchName ] = useState("")

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => setPokemons(data))
  }, [])

  function onUpdateSearchName(value){
    setSearchName(value)
  }

  function onNewPokemonAdd(newPokemon){
    setPokemons([...pokemons, newPokemon])
  }

  const pokemonsToDisplay = pokemons.filter(pokemon => {
    return pokemon.name.toLowerCase().includes(searchName.toLowerCase())
  })

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm 
        url={url} 
        onNewPokemonAdd={onNewPokemonAdd}
      />
      <br />
      <Search searchName={searchName} onUpdateSearchName={onUpdateSearchName} />
      <br />
      <PokemonCollection pokemons={pokemonsToDisplay} />
    </Container>
  );
}

export default PokemonPage;

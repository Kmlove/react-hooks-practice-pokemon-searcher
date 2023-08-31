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

  const pokemonsToDisplay = pokemons.filter(pokemon => {
    return pokemon.name.toLowerCase().includes(searchName.toLowerCase())
  })

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search searchName={searchName} onUpdateSearchName={onUpdateSearchName} />
      <br />
      <PokemonCollection pokemons={pokemonsToDisplay} />
    </Container>
  );
}

export default PokemonPage;

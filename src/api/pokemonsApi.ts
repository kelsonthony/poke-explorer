export async function fetchPokemons(limit = 20) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
    const data = await response.json();
    return data.results;
  }
  
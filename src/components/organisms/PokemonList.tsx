import { PokemonCard } from '../molecules/PokemonCard';
import { useFetchPokemons } from '../../hooks/useFetchPokemons';

export function PokemonList() {
  const { pokemons, loading } = useFetchPokemons();

  if (loading) return <div>Loading...</div>;

  return (
    <div className="grid grid-cols-2 gap-4">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.name} name={pokemon.name} />
      ))}
    </div>
  );
}

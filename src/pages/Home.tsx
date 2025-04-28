import { PokemonList } from '../components/organisms/PokemonList';

export function Home() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">PokeExplorer</h1>
      <PokemonList />
    </div>
  );
}

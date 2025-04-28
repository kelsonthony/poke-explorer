import { useFavorites } from '../../context/FavoritesContext';

interface PokemonCardProps {
  name: string;
}

export function PokemonCard({ name }: PokemonCardProps) {
  const { favorites, toggleFavorite } = useFavorites();
  const isFavorite = favorites.includes(name);

  return (
    <div className="border p-4 rounded shadow-md flex justify-between items-center">
      <span>{name}</span>
      <button
        className="text-blue-500"
        onClick={() => toggleFavorite(name)}
      >
        {isFavorite ? '★' : '☆'}
      </button>
    </div>
  );
}

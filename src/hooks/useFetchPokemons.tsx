import { useEffect, useState } from 'react';
import { fetchPokemons } from '../api/pokemonsApi';

export function useFetchPokemons(limit = 30) {
  const [pokemons, setPokemons] = useState<{ name: string; url: string }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPokemons(limit).then((data) => {
      setPokemons(data);
      setLoading(false);
    });
  }, [limit]);

  return { pokemons, loading };
}

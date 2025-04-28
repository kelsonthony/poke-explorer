import { Home } from './pages/Home';
import { FavoritesProvider } from './context/FavoritesContext';

function App() {
  return (
    <FavoritesProvider>
      <Home />
    </FavoritesProvider>
  );
}

export default App;

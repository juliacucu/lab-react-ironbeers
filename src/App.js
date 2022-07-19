import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BeersListPage from './pages/BeersListPage';
import BeerDetailPage from './pages/BeerDetailPage';
import RandomBeerPage from './pages/RandomBeerPage';
import NewBeerPage from './pages/NewBeerPage';

function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<BeersListPage />} />
        <Route path="/beers/:beerId" element={<BeerDetailPage />} />
        <Route path="/random-beer" element={<RandomBeerPage />} />
        <Route path="/new-beer" element={<NewBeerPage />} />
      </Routes>
    </div>
  );
}

export default App;

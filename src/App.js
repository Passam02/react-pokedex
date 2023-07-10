import logo from './logo.svg';
import './App.css';
import PokemonList from './PokemonList'
import { Route, Routes } from 'react-router-dom';
import PokemonPage from './PokemonPage'
import AppTopBar from './AppTopBar';

function App() {
  return (
    <div className="App">
      <AppTopBar/>
      <Routes>
        <Route exact path='/' Component={PokemonList}/>
        <Route  path='/:pokemon' Component={routeProps => <PokemonPage RInfo={routeProps}/>}/>
      </Routes>
    </div>
  );
}

// FIX ROUTEPROPS
export default App;

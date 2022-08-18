import './App.css';
import { Weather } from './features/weather/Weather';
import { Search } from './features/search/Search';

function App() {

  return (
    <div className="App">
      <h1>Weather by city</h1>
      <Search />
      <Weather />
    </div>
  );
}

export default App;

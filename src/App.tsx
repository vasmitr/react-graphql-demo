import React, { useEffect } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { fetchWeatherData } from './features/weather/weatherSlice';
import { useAppDispatch } from './app/hooks';
import { Weather } from './features/weather/Weather';

function App() {

  return (
    <div className="App">
      <Weather city="Izmir"/>
    </div>
  );
}

export default App;

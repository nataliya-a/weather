// import logo from './logo.svg';
import './App.css';
import WeatherCard from './components/WeatherCard';
import { useState, useEffect } from 'react';

function App() {
  const [temp, setTemp] = useState(0);


  const getWeatherData = async (lat, lon) => {
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m`);
    const data = await response.json();
    console.log(data.current.temperature_2m);
    setTemp(data.current.temperature_2m);
  }

  getWeatherData(52.52, 13.41);

  const props = {
    city: 'London',
    temp:  temp,
    weather: 'Cloudy',
    icon: 'https://cdn.weatherapi.com/weather/64x64/day/116.png'
  }


  return (
    <div className="App">
      { temp === 0 ? <p>Loading...</p> :
      <WeatherCard data={props} />
      }
    </div>
  );
}

export default App;

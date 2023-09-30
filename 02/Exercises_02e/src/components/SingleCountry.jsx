import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

const API = import.meta.env.VITE_API_KEY;

const SingleCountry = ({ country }) => {
  const [weather, setWeather] = useState([]);
  const [loaded, setLoaded] = useState(false);

  async function getWeather() {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${API}`
      );
      const data = response.data;
      console.log(data);
      setWeather(data);
      setLoaded(true);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getWeather();
  }, []);

  function formatNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }

  function calcCels(fahrenheit) {
    return (fahrenheit + 32) / 5 / 9;
  }

  return (
    <>
      <article className="result-container">
        <div className="main-container">
          <h2>{country.name.common}</h2>
          <p>Capital: {country.capital}</p>
          <p>Area: {formatNumber(country.area)}</p>
          <p>Official name: {country.name.official}</p>
          <p>Population: {formatNumber(country.population)} ppl</p>
        </div>
        <div className="main-container">
          <h2>Languages</h2>
          <ul>
            {Object.values(country.languages).map((value, index) => {
              return <li key={index}>{value}</li>;
            })}
          </ul>
        </div>
        <img src={country.flags.png} alt={country.flags.alt} />
      </article>
      {loaded ? (
        <article className="result-container">
          <h2>Weather in {country.capital}</h2>
          <p>Temperature: {calcCels(weather.main.temp).toFixed(2)} Celsius</p>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="iconofy"
          />
        </article>
      ) : (
        <p>Weather data is loading...</p>
      )}
    </>
  );
};

export default SingleCountry;

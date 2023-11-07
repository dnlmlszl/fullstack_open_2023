import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import CountryDetails from './CountryDetails';

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
      setWeather(data);
      setLoaded(true);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    // Call getWeather only if country.capital exists
    if (country.capital) {
      getWeather();
    }
    // Ensure dependency array includes variables that should trigger the effect
  }, [country.capital, API]);

  // function formatNumber(number) {
  //   return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  // }

  function calcCels(fahrenheit) {
    return fahrenheit - 273.15;
  }

  return (
    <section className="flex gap-8">
      {/* <article className="bg-white shadow rounded-lg p-6 mb-4 w-1/3">
        <div className="mb-4">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">
            {country.name.common}
          </h2>
          <p className="text-lg mb-2">Capital: {country.capital}</p>
          <p className="text-lg mb-2">Area: {formatNumber(country.area)}</p>
          <p className="text-lg mb-2">Official name: {country.name.official}</p>
          <p className="text-lg mb-2">
            Population: {formatNumber(country.population)} ppl
          </p>
        </div>
        <div className="bg-white py-4 rounded w-32">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">
            Languages
          </h2>
          <ul>
            {Object.values(country.languages).map((value, index) => {
              return <li key={index}>{value}</li>;
            })}
          </ul>
        </div>
        <img src={country.flags.png} alt={country.flags.alt} />
      </article> */}
      <CountryDetails countryCode={country.name.common} />
      {loaded ? (
        <article className="bg-white shadow rounded-lg p-6 mb-4 w-1/3">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">
            Weather in {country.capital}
          </h2>
          <p className="text-lg font-semibold mb-4 text-gray-600">
            Temperature: {calcCels(weather.main.temp).toFixed(2)} Celsius
          </p>
          <p className="text-lg font-semibold mb-4 text-gray-600">
            Wind: {weather.wind.speed} m/s
          </p>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="iconofy"
            className="inline-block"
          />
        </article>
      ) : (
        <p className="text-xl text-gray-600">Weather data is loading...</p>
      )}
    </section>
  );
};

export default SingleCountry;

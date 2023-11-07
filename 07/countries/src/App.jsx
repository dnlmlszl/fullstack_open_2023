import { useState, useEffect } from 'react';
import axios from 'axios';
import SingleCountry from './components/SingleCountry';
import CountryListItem from './components/CountryListItem';

function App() {
  const [value, setValue] = useState('');
  const [allCountries, setAllCountries] = useState([]);
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios
      .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
      .then((response) => {
        setAllCountries(response.data);
      })
      .catch((error) => {
        console.error('Error fetching countries', error);
      });
  }, []);

  function handleChange(e) {
    const inputValue = e.target.value.trim();
    setValue(inputValue);

    if (!inputValue) {
      setResults([]);
      return;
    }

    const filteredCountries = allCountries.filter((country) =>
      country.name.common.toLowerCase().includes(inputValue.toLowerCase())
    );

    setResults(filteredCountries);
  }

  return (
    <main className="container mx-auto min-h-screen bg-gray-100 p-6">
      <section className="mb-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Countries</h2>
        <form>
          <label className="block text-lg mb-2" htmlFor="country-search">
            Find countries{' '}
          </label>
          <input
            type="text"
            id="country-search"
            value={value}
            onChange={handleChange}
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
        </form>
      </section>
      <section className="mb-6">
        {results ? (
          Array.isArray(results) ? (
            results.length === 1 ? (
              <SingleCountry country={results[0]} />
            ) : results.length > 10 ? (
              <p className="text-xl text-gray-600 col-span-full">
                Too many matches, specify another filter
              </p>
            ) : (
              <ul className="flex flex-col divide-y divide-gray-200">
                {results.map((country) => (
                  <CountryListItem key={country.cca2} country={country} />
                ))}
              </ul>
            )
          ) : (
            <SingleCountry country={results} />
          )
        ) : null}
        {value && results.length === 0 && (
          <p className="text-xl text-gray-600">No country matches</p>
        )}
      </section>
    </main>
  );
}

export default App;

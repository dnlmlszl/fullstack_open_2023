import { useState, useEffect } from 'react';
import axios from 'axios';
import SingleCountry from './components/SingleCountry';
import CountryListItem from './components/CountryListItem';

function App() {
  const [value, setValue] = useState('');
  const [results, setResults] = useState([]);
  const [countries, setCountries] = useState([]);

  function handleChange(e) {
    const inputValue = e.target.value;
    setValue(inputValue);

    if (inputValue) {
      fetchCountries(inputValue);
    } else {
      setResults([]);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    setCountries(value);
  }

  function fetchCountryDetails(countryName) {
    axios
      .get(
        `https://studies.cs.helsinki.fi/restcountries/api/name/${countryName}`
      )
      .then((response) => {
        const countryDetails = response.data;
        setResults(countryDetails);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function fetchCountries(inputValue) {
    axios
      .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
      .then((response) => {
        const data = response.data;

        const filteredCountries = data.filter((country) =>
          country.name.common.toLowerCase().includes(inputValue.toLowerCase())
        );

        if (filteredCountries.length === 0) {
          setResults([]);
        } else if (filteredCountries.length === 1) {
          fetchCountryDetails(filteredCountries[0].name.common);
        } else {
          setResults(filteredCountries);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <main>
      <section className="form-container">
        <h2>Countries</h2>
        <form onSubmit={handleSubmit}>
          <label>Find countries </label>
          <input type="text" value={value} onChange={handleChange} />
        </form>
      </section>
      <section>
        <ul>
          {results ? (
            Array.isArray(results) ? (
              results.length === 1 ? (
                <SingleCountry country={results} />
              ) : results.length > 10 ? (
                <p>Too many matches, specify another filter</p>
              ) : (
                <ul>
                  {results.map((country) => (
                    <CountryListItem key={country.cca2} country={country} />
                  ))}
                </ul>
              )
            ) : (
              <SingleCountry country={results} />
            )
          ) : null}
        </ul>
      </section>
    </main>
  );
}

export default App;

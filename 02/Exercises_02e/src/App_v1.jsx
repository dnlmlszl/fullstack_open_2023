import { useState, useEffect } from 'react';
import axios from 'axios';

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
                <div>
                  <h2>{results.name.common}</h2>
                  <p>Capital: {results.capital}</p>
                  <p>Area: {results.area}</p>
                  <p>Population: {results.population}</p>
                  <h2>Languages</h2>
                  <ul>
                    {Object.values(results.languages).map((value, index) => {
                      return <li key={index}>{value}</li>;
                    })}
                  </ul>
                  <img src={results.flags.png} alt={results.flags.alt} />
                </div>
              ) : results.length > 10 ? (
                <p>Too many matches, specify another filter</p>
              ) : (
                <ul>
                  {results.map((country) => (
                    <li key={country.cca2}>{country.name.common}</li>
                  ))}
                </ul>
              )
            ) : (
              <article className="result-container">
                <div className="main-container">
                  <h2>{results.name.common}</h2>
                  <p>Capital: {results.capital}</p>
                  <p>Area: {results.area}</p>
                  <p>Official name: {results.name.official}</p>
                  <p>Population: {results.population} ppl</p>
                </div>
                <div>
                  <h2>Languages</h2>
                  <ul>
                    {Object.values(results.languages).map((value, index) => {
                      return <li key={index}>{value}</li>;
                    })}
                  </ul>
                </div>
                <img src={results.flags.png} alt={results.flags.alt} />
              </article>
            )
          ) : null}
        </ul>
      </section>
    </main>
  );
}

export default App;

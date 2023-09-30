import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

function App() {
  const [value, setValue] = useState('');
  const [rates, setRates] = useState({});
  const [currency, setCurrency] = useState(null);

  useEffect(() => {
    console.log('Effect run, currency is now', currency);
    if (currency) {
      console.log('Fetching exchange rates...');
      axios
        .get(`https://open.er-api.com/v6/latest/${currency}`)
        .then((response) => {
          setRates(response.data.rates);
        });
    }
  }, [currency]);

  function handleChange(e) {
    setValue(e.target.value);
  }

  function onSearch(e) {
    e.preventDefault();
    setCurrency(value);
  }

  return (
    <main>
      <form onSubmit={onSearch}>
        <label>Currency: </label>
        <input type="text" value={value} onChange={handleChange} />
        <button type="submit">Exchange rate</button>
      </form>
      <pre>{JSON.stringify(rates, null, 2)}</pre>
    </main>
  );
}

export default App;

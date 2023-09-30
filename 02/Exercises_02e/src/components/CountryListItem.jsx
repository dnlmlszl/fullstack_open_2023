import { useState } from 'react';
import SingleCountry from './SingleCountry';

const CountryListItem = ({ country }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <li className="list-item">
        <span>{country.name.common}</span>
        <button onClick={() => setShowDetails(!showDetails)}>
          {showDetails ? 'Hide details' : 'Show details'}
        </button>
      </li>
      {showDetails && <SingleCountry country={country} />}
    </>
  );
};

export default CountryListItem;

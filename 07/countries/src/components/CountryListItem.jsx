import { useState } from 'react';
import SingleCountry from './SingleCountry';

const CountryListItem = ({ country }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <li className="bg-white shadow rounded-lg p-4 hover:bg-gray-50 mb-4 w-1/3">
        <span className="mb-2">{country.name.common}</span>
        <button
          onClick={() => setShowDetails(!showDetails)}
          className="flex items-center justify-center p-2 rounded-md bg-gray-200 hover:bg-gray-300 transition-colors"
        >
          {showDetails ? 'Hide details' : 'Show details'}
        </button>
      </li>
      {showDetails && <SingleCountry country={country} />}
    </>
  );
};

export default CountryListItem;

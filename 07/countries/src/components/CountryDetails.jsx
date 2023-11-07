import { useCountry } from '../hooks/useCountry';

const CountryDetails = ({ countryCode }) => {
  const { country, loading, error } = useCountry(countryCode);

  function formatNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }

  if (loading)
    return <p className="text-2xl text-gray-600 font-bolder">Loading...</p>;
  if (error)
    return <p className="text-2xl text-red-600 font-bolder">Error: {error}</p>;
  if (!country)
    return (
      <p className="text-2xl text-gray-600 font-bolder">No country found</p>
    );

  return (
    <article className="bg-white shadow rounded-lg p-6 mb-4 w-1/3">
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
        <h2 className="text-xl font-semibold mb-2 text-gray-800">Languages</h2>
        <ul>
          {Object.values(country.languages).map((value, index) => {
            return <li key={index}>{value}</li>;
          })}
        </ul>
      </div>
      <img src={country.flags.png} alt={country.flags.alt} />
    </article>
  );
};

export default CountryDetails;

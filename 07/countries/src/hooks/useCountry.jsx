import axios from 'axios';
import { useEffect, useState } from 'react';

export const useCountry = (countryCode) => {
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountry = async () => {
      if (!countryCode) {
        setCountry(null);
        return;
      }

      setLoading(true);
      setError(null);
      try {
        const response = await axios(
          `https://studies.cs.helsinki.fi/restcountries/api/name/${countryCode}`
        );
        if (!response.data) return setError('No data');
        console.log(response);
        setCountry(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCountry();
  }, [countryCode]);

  return { country, loading, error };
};

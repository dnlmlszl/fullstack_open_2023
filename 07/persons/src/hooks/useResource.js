import axios from 'axios';
import { useEffect, useState } from 'react';

export const useResource = (baseUrl) => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(baseUrl);
        setResources(response.data);
      } catch (error) {
        console.error('Error when fetching resources', error);
      }
    };

    fetchData();
  }, [baseUrl]);

  const create = async (resource) => {
    try {
      const response = await axios.post(baseUrl, resource);
      setResources([...resources, response.data]);
    } catch (error) {
      console.error('Error when creating resource: ', error);
    }
  };

  const service = {
    create,
  };

  return [resources, service];
};

import axios from 'axios';
const baseUrl = 'http://localhost:5000/api/v1/persons';

const getAll = async () => {
  try {
    const response = await axios.get(baseUrl);
    return response.data;
  } catch (error) {
    console.error('Error fetching data: ', error);
    throw error;
  }
};

const createPerson = async (newObject) => {
  try {
    const response = await axios.post(baseUrl, newObject);
    return response.data;
  } catch (error) {
    console.error('Error creating person: ', error);
    throw error;
  }
};

const deletePerson = async (id) => {
  try {
    const response = await axios.delete(`${baseUrl}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting person: ', error);
    throw error;
  }
};

const updatePerson = async (id, newObj) => {
  try {
    const response = await axios.put(`${baseUrl}/${id}`, newObj);
    return response.data;
  } catch (error) {
    console.error('Error updating person: ', error);
    throw error;
  }
};

export default { getAll, createPerson, deletePerson, updatePerson };

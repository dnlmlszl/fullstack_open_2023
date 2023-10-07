import axios from 'axios';
const baseUrl = 'http://localhost:5000/api/v1/notes';

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data.notes);
};

const create = (newObject) => {
  const request = axios.post(baseUrl, newObject);
  return request.then((response) => response.data.notes);
};

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject);
  return request.then((response) => response.data.notes);
};

export default {
  getAll,
  create,
  update,
};

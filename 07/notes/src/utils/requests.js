import axios from 'axios';

const baseUrl = 'http://localhost:3001/notes';

export const getNotes = () => {
  return axios.get(baseUrl).then((res) => res.data);
};

export const createNote = (newNote) => {
  return axios.post(baseUrl, newNote).then((res) => res.data);
};

export const updateNote = (updatedNote) => {
  return axios
    .put(`${baseUrl}/${updatedNote.id}`, updatedNote)
    .then((res) => res.data);
};

export const getNoteById = (id) => {
  return axios(`${baseUrl}/${id}`).then((res) => res.data);
};

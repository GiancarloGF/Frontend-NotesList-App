import axios from "axios";
let BASE_URL = '/api/notes'
// let BASE_URL = 'https://notexapp.herokuapp.com/api/notes'

if (process.env.NODE_ENV === 'development') {
    BASE_URL = 'http://localhost:3001/api/notes'
}
// const baseUrl = "https://notexapp.herokuapp.com/api/notes";
// At first, token is set with a null value. Once we logged successfully, token variable will have a valid value.
let token=null
//👆
// Function to modify the token string. It turns the token into a string with 'bearer' concatenated each time we login.
const setToken=(newToken) => {
  token= `bearer ${newToken}`
}

// Function to get back all notes.
const getAll = async() => {
  const request = await axios.get(BASE_URL);
  return request.data;
};

// Function to create a new note
const create = async (newObject) => {
  // Structure of headers
  const config={
    headers:{Authorization: token}
  };
  const response = await axios.post(BASE_URL, newObject, config);//Response from the server with confirmation of created note.
  return response.data;//Send back the response to the frontend (React).
};

// Function to uddate a note.
const update = async (id, newObject) => {
  const request = await axios.put(`${BASE_URL}/${id}`, newObject);
  return request.data;
};

// Function to uddate a note.
const deleteNote = async (id) => {
   await axios.delete(`${BASE_URL}/${id}`);
  // return request.data;
};

export default {
  getAll,
  create,
  update,
  setToken,
  deleteNote
};


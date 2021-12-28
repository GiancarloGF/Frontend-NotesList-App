import axios from "axios";
// const baseUrl = "/api/notes";//URL relativa. https://fullstackopen.com/es/part3/implementacion_de_la_aplicacion_en_internet#proxy
const baseUrl='http://localhost:3001/api/notes'
// At first, token is set with a null value. Once we logged successfully, token variable will have a valid value.
let token=null
//👆
// Function to modify the token string. It turns the token into a string with 'bearer' concatenated each time we login.
const setToken=(newToken) => {
  token= `bearer ${newToken}`
}

// Function to get back all notes.
const getAll = async() => {
  const request = await axios.get(baseUrl);
  return request.data;
};

// Function to create a new note
const create = async (newObject) => {
  // Structure of headers
  const config={
    headers:{Authorization: token}
  };
  const response = await axios.post(baseUrl, newObject, config);//Response from the server with confirmation of created note.
  return response.data;//Send back the response to the frontend (React).
};

// Function to uddate a note.
const update = async (id, newObject) => {
  const request = await axios.put(`${baseUrl}/${id}`, newObject);
  return request.data;
};

export default {
  getAll,
  create,
  update,
  setToken
};


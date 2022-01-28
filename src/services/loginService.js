import axios from 'axios'
let BASE_URL = '/api/login'
// let BASE_URL = 'https://notexapp.herokuapp.com/api/login'

if (process.env.NODE_ENV === 'development') {
    BASE_URL = 'http://localhost:3001/api/login'
}
// const baseUrl='https://notexapp.herokuapp.com/api/login'
//If login is successful, then we save the token from the server. username and name are included.
const login=async credentials=>{
      const response= await axios.post(BASE_URL,credentials);
      return response.data;// {token, username, name}
}

export default {login}
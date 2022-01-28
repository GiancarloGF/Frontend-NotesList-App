import axios from 'axios'
let BASE_URL = '/api/users'
// let BASE_URL = 'https://notexapp.herokuapp.com/api/users'

if (process.env.NODE_ENV === 'development') {
    BASE_URL = 'http://localhost:3001/api/users'
}
// const baseUrl='https://notexapp.herokuapp.com/api/users'
//If login is successful, then we save the token from the server. username and name are included.
const register=async (credentials)=>{
      console.log("credenntials",credentials)
      const response= await axios.post(BASE_URL,credentials);
      return response.data;// {token, username, name}
}

export default {register}
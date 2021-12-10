import axios from 'axios'
// const baseUrl='/api/login'
const baseUrl='http://localhost:3001/api/login'
//If login is successful, then we save the token from the server. username and name are included.
const login=async credentials=>{
      const response= await axios.post(baseUrl,credentials);
      return response.data;// {token, username, name}
}

export default {login}
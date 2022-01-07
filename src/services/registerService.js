import axios from 'axios'
// const baseUrl='/api/login'
const baseUrl='http://localhost:3001/api/users'
//If login is successful, then we save the token from the server. username and name are included.
const register=async (credentials)=>{
      console.log("credenntials",credentials)
      const response= await axios.post(baseUrl,credentials);
      return response.data;// {token, username, name}
}

export default {register}
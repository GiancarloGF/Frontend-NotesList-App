import axios from 'axios'
let BASE_URL = '/api/weather'
// let BASE_URL = 'https://notexapp.herokuapp.com/api/weather'

if (process.env.NODE_ENV === 'development') {
    BASE_URL = 'http://localhost:3001/api/weather'
}

const getByLocation = async (lat,lon) => {

    const response = await axios.post(BASE_URL, { lat, lon, lang: "es", units: "metric" });
    return response.data;
}

const getByQ = async (q) => {
    const response = await axios.post(BASE_URL, { q, lang: "es", units: "metric" });
    return response.data;
}


export default { getByLocation,getByQ }
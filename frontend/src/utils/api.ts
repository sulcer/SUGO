import axios from 'axios'
export const strapiInstance = axios.create({
    baseURL : process.env.STRAPI_URL,
    headers: {
        Authorization: 'Bearer ' + process.env.API_TOKEN,
        "Content-Type": "application/json"
    }
})
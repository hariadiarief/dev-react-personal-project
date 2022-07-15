import Axios from 'axios'

const API = Axios.create({
    baseURL: `https://randomuser.me/api/`,
})

export default API

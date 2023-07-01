import axios from 'axios'

export default axios.create({
    baseURL: 'http://localhost/example-webservice/public/api'
})
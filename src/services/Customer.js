import axios from "axios"

const baseUrl = "https://localhost:7168/nw/customer"
/*porttinumero löytyy HarjoituskoodiApi > Properties kansio > launchSettings.json*/

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = newCustomer => {
    return axios.post(baseUrl, newCustomer)
}



export default { getAll, create }
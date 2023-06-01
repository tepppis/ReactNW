import axios from "axios"

const baseUrl = "https://localhost:7168/nw/customer"
/*porttinumero löytyy HarjoituskoodiApi > Properties kansio > launchSettings.json*/

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

//HTTP-pyyntö POST
const create = newCustomer => {
    return axios.post(baseUrl, newCustomer)
}

//HTTP-pyyntö DELETE
const remove = id => {
    return axios.delete(`${baseUrl}/${id}`)
}

//HTTP-pyyntö PUT
const update = (object) => {
    return axios.put(`${baseUrl}/${object.customerId}`, object)
}

export default { getAll, create, remove, update }
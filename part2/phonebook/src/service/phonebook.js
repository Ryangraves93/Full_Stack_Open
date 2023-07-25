import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const entries = axios.get(baseUrl)
    return entries.then(response => response.data)
}

const update = (object) => {
    const request = axios.post(baseUrl, object)
    return request.then(response => response.data)
}

const removeObject = (id) => {
    console.log(`${baseUrl}/${id}`)
    return axios.delete(`${baseUrl}/${id}`)
}

const getOne = (id) => {
    const entry = axios.get(`${baseUrl}/${id}`)
    console.log("Entry retrieved " + entry)
}

const updateEntry = (object, id) => {
    console.log(object)
    console.log(id)
    return axios.put(`${baseUrl}/${id}`, {
        name: object.name,
        number: object.number
    });
}

export default { getAll, update, removeObject, getOne, updateEntry }
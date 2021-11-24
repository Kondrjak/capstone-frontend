import axios from "axios";

export function get(url:string) {
    return axios
        .get(url)
        .then(response => response.data)
        .catch(console.error)
}

export function put(url:string, newData:any) {
    return axios
        .post('/api/question', newData)
        .then(response => response.data)
        .catch(console.error)
}

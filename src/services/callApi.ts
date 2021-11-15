import axios from "axios";

export function getRequest<T,R,D>(url:string){
    return axios.get<T,R,D>(url)
        .then()
        .catch()
}
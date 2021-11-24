import React from "react";
import {createContext, useState} from "react";
import {useHistory} from "react-router-dom";
import axios from "axios";
import {urlBackendLogin, urlBackendLoginGithub} from "../params/urls";

export const Authentication = createContext({})

type Props = { children: any }
export default function AuthProvider({children}: Props) {
    const [token, setToken] = useState()
    const history = useHistory();

    function postCredentials(username: string, password: string) {
        const user = {
            username: username,
            password: password
        }
        return axios
            .post(urlBackendLogin, user)
            .then(response => response.data)
            .then(result => setToken(result))
            .then(() => history.push('/'))
            .catch(error => console.error(error.message()))
    }

    function postCredentialsGitHub(githubCode: string) {
        return axios
            .post(urlBackendLoginGithub, githubCode)
            .then(response => response.data)
            .catch(console.error)
    }

    return (
        <Authentication.Provider value={{token, postCredentials, postCredentialsGitHub}}>
            {children}
        </Authentication.Provider>
    )
}
import React, {useContext} from "react";
import {createContext, useState} from "react";
import {useHistory} from "react-router-dom";
import axios from "axios";
import {urlBackendLogin, urlBackendLoginGithub} from "../params/urls";

const Authentication = createContext({})

type Props = { children: any }
export function AuthProvider({children}: Props) {
    const [token, setToken] = useState()
    const [loggedIn, setLoggedIn] = useState(false)
    const history = useHistory();

    function postCredentials(credentials:any) {
        console.log(credentials)
        return axios
            .post(urlBackendLogin, credentials)
            .then(response => response.data)
            .then(result => {
                setToken(result)
                setLoggedIn(true)
            })
            .then(() => history.push('/write-text'))
            .catch(error => {
                console.error(error.message())
                setLoggedIn(false)
            })
    }

    function postCredentialsGithub(githubCode: string) {
        return axios
            .post(urlBackendLoginGithub, githubCode)
            .then(response => response.data)
            .catch(error => console.error(error.message()))
    }

    const [loginChild, ...pageContentChildren] = [...React.Children.toArray(children)]

    return (
        <Authentication.Provider value={{token, postCredentials, postCredentialsGithub}}>
            {!loggedIn ? loginChild : pageContentChildren.map(x=>x)}
        </Authentication.Provider>
    )
}


export const useAuth = () => useContext(Authentication)
import React, {useContext} from "react";
import {createContext, useState} from "react";

const Authentication = createContext({})

type Props = { children: any }

export function AuthProvider({children}: Props) {
    const [token, setToken] = useState()
    const [loggedIn, setLoggedIn] = useState(false)
    const [loginChild, ...pageContentChildren] = [...React.Children.toArray(children)]

    return (
        <Authentication.Provider value={{token, setToken, setLoggedIn}}>
            {!loggedIn ? loginChild : pageContentChildren.map(x => x)}
        </Authentication.Provider>
    )
}

export const useAuth = () => useContext(Authentication)
import React, {useContext} from "react";
import {createContext, useState} from "react";
export const Authentication = createContext({token: ""})

type Props = { children: any }

export function AuthProvider({children}: Props) {
    const [token, setToken] = useState<string>("")
    const [loggedIn, setLoggedIn] = useState<boolean>(false)
    const [loginChild, ...pageContentChildren] = [...React.Children.toArray(children)]

    return (
        // @ts-ignore
        <Authentication.Provider value={{token, setToken, setLoggedIn}}>
            {!loggedIn ? loginChild : pageContentChildren.map(x => x)}
        </Authentication.Provider>
    )
}

export function useAuth(){
    return useContext(Authentication)
}
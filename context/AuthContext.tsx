import { View, Text } from 'react-native'
import React, { createContext, ReactNode, useContext, useState } from 'react'

const AuthContext = createContext<any>(null)

const AuthProvider = ({children}:{children: ReactNode})=>{
    const [isUser, setIsUser] = useState(false);
    
    const login = () => {
        setIsUser(true)
    }

    const logout = () => {
        setIsUser(false)
    }


    return (
        <AuthContext.Provider value={{isUser, login, logout}}>{children}</AuthContext.Provider>
    ) 
}


const useAuth = () => {
    return useContext(AuthContext);
}


export {AuthProvider, useAuth}

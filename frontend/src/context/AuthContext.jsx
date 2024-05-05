import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {

    const [currentUser, setCurrenntUser] = useState(JSON.parse(localStorage.getItem('user')) || null);


    const updateUser = data => {
        setCurrenntUser(data);
    }

    useEffect(()=>{

        localStorage.setItem('user', JSON.stringify(currentUser));

    }, [currentUser]);




    return (
        <AuthContext.Provider value={
            {
                currentUser,
                updateUser,
            }
        }>
            {children}
        </AuthContext.Provider>
    )


}
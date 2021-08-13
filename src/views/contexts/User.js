import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

const UserContext = createContext()
const UserProvider = ({ children }) => {
    const [pengguna, setPengguna] = useState([])
    const getPengguna = async () => {
        let response = await axios.get('https://jsonplaceholder.typicode.com/users/5')
        setPengguna(response.data)
    }

    useEffect(() => {
        getPengguna()
    }, [])

    return (
        <UserContext.Provider value={{ pengguna }}>
            {children}
        </UserContext.Provider>
    )
}

export {UserProvider, UserContext};
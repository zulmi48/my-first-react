import React, { useContext } from 'react';
import { UserContext } from './contexts/User';


function AuthenticatedUser(props) {    
    const { pengguna } = useContext(UserContext)
    return (
        <div>
            {pengguna.name}
        </div>
    )

}

export default AuthenticatedUser;
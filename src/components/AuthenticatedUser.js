import React, { useContext } from 'react';
import { UserContext } from '../views/contexts/User';

function AuthenticatedUser(props) {    
    const { pengguna } = useContext(UserContext)
    return (
        <div>
            {pengguna.name}
        </div>
    )

}

export default AuthenticatedUser;
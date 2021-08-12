import React from 'react';
import AuthenticatedUser from '../components/AuthenticatedUser';
import { UserProvider } from './contexts/User';

function Home(props) {
    return (
        <div className="container">
            <UserProvider>
                <AuthenticatedUser />
            </UserProvider>
        </div>
    );
}

export default Home;
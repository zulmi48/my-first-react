import React from 'react';
import AuthenticatedUser from '../components/AuthenticatedUser';
import { UserProvider } from '../components/contexts/User';

function Home(props) {
    return (
        <div className="container">
            <UserProvider>
                <div className="d-flex">
                    <span className="me-1">(Data dari Context) My Name is </span> <AuthenticatedUser />
                </div>
            </UserProvider>
        </div>
    );
}

export default Home;
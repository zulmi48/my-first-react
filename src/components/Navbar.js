import React from 'react';
import { NavLink } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { authUser } from '../store';
import { UserProvider } from '../views/contexts/User';
import AuthenticatedUser from './AuthenticatedUser';

function Navbar({ children }) {
    const {user} = useRecoilValue(authUser)
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-info">
                <div className="container-fluid">
                    <NavLink exact className="navbar-brand" to="/" >My App</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink exact className="nav-link" to="/" >Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about" >About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact" >Contact</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/users" >Users</NavLink>
                            </li>                            
                            <li className="nav-item">
                                
                            </li>
                        </ul>
                        <span class="navbar-text">
                            <NavLink className="nav-link" to="/" >
                                <div>{user.name }</div>
                            </NavLink>
                        </span>
                    </div>
                </div>
            </nav>

            <div className="py-4">
                {children}
            </div>
        </div>
        
    );
}

export default Navbar;
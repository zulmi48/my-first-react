import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';

function Show(props) {
    const [user, setUser] = useState([])
    let { identifier } = useParams();
    const getUser = async () => {
        let response = await axios.get(`https://jsonplaceholder.typicode.com/users/${identifier}`);
        setUser(response.data);
    }

    useEffect(() => {
        getUser()
    }, [identifier])

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="mb-2">
                        <NavLink className="btn btn-sm btn-secondary" to="/users">Back</NavLink>
                    </div>
                    <div className="card">
                        <div className="card-header"> {user.name} </div>
                        <div className="card-body">
                            <div>{user.username}</div>                            
                            <div>{user.phone} </div>
                            <div>{user.website}</div>
                            <div>{user.email}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Show;
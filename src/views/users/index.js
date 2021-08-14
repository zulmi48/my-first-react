import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function Users(props) {

    const [users, setUsers] = useState([])
    const getUsers = async () => {
        try {
            let response = await axios.get('https://jsonplaceholder.typicode.com/users')
            setUsers(response.data)
        } catch (e) {
            console.log(e.message);
        }
    }

    useEffect(()=>{
        getUsers()
    }, [])

    return (
        <div className="container">
            <div className="row">
                {
                    users.map((user, index) => {
                        return (
                            <div className="col-md-3" key={index}>
                                <div className="card mb-2">
                                    <div className="card-header text-center text-black-50"> {user.name} </div>
                                    <div className="card-body">
                                        <div className="mb-3">
                                            <a href={`http://${user.website}`} target="_blank" >{user.website}</a>  
                                        </div>                                        
                                        <NavLink className="btn btn-sm btn-info" to={`users/${user.id}`}>View Profile</NavLink>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Users;
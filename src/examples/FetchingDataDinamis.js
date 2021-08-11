import axios from 'axios';
import React, { useEffect, useState } from 'react';

function FetchingDataDinamis(props) {
    const [identifier, setIdentifier] = useState(1);
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(false)
    const getUser = async () => {
        setLoading(true)
        try {
            let response = await axios.get(`https://jsonplaceholder.typicode.com/users/${identifier}`)
            setUser(response.data)
            setLoading(false)
        }
        catch (e) {
            setLoading(true)
            console.log(e.message)
        }
    }

    useEffect(() => {
        getUser();
    }, [identifier])    

    return (
        <div className="py-5">
            <div className="container">
                <input type="text" value={identifier} onChange={(e) => setIdentifier(e.target.value)} name="identifier" id="identifier" className="form-control" />
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            loading ? <h5>Loading ...</h5> :
                        <tr>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>                                        
                        </tr>
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default FetchingDataDinamis;
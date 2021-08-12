import React from 'react';

function Login(props) {
    return (
        <div className="container">
            <div className="row justify-content-center align-items-center vh-100">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header text-center">Login</div>
                        <div className="card-body">
                            <form>
                                <div className="mb-4">
                                    <label htmlFor="password" className="form-label">password</label>
                                    <input type="text" name="password" id="password" className="form-control" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" name="password" id="password" className="form-control" />
                                </div>
                                <div className="mb-4 d-grid gap-2">
                                    <button type="submit" className="btn btn-primary" >Log in</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
import React, { useState } from 'react';

function FunctionExample() {
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [fullname, setFullname] = useState('')

    const submitHandler = (e) => {
        e.preventDefault();
        setFullname(`${firstname} ${lastname}`)
        setFirstname('')
        setLastname('')
    }

    return (
        <div className='p-5'>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header">Learn React Function</div>
                            <div className="card-body">
                                <form onSubmit={submitHandler}>
                                    <div className="mb-4">
                                        <label htmlFor="firstname" className="form-label" >Firstname</label>
                                        <input value={firstname} onChange={(e) => setFirstname(e.target.value)} type="text" name="firstname" id="firstname" className="form-control" />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="lastname" className="form-label" >Lastname</label>
                                        <input value={lastname} onChange={(e) => setLastname(e.target.value)} type="text" name="lastname" id="lastname" className="form-control" />
                                    </div>
                                    <div className="d-grid gap-2">
                                        <button type="submit" className="btn btn-block btn-primary">Show</button>
                                    </div>
                                </form>
                            </div>
                            <div className="card-footer">
                                My Full Name is { fullname ? fullname : '. . .'}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FunctionExample;
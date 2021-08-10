import React, { Component } from 'react';

class ClassExample extends Component {
    constructor() {
        super()
        this.state = {
            firstname: '',
            lastname: '',
            fullname: ''
        }
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.setState({
            fullname : `${this.state.firstname} ${this.state.lastname}`
        })
        this.state.firstname = ''
        this.state.lastname =''
    }

    render() {
      const {fullname} = this.state
    return (
      <div className='p-5'>
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header">Belajar React JS</div>
                        <div className="card-body">
                            <form onSubmit={this.submitHandler}>
                                <div className="mb-4">
                                    <label htmlFor="firstname" className='form-label' >Firstname</label>
                                    <input value={this.state.firstname} onChange={this.changeHandler} type="text" name="firstname" id="firstname" className='form-control' />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="lastname" className='form-label' >Lastname</label>
                                    <input value={this.state.lastname} onChange={this.changeHandler} type="text" name="lastname" id="lastname" className='form-control' />
                                </div>
                                <div className="mb-4">
                                    <button type="submit" className='btn btn-primary btn-block' >Show</button>
                                </div>
                            </form>
                        </div>
                        <div className="card-footer">
                            My Name is {fullname ? fullname : '....'}
                        </div>
                    </div>    
                </div>
            </div>
        </div>        
      </div>      
    ) 
  }
}

export default ClassExample;
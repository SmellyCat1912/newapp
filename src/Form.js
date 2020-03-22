import React, { Component } from 'react'

class Form extends Component{

    initiatialState = {
        name : '',
        job : ''
    }

    state = this.initiatialState

    handleChanges = event => {
        const {name, value} = event.target
        
        this.setState(
            {
                [name]: value
            }
        )
    }

    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initiatialState)
    }

    render(){
        const {name, job} = this.state

        return(
            <div class='container-fluid'>
                <form>
                    <div className='form-group'>
                        <label htmlFor="exampleInputEmail1">name</label>
                        <input
                            className='form-control'
                            type='text'
                            name='name'
                            id = 'name'
                            value={name}
                            onChange={this.handleChanges}/>
                    </div>
                    <div className='class-group'>
                        <label htmlFor="exampleInputEmail1">job</label>
                        <input
                            className='form-control'
                            type='text'
                            name='job'
                            id='job'
                            value={job}
                            onChange={this.handleChanges}/>
                    </div>
                <button type="button" className="btn btn-primary mt-3" onClick={this.submitForm}>Submit</button>
                </form>
            </div>
        )
    }
}

export default Form
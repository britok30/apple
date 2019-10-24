import React, { Component } from 'react'

export default class Form extends Component {
    render() {
        return (
            <div className="wrapper">
               <div className="form-wrapper">
                   <h1>Register</h1>
                   <form onSubmit={this.handleSubmit} noValidate>
                       <div className="firstName">
                           <label htmlFor="firstName">First Name</label>
                           <input type="text" className="" placeholder="First Name" type="text" name="firstName" noValidate onChange={this.handleChange}/>
                       </div>
                   </form>
               </div> 
            </div>
        )
    }
}

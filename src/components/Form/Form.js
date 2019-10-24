import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    formErrors: { email: "", password: "" },
    emailValid: false,
    passwordValid: false,
    formValid: false
  };

  onSubmit = e => {
    e.preventDefault();
  };

  handleUserInput = e => {
    const name = e.target.value;
    const value = e.target.value;
    this.setState({ [name]: value });
  };

  render() {
    const { firstName, lastName, email, password } = this.state;

    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Create Account</h1>
          <form onSubmit={this.onSubmit} noValidate>
            <div className="firstName">
              <label htmlFor="firstName">First Name</label>
              <input
                placeholder="First Name"
                type="text"
                name="firstName"
                noValidate
                onChange={event => this.handleUserInput(event)}
                value={firstName}
              />
            </div>
            <div className="lastName">
              <label htmlFor="lastName">Last Name</label>
              <input
                className=""
                placeholder="Last Name"
                type="text"
                name="lastName"
                noValidate
                onChange={event => this.handleUserInput(event)}
                value={lastName}
              />
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                className=""
                placeholder="Email"
                type="email"
                name="email"
                noValidate
                onChange={event => this.handleUserInput(event)}
                value={email}
              />
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                className=""
                placeholder="Password"
                type="password"
                name="password"
                noValidate
                onChange={event => this.handleUserInput(event)}
                value={password}
              />
            </div>
            <div className="createAccount">
              <button className="btn btn-dark" type="submit">
                Create Account
              </button>
              <small>Already Have an Account?</small>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;

import React, { Component } from "react";
import FormError from "./FormError";
import "./Form.css";

class Form extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    // Check Errors
    formErrors: { email: "", password: "" },
    emailValid: false,
    passwordValid: false,
    formValid: false
  };

  //   On Submit Handler

  onSubmit = e => {
    e.preventDefault();
  };

  //   User Input Handler

  handleUserInput = e => {
    const name = e.target.value;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validate(name, value);
    });
  };

  validate(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch (fieldName) {
      case "email":
        //   Simple Regex
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? "" : " is invalid";
        break;
      case "password":
        //Password Minimum length of 6
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? "" : " is too short";
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        emailValid: emailValid,
        passwordValid: passwordValid
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid: this.state.emailValid && this.state.passwordValid
    });
  }

  render() {
    const { firstName, lastName, email, password } = this.state;

    return (
      <div className="wrapper">
        <div className="panel panel-default">
          <FormError formErrors={this.state.formErrors} />
        </div>

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

/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";

import "./loginANDregister.css";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: null,
      password: null,
      email: null,
      password2: null,
      formErrors: {
        username: "",
        password: "",
        email: "",
        password2: "",
      },
      resp: ""
    };
  }



  handleSubmit = e => {
    e.preventDefault();


    if (formValid(this.state)) {
      fetch('http://127.0.0.1:8000/auth/register/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',

        },
        body: JSON.stringify(this.state)

      }).then(response => {
        console.log(response.status);
        if (response.ok) {
          this.props.history.push("/");
        }
        return response.json();
      }).then(data => {
        console.log(data); 
        data.detail?this.setState({resp: data.detail}):this.setState({resp: data.username});
        console.log(this.state.resp);
      })

    }

  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };
    let valuen;
    switch (name) {
      case "username":
        formErrors.firstName =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "password":
        formErrors.password =
          value.length < 8 ? "minimum 8 characaters required" : "";
        formErrors.password2 =
          value !== this.state.password2 ? "paswords dont match" : "";
        break;
      case "password2":
        formErrors.password2 =
          value !== this.state.password ? "paswords dont match" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };
  render() {
    const { formErrors } = this.state;

    return (
      <div className="container px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
        <div className="authWrapper row">
          <img
            className="authImg"
            src="https://images.pexels.com/photos/3530056/pexels-photo-3530056.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />
          <div className="form-authWrapper">
            <h1-1>Create Account</h1-1>
            <form onSubmit={this.handleSubmit} noValidate>
              <div className="email">
                <label htmlFor="firstName">Username</label>
                <input
                  className={formErrors.username.length > 0 ? "error" : null}
                  placeholder="Username"
                  type="text"
                  name="username"
                  noValidate
                  onChange={this.handleChange}
                />
                {formErrors.username.length > 0 && (
                  <span className="errorMessage red">
                    {formErrors.username}
                  </span>
                )}
              </div>
              <div className="email">
                <label htmlFor="email">Email</label>
                <input
                  className={formErrors.email.length > 0 ? "error" : null}
                  placeholder="Email"
                  type="email"
                  name="email"
                  noValidate
                  onChange={this.handleChange}
                />
                {formErrors.email.length > 0 && (
                  <span className="errorMessage red">{formErrors.email}</span>
                )}

              </div>
              <div className="email">
                <label htmlFor="email">Password</label>
                <input
                  className={formErrors.password.length > 0 ? "error" : null}
                  placeholder="Password"
                  type="password"
                  name="password"
                  noValidate
                  onChange={this.handleChange}
                />
                {formErrors.password.length > 0 && (
                  <span className="errorMessage red">
                    {formErrors.password}
                  </span>
                )}

              </div>
              <div className="password">
                <label htmlFor="password">Repeat Password</label>
                <input
                  className={formErrors.password2.length > 0 ? "error" : null}
                  placeholder="Repeat password"
                  type="password"
                  name="password2"
                  noValidate
                  onChange={this.handleChange}
                />
                {formErrors.password2.length > 0 && (
                  <span className="errorMessage red">
                    {formErrors.password2}
                  </span>
                )}
              </div>
              <div className="createAccount grey">
                <button type="submit">Create account</button>
                <div className="grey">
                </div>
                {this.state.resp && (
                  <span className="errorMessage red">
                    {this.state.resp}
                  </span>
                )}
                <div className="grey">
                  <a href="/login">
                    Already have an account? Click here
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

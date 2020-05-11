/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { Form } from "react-bootstrap";

import "./loginANDregister.css";

const token = localStorage.getItem("Token");
let isLogined = token ? true : false;

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: localStorage.getItem("Remembered") || "",
      password: "",
      rememberMe: localStorage.getItem("Remembered") ? true : false,
    };
    //this.input = React.createRef();
  }

  componentWillMount() {
    if (isLogined) {
      this.props.history.push("/");
    }
  }

  onSubmit = (e) => {
    e.preventDefault();

    console.log(this.state);

    fetch("http://127.0.0.1:8000/auth/login/", {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.detail) {
          console.log(data.detail);
        } else {
          console.log(data);
          localStorage.setItem("Token", data.Token);
          if (this.state.rememberMe) {
            this.rememberUser();
          }
          this.props.history.push("/");
          window.location.reload(false);
        }
      });
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
    console.log(this.state);
  };

  handleTogle = (e) => {
    const { name, checked } = e.target;
    this.setState({
      [name]: checked,
    });
    this.state.rememberMe = !this.state.rememberMe;
    console.log(this.state.rememberMe);
    console.log(e.target.value);
    if (this.state.rememberMe == false) {
      this.forgetUser();
    }
  };

  rememberUser = () => {
    localStorage.setItem("Remembered", this.state.username);
  };

  getRememberedUser = () => {
    let username = localStorage.getItem("Remembered");
    if (username !== null) {
      // We have username!!
      return username;
    }
  };

  forgetUser = () => {
    localStorage.removeItem("Remembered");
  };

  render() {
    return (
      <div className="container px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
        <div className="authWrapper row box">
          <img
            className="authImg"
            src="https://images.pexels.com/photos/3530056/pexels-photo-3530056.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />
          <div className="form-authWrapper">
            <form onSubmit={this.onSubmit}>
              <h1-1>Log in</h1-1>
              <div className="email">
                <label htmlFor="email">Username</label>
                <input
                  placeholder="Username"
                  type="text"
                  name="username"
                  defaultValue={localStorage.getItem("Remembered") || ""}
                  noValidate
                  onChange={this.handleChange}
                />
              </div>
              <div className="password">
                <label htmlFor="password">Password</label>
                <input
                  placeholder="Password"
                  type="password"
                  name="password"
                  noValidate
                  onChange={this.handleChange}
                />
              </div>
              <div className="grey">
                <a href="/ResetPassword">Forgot password?</a>
              </div>
              <Form.Group controlId="formBasickCheckbox">
                <Form.Check
                  type="checkbox"
                  checked={this.state.rememberMe}
                  onChange={this.handleTogle}
                  label="Remember me"
                />
              </Form.Group>
              <div className="createAccount">
                <button type="submit">Log in</button>
                <div className="grey">
                  <a href="/register">Don't have an account? Click here</a>
                </div>
              </div>
              <div class="icon-container iconLink">
                <a
                  href="https://www.youtube.com/watch?v=ZVVWuPMWc5U"
                  class="fa fa-facebook fa-2x icon-3d iconLink"
                ></a>
                <a
                  href="https://www.youtube.com/watch?v=ZVVWuPMWc5U"
                  class="fa fa-twitter fa-2x icon-3d iconLink"
                ></a>
                <a
                  href="https://www.youtube.com/watch?v=ZVVWuPMWc5U"
                  class="fa fa-google fa-2x icon-3d iconLink"
                ></a>
                <a
                  href="https://www.youtube.com/watch?v=ZVVWuPMWc5U"
                  class="fa fa-github fa-2x icon-3d iconLink"
                ></a>
                <a
                  href="https://www.youtube.com/watch?v=ZVVWuPMWc5U"
                  class="fa fa-telegram fa-2x icon-3d iconLink"
                ></a>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

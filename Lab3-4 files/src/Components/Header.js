import React, { Component } from "react";
import { Navbar, Nav, Container, Form } from "react-bootstrap";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import "./header.css";

const token = localStorage.getItem('Token');
let isLogined = token ? true : false;
const url = "http://localhost:8000/media"

function LogedinUser(props){
  return(
    <div class="btn-group rounded-circle size red">
                <div className="logoNameMargin">
                  <h4 class="name white-text">
                    {" "}
                    {props.first_name} {props.last_name}
                  </h4>
                </div>
                
                <a
                  type="link"
                  class="btn dropdown-toggle "
                  data-toggle="dropdown"
                >
                  <figure class="fir-image-figure">
                    <a
                      class="fir-imageover"
                      rel="noopener"
                      target="_blank"
                      href="/userProfile"
                    >
                      <img
                        class="fir-author-image fir-clickcircle fir-circle"
                        src={props.img}
                      />
                      <div class="fir-imageover-color"></div>
                      <img
                        class="fir-imageover-image fir-clickcircle fir-circle"
                        src={props.img}
                      />
                    </a>
                  </figure>
                  <div>
              </div>
                </a>
                <div class="dropdown-menu">
                  <div>
                    <figure class="fir-image-figure ">
                      <a
                        class="fir-imageover"
                        rel="noopener"
                        target="_blank"
                        href="/userProfile"
                      >
                        <img
                          class="fir-author-image fir-clickcircle fir-margin"
                          src={props.img}
                        />
                        <div class="fir-imageover-color"></div>
                        <img
                          class="fir-imageover-image fir-clickcircle fir-margin"
                          src={props.img}
                        />
                      </a>

                      <figcaption>
                        <div class="fig-author-figure-title white-text ">
                          {props.first_name} {props.last_name}
                        </div>
                      </figcaption>
                    </figure>
                  </div>
                  <div class="dropdown-divider"></div>
                  <Link to="/myorders" class="dropdown-item colorLink">
                    <i class="fa fa-shopping-cart iconRed"aria-hidden="true"></i>
                    My orders
                  </Link>
                  <Link to="/myproducts" class="dropdown-item colorLink">
                    <i class="fa fa-money iconRed" aria-hidden="true"></i>
                    My products
                  </Link>
                  <a href="#" class="dropdown-item colorLink">
                    <i class="fa fa-comment iconRed" aria-hidden="true"></i>
                    Messages
                  </a>
                  <Link to="/settings" class="dropdown-item colorLink">
                    <i class="fa fa-cog iconRed" aria-hidden="true"></i>
                    Settings
                  </Link>
                  <div class="dropdown-divider"></div>
                  <Link to="/clientOrders" class="dropdown-item colorLink">
                    <i class="fa fa-user iconRed"aria-hidden="true"></i>
                    Client orders
                  </Link>
                  <div class="dropdown-divider"></div>
                  <a href="#" onClick={props.logOutClick} class="dropdown-item colorLink">
                    <i class="fa fa-sign-out-alt iconRed" aria-hidden="true"></i>
                    Log out
                  </a>
                </div>
              </div>
  )
}
export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: null,
      username: "",
      first_name: "",
      last_name: "",
      last_login: null,
      date_joined: null,
      fetched: false,
      image: null
    };
  }

  logOut = (e) => {
    e.preventDefault();
    fetch('http://localhost:8000/auth/logout/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`,
      }
    }).then(res => {
      localStorage.removeItem("Token");
      localStorage.removeItem("User");
      window.location.reload(false);
      return res.json();

    });

  }

  componentDidMount() {

    if (isLogined) {
      fetch('http://localhost:8000/users/me/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${token}`,
        }
      }).then(res => res.json()).then(data => {
        console.log(data);
        this.setState(data);
    localStorage.setItem('id', this.state.id);
        this.setState({ fetched: true });
        this.setState({image: data.image[data.image.length-1].image});
        localStorage.setItem("User", JSON.stringify(this.state));
        console.log(this.state);
      })
    }
  }
  render() {
    return (
      <>
        <Navbar
          className="navbar-custom sticky-top"
          collapseOnSelect
          expand="md"
          variant="dark"
        >
          <Container>
            <Navbar.Brand href="/">WanderLance</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
              <Link class = "nav-link" to="/"> Home </Link>
                <Link class = "nav-link" to="/test"> Test </Link>
                <Link class = "nav-link" to="/sellers"> Sellers </Link>
                <Link class = "nav-link" to="/contacts">
                  {" "}
                  Contacts{" "}
                </Link>
                <Link class = "nav-link" to="/login"> Login </Link>
              </Nav>
              {isLogined && this.state.fetched ? <LogedinUser 
              first_name={this.state.username} 
              last_name=""
              logOutClick={this.logOut}
              img = {url + this.state.image}/>:isLogined?<p></p>:                <div className="cA">
                  <button type="submit" onClick={event =>  window.location.href='/login'}>Click here to enter your account</button>
                </div>}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

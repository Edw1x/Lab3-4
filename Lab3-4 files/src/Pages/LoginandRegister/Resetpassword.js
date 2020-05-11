import React, { Component } from "react";
import { Container, Form} from "react-bootstrap";

export default class Resetpassword extends Component {
  constructor(props) {
    super(props)
    this.state = {
       email: ""
    };
  }
  
  onSubmit = async e => {
    e.preventDefault();

    console.log(this.state);

    await fetch('http://127.0.0.1:8000/auth/reset_password/', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })


  }

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
    console.log(this.state)
  }


  render() {
    return (
      <div>
        <section id="music" className="section back">
          <section id="video" className="section bg-grey mg-top">
            <h1-1>Reset your password</h1-1>
          </section>
          <Container style={{ width: "500px" }}>
          <Form onSubmit={this.onSubmit}>
            <Form.Group controlId="formBasickEmail">
              <Form.Label> Email address </Form.Label>
              <Form.Control type="email" name = "email" onChange={this.handleChange} placeholder="Enter email" />
            </Form.Group>
            <p className="white-text">
                 Enter the email so we can send you an email
                </p>
                <button type="submit">Reset</button>
          </Form>
          </Container>
        </section>
      </div>
    );
  }
}

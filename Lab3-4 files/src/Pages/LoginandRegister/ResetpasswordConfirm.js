import React, { Component } from "react";
import { Container, Form } from "react-bootstrap";

export default class ResetpasswordConfirm extends Component {  
  render() {
    return (
      <div>
        <section id="music" className="section back">
          <section id="video" className="section bg-grey mg-top">
            <h1-1>Reset your password</h1-1>
          </section>
          <Container style={{ width: "500px" }}>
            <Form>
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
              <div className="password">
                <label htmlFor="password">Enter again Password</label>
                <input
                  placeholder="Password"
                  type="password"
                  name="password"
                  noValidate
                  onChange={this.handleChange}
                />
              </div>
            </Form>
          </Container>
        </section>
      </div>
    );
  }
}

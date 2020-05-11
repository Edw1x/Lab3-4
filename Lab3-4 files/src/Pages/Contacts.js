import React, { Component } from "react";
import { Container, Form, Button } from "react-bootstrap";

export default class Contacts extends Component {
  render() {
    return (
      <Container style={{ width: "500px" }}>
        <h1 className="text-center"> Contact us </h1>
        <Form>
          <Form.Group controlId="formBasickEmail">
            <Form.Label> Email address </Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasickPassword">
            <Form.Label>Example</Form.Label>
            <Form.Control as="textarea" raws="13" />
          </Form.Group>

          <Form.Group controlId="formBasickCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="Submit">
            Submit
          </Button>
        </Form>
      </Container>
    );
  }
}

import React, { Component } from 'react';
import { Form, Button, Col, Container } from 'react-bootstrap';

class UserDetails extends Component {
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  }

  saveAndContinue = (e) => {
    e.preventDefault();

    // Perform validation here (e.g., check if fields are not empty)
    const { firstName, lastName, email } = this.props.inputValues;
    if (firstName.trim() === '' || lastName.trim() === '' || email.trim() === '') {
      alert('Please fill in all required fields.');
      return; // Don't proceed to the next step if fields are not filled
    }

    this.props.nextStep();
  }

  render() {
    return (
      <Container>
        <Form>
          <>
            <Form.Group as={Col} controlId="formFirstName">
              <Form.Label className="label">Nombre: </Form.Label>
              <Form.Control
                type="text"
                defaultValue={this.props.inputValues.firstName}
                name="firstName"
                required
                onChange={this.props.handleChange}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formLastName">
              <Form.Label className="label">Apellido:</Form.Label>
              <Form.Control
                type="text"
                defaultValue={this.props.inputValues.lastName}
                name="lastName"
                required
                onChange={this.props.handleChange}
              />
            </Form.Group>
          </>

          <Form.Group controlId="formEmail">
            <Form.Label className="label">Correo electrónico</Form.Label>
            <Form.Control
              type="email"
              defaultValue={this.props.inputValues.email}
              name="email"
              required
              onChange={this.props.handleChange}
            />
          </Form.Group>

          <Button variant="primary" onClick={this.saveAndContinue}>Siguiente</Button>
        </Form>
      </Container>
    );
  }
}

export default UserDetails;

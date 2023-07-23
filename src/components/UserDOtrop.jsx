import React, { Component } from 'react';
import { Form, Button, Col, Container } from 'react-bootstrap';

class AddressDetails extends Component {
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  }

  saveAndContinue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  }

  render() {
    return (
      <Container>
        <Form>
          <Form.Group controlId="formAddress">
            <Form.Label>Dirección</Form.Label>
            <Form.Control
              type="text"
              defaultValue={this.props.inputValues.address}
              name="address"
              required
              onChange={this.props.handleChange}
            />
          </Form.Group>

          <>
            <Form.Group as={Col} controlId="formCity">
              <Form.Label>Ciudad</Form.Label>
              <Form.Control
                type="text"
                defaultValue={this.props.inputValues.city}
                name="city"
                required
                onChange={this.props.handleChange}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formNeigborhood">
              <Form.Label>Barrio</Form.Label>
              <Form.Control
                type="text"
                defaultValue={this.props.inputValues.neigborhood}
                name="neigborhood"
                required
                onChange={this.props.handleChange}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formPhone">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control
                type="text"
                defaultValue={this.props.inputValues.phone}
                name="phone"
                required
                onChange={this.props.handleChange}
              />
            </Form.Group>
          </>

          <Button variant="secondary" onClick={this.back}>Atrás</Button>{' '}
          <Button variant="primary" onClick={this.saveAndContinue}>Siguiente</Button>
        </Form>
      </Container>
    );
  }
}

export default AddressDetails;

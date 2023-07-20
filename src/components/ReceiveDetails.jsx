import React, { Component } from 'react';
import { Form, Button, Col, Container } from 'react-bootstrap';

class ReceiveDetails extends Component {
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
          <Form.Group controlId="formDateReceive">
            <Form.Label> Fecha de recibido</Form.Label>
            <Form.Control
              type="text"
              defaultValue={this.props.inputValues.dateReceive}
              name="datedetails"
              required
              onChange={this.props.handleChange}
            />
          </Form.Group>

          <>
            <Form.Group as={Col} controlId="formPointReceive">
              <Form.Label>Punto de recepción</Form.Label>
              <Form.Control
                type="text"
                defaultValue={this.props.inputValues.pointReceive}
                name="pointreceive"
                required
                onChange={this.props.handleChange}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formAddressReceive">
              <Form.Label>Dirección</Form.Label>
              <Form.Control
                type="text"
                defaultValue={this.props.inputValues.addressReceive}
                name="addressreceive"
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

export default ReceiveDetails;
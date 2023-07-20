import React, { Component } from 'react';
import { Form, Button, Col, Container } from 'react-bootstrap';

class DeliverDetails extends Component {
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
          <Form.Group controlId="formPointDelivery">
            <Form.Label>Punto de entrega</Form.Label>
            <Form.Control
              type="text"
              defaultValue={this.props.inputValues.pointDelivery}
              name="pointdelivery"
              required
              onChange={this.props.handleChange}
            />
          </Form.Group>

          <>
            <Form.Group as={Col} controlId="formDeliveryAddress">
              <Form.Label>Dirección de entrega</Form.Label>
              <Form.Control
                type="text"
                defaultValue={this.props.inputValues.deliveryAddress}
                name="DeliveryAddress"
                required
                onChange={this.props.handleChange}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formObservations">
              <Form.Label>Observaciones</Form.Label>
              <Form.Control
                type="text"
                defaultValue={this.props.inputValues.observations}
                name="observaciones"
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

export default DeliverDetails;
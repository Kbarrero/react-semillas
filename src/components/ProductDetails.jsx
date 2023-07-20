import React, { Component } from 'react';
import { Form, Button, Col, Container } from 'react-bootstrap';

class ProductDetails extends Component {
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
          <Form.Group controlId="formTypeProduct">
            <Form.Label>Tipo de producto: </Form.Label>
            <Form.Control
              type="text"
              defaultValue={this.props.inputValues.typeProduct}
              name="typeProduct"
              required
              onChange={this.props.handleChange}
            />
          </Form.Group>

          <>
            <Form.Group as={Col} controlId="formProduct">
              <Form.Label>Producto</Form.Label>
              <Form.Control
                type="text"
                defaultValue={this.props.inputValues.product}
                name="product"
                required
                onChange={this.props.handleChange}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formService">
              <Form.Label>Servicio</Form.Label>
              <Form.Control
                type="text"
                defaultValue={this.props.inputValues.service}
                name="service"
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

export default ProductDetails;
import React, { Component } from 'react';
import { Form, Button, Col, Container } from 'react-bootstrap';

const ReceiveDetails  = (props) => {
 
  const back = (e) => {
    e.preventDefault();
    props.prevStep();
  }

  const saveAndContinue = (e) => {
    e.preventDefault();
    props.nextStep();
  }


    return (
      <Container>
        <Form>
          <Form.Group controlId="formDateReceive">
            <Form.Label> Fecha de recibido</Form.Label>
            <Form.Control
              type="text"
              defaultValue={props.inputValues.dateReceive}
              name="dateReceive"
              required
              onChange={props.handleChange}
            />
          </Form.Group>

          <>
            <Form.Group as={Col} controlId="formPointReceive">
              <Form.Label>Punto de recepción</Form.Label>
              <Form.Control
                type="text"
                defaultValue={props.inputValues.pointReceive}
                name="pointReceive"
                required
                onChange={props.handleChange}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formAddressReceive">
              <Form.Label>Dirección</Form.Label>
              <Form.Control
                type="text"
                defaultValue={props.inputValues.addressReceive}
                name="addressReceive"
                required
                onChange={props.handleChange}
              />
            </Form.Group>
          </>

          <Button variant="secondary" onClick={back}>Atrás</Button>{' '}
          <Button variant="primary" onClick={saveAndContinue}>Siguiente</Button>
        </Form>
      </Container>
    );
}

export default ReceiveDetails;
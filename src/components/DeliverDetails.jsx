import React, { Component } from 'react';
import { Form, Button, Col, Container } from 'react-bootstrap';

const DeliverDetails = (props) => {
  
const back = (e) => {
    e.preventDefault();
    props.prevStep();
  }

const saveAndContinue = (e) => {
    e.preventDefault();
    props.nextStep();
  }

    return (
      <main>
        <h3>Datos de entrega del producto al cliente</h3>
        <div className="card">
          <form onSubmit={saveAndContinue}>
            <fieldset>
              <label htmlFor="formPointDelivery" className="label">
                Punto de entrega:
              </label>
              <input
                type="text"
                id="formPointDelivery"
                defaultValue={props.inputValues.pointDelivery}
                name="pointDelivery"
                required
                onChange={props.handleChange}
              />
            </fieldset>
            <fieldset>
              <label htmlFor="formDeliveryAddress" className="label">
                Dirección de entrega:
              </label>
              <input
                type="text"
                id="formDeliveryAddress"
                defaultValue={props.inputValues.deliveryAddress}
                name="deliveryAddress"
                required
                onChange={props.handleChange}
              />
            </fieldset>
            <fieldset>
              <label htmlFor="formObservations" className="label">
                Observaciones:
              </label>
              <input
                type="text"
                id="formObservations"
                defaultValue={props.inputValues.observations}
                name="observations"
                required
                onChange={props.handleChange}
              />
            </fieldset>
            <div className="button-container">
              <button onClick={back}>Atrás</button>
              <button type="submit">Siguiente</button>
            </div>
          </form>
        </div>
      </main>
    );
}

export default DeliverDetails;
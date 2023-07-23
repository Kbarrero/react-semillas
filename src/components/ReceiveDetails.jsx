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
      <main>
      <h3>Punto de recepcion del producto en el Semillero</h3>
      <div className="card">
        <form onSubmit={saveAndContinue}>
          <fieldset>
            <label htmlFor="formDateReceive" className="label">
              Fecha de recibido:
            </label>
            <input
              type="text"
              id="formDateReceive"
              defaultValue={props.inputValues.dateReceive}
              name="dateReceive"
              required
              onChange={props.handleChange}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="formPointReceive" className="label">
              Punto de recepción:
            </label>
            <input
              type="text"
              id="formPointReceive"
              defaultValue={props.inputValues.pointReceive}
              name="pointReceive"
              required
              onChange={props.handleChange}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="formAddressReceive" className="label">
              Dirección:
            </label>
            <input
              type="text"
              id="formAddressReceive"
              defaultValue={props.inputValues.addressReceive}
              name="addressReceive"
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

export default ReceiveDetails;
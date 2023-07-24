import React from 'react';
import { Form, Button, Col, Container } from 'react-bootstrap';

const ProductDetails = (props) => {
 
  const back = (e) => {
    e.preventDefault();
    props.prevStep();
  };

  const saveAndContinue = (e) => {
    e.preventDefault();
    props.nextStep();
  };

  return (
    <main>
    <h3>Datos de Producto y Servicio</h3>
    <div className="card">
      <form onSubmit={saveAndContinue}>
        <fieldset>
          <label htmlFor="typeProduct" className="label">
            Tipo de producto:
          </label>
          <Field id="framework" name="framework" as="select">
                <option value="">Select your framework</option>
                <option value="react">React</option>
                <option value="vue">Vue</option>
                <option value="angular">Angular</option>
          <input
            type="text"
            id="typeProduct"
            defaultValue={props.inputValues.typeProduct}
            name="typeProduct"
            required
            onChange={props.handleChange}
            autoFocus
          />
        </fieldset>
        <fieldset>
          <label htmlFor="product" className="label">
            Producto:
          </label>
          <input
            type="text"
            id="product"
            defaultValue={props.inputValues.product}
            name="product"
            required
            onChange={props.handleChange}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="service" className="label">
            Servicio:
          </label>
          <input
            type="text"
            id="service"
            defaultValue={props.inputValues.service}
            name="service"
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
};

export default ProductDetails;
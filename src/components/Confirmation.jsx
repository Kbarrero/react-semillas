import React, { Component } from 'react';
import { Button, Container } from 'react-bootstrap';

const Confirmation = (props) => {
  
const back = (e) => {
    e.preventDefault();
    props.prevStep();
  }

const saveAndContinue = (e) => {
    e.preventDefault();
    props.nextStep();
  };

 
  const { inputValues: { firstName, lastName, email, address, city, 
        neighborhood, phone,typeProduct,product,service,dateReceive,pointReceive,addressReceive,pointDelivery,deliveryAddress,
        observations } } = props;

    return (
      <main>
        <h2>Confirmación de datos</h2>
        <div className="card">
          <h4>Verifique si la siguiente información es correcta.</h4>
          <form onSubmit={saveAndContinue}>  
            <div className="grid-container">       
              <fieldset >
                <label>Nombre:</label>
                <span>{firstName}</span>
              </fieldset>
              <fieldset>
                <label>Apellido:</label>
                <span>{lastName}</span>
              </fieldset>
              <fieldset>
                <label>Correo electrónico:</label>
                <span>{email}</span>
              </fieldset>
              <fieldset>
                <label>Dirección:</label>
                <span>{address}</span>
              </fieldset>
              <fieldset>
                <label>Ciudad:</label>
                <span>{city}</span>
              </fieldset>
              <fieldset>
                <label>Barrio:</label>
                <span>{neighborhood}</span>
              </fieldset>
              <fieldset>
                <label>Teléfono:</label>
                <span>{phone}</span>
              </fieldset>
              <fieldset>
                <label>Tipo de producto:</label>
                <span>{typeProduct}</span>
              </fieldset>
              <fieldset>
                <label>Producto:</label>
                <span>{product}</span>
              </fieldset>
              <fieldset>
                <label>Servicio:</label>
                <span>{service}</span>
              </fieldset>
              <fieldset>
                <label>Fecha de servicio:</label>
                <span>{dateReceive}</span>
              </fieldset>
              <fieldset>
                <label>Punto de recibido:</label>
                <span>{pointReceive}</span>
              </fieldset>
              <fieldset>
                <label>Dirección de recibido:</label>
                <span>{addressReceive}</span>
              </fieldset>
              <fieldset>
                <label>Punto de entrega:</label>
                <span>{pointDelivery}</span>
              </fieldset>
              <fieldset>
                <label>Dirección de entrega:</label>
                <span>{deliveryAddress}</span>
              </fieldset>
              <fieldset>
                <label>Observaciones:</label>
                <span>{observations}</span>
              </fieldset> 
            </div>          
            <div className="button-container">
              <button onClick={back}>Atrás</button>
              <button type="submit">Enviar</button>
            </div>
        </form>
        </div>
      </main>
    );
}

export default Confirmation;

import React, { Component } from 'react';
import { Button, Container } from 'react-bootstrap';

class Confirmation extends Component {
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  }

  saveAndContinue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { inputValues: { firstName, lastName, email, address, city, 
        neigborhood, phone,typeProduct,product,service,dateReceive,pointReceive,addressReceive,pointDelivery,deliveryAddress,
        observations } } = this.props;

    return (
      <Container>
        <h1>Confirmación de datos</h1>
        <p> Verifique si la siguiente información es correcta.</p>
        <p>Nombre: {firstName}</p>
        <p>Apellido: {lastName}</p>
        <p>Correo electrónico: {email}</p>
        <p>Dirección: {address}</p>
        <p>Ciudad: {city}</p>
        <p>Barrio: {neigborhood}</p>
        <p>Teléfono: {phone}</p>
        <p>Tipo de producto: {typeProduct}</p>
        <p>Producto: {product} </p>
        <p>Servicio: {service} </p>
        <p>Fecha de servicio: {dateReceive} </p>
        <p>Punto de recibido: {pointReceive} </p>
        <p>Dirección de recibido: {addressReceive} </p>
        <p>Punto de entrega: {pointDelivery} </p>
        <p>Dirección de entrega: {deliveryAddress} </p>
        <p>Observaciones: {observations} </p>

        <Button variant="secondary" onClick={this.back}>Atrás</Button>{' '}
        <Button variant="primary">Enviar</Button>
      </Container>
    );
  }
}

export default Confirmation;

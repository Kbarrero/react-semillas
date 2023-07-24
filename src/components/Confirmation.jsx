import React from "react";
import { Button, Container } from "react-bootstrap";
import { useFormik } from "formik";

const Confirmation = (props) => {
  const back = (e) => {
    e.preventDefault();
    props.prevStep();
  };

  const { inputValues } = props;

  // Objeto con las configuraciones de useFormik
  const formik = useFormik({
    initialValues: inputValues,
    onSubmit: async (values, { setSubmitting }) => {
        let url = "https://formspree.io/f/xwkdpqvj";
        let formData = new FormData();
        for (let key in values) {
          formData.append(key, values[key]);
        }

        const response = await fetch(url, {
          method: "POST",
          body: formData,
          headers: {
            'Accept': 'application/json'
        }
        }).then(response => {
          setSubmitting(false);
          alert("Gracias por contactarnos");
      })  

    },
  });

  return (
    <main>
      <h2>Confirmación de datos</h2>
      <div className="card">
        <h4>Verifique si la siguiente información es correcta.</h4>
        <form onSubmit={formik.handleSubmit}>
          <div className="grid-container">
            <fieldset>
              <label>Nombre:</label>
              <span>{formik.values.firstName}</span>
            </fieldset>
            <fieldset>
              <label>Apellido:</label>
              <span>{formik.values.lastName}</span>
            </fieldset>
            <fieldset>
              <label>Correo electrónico:</label>
              <span>{formik.values.email}</span>
            </fieldset>
            <fieldset>
              <label>Dirección:</label>
              <span>{formik.values.address}</span>
            </fieldset>
            <fieldset>
              <label>Ciudad:</label>
              <span>{formik.values.city}</span>
            </fieldset>
            <fieldset>
              <label>Barrio:</label>
              <span>{formik.values.neighborhood}</span>
            </fieldset>
            <fieldset>
              <label>Teléfono:</label>
              <span>{formik.values.phone}</span>
            </fieldset>
            <fieldset>
              <label>Tipo de producto:</label>
              <span>{formik.values.typeProduct}</span>
            </fieldset>
            <fieldset>
              <label>Producto:</label>
              <span>{formik.values.product}</span>
            </fieldset>
            <fieldset>
              <label>Servicio:</label>
              <span>{formik.values.service}</span>
            </fieldset>
            <fieldset>
              <label>Fecha de servicio:</label>
              <span>{formik.values.dateReceive}</span>
            </fieldset>
            <fieldset>
              <label>Punto de recibido:</label>
              <span>{formik.values.pointReceive}</span>
            </fieldset>
            <fieldset>
              <label>Dirección de recibido:</label>
              <span>{formik.values.addressReceive}</span>
            </fieldset>
            <fieldset>
              <label>Punto de entrega:</label>
              <span>{formik.values.pointDelivery}</span>
            </fieldset>
            <fieldset>
              <label>Dirección de entrega:</label>
              <span>{formik.values.deliveryAddress}</span>
            </fieldset>
            <fieldset>
              <label>Observaciones:</label>
              <span>{formik.values.observations}</span>
            </fieldset>
          </div>
          <div className="button-container">
            <button onClick={back}>Atrás</button>
            <button type="submit" disabled={formik.isSubmitting}>
              Enviar
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Confirmation;

import { Formik, Form, Field, ErrorMessage } from "formik";
import { UserDetailsSchema } from "../schemas/UserDetailsShema";

// Inicialización de valores del formulario
const initialValues = {
   
};

const UserDetails = (props) => {
 

  const handlerSubmit = () => {
    props.nextStep();
    console.log("enviando info al servidor...");
  };

  return (
    <main>
      <h3>Datos del cliente</h3>
      <div className="card">
        <Formik
          initialValues={initialValues}
          //validationSchema={UserDetailsSchema}
          onSubmit={handlerSubmit}
        >
          <Form >
            <fieldset>
              <label htmlFor="firstName" className="label">
                Nombre:
              </label>
              <Field 
                type="text"
                id="firstName"
                defaultValue={props.inputValues.firstName}
                name="firstName"
                autoFocus
                required
                onChange={props.handleChange}
              />
              <ErrorMessage
                name="firstName"
                component="p"
                className="error-message"
              />
            </fieldset>
            <fieldset>
              <label htmlFor="lastName" className="label">
                Apellido:
              </label>
              <Field 
                type="text"
                id="lastName"
                defaultValue={props.inputValues.lastName}
                name="lastName"
                required
                onChange={props.handleChange}
              />
              <ErrorMessage
                name="lastName"
                component="p"
                className="error-message"
              />
            </fieldset>
            <fieldset>
              <label htmlFor="email" className="label">
                Correo electrónico:
              </label>
              <Field 
                type="email"
                id="email"
                defaultValue={props.inputValues.email}
                name="email"
                required
                onChange={props.handleChange}
              />
              <ErrorMessage
                name="email"
                component="p"
                className="error-message"
              />
            </fieldset>
            <button type="submit">Siguiente</button>
          </Form>
        </Formik>
      </div>
    </main>
  );
};

export default UserDetails;

import { useFormik } from 'formik';
import { UserDetailsSchema } from '../schemas/UserDetailsShema';


const AddressDetails = (props) => {
  const back = (e) => {
    e.preventDefault();
    props.prevStep();
  };

  const  saveAndContinue = async (e) => {
    props.nextStep();
  };

  const {errors, handleSubmit, handleBlur, isSubmitting} = useFormik({
    initialValues: {
      address: props.inputValues.address,
      city: props.inputValues.city,
      neighborhood: props.inputValues.neighborhood,
      phone: props.inputValues.phone,
    },
    onSubmit: (values) => {
        saveAndContinue();
        console.log(values);
    },
});


  return (
    <main>
    <h3>Datos de Ubicación</h3>
    <div className="card">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="address" className="label">
            Dirección:
          </label>
          <input
            type="text"
            id="address"
            defaultValue={props.inputValues.address}
            name="address"
            required
            onChange={props.handleChange}
            onBlur={handleBlur}
            autoFocus
            className={errors.address ? "error-forgot-input" : ""}
          />
          {errors.address && <p className="error-message">{errors.address}</p>}
        </fieldset>
        <fieldset>
          <label htmlFor="city" className="label">
            Ciudad:
          </label>
          <input
            type="text"
            id="city"
            defaultValue={props.inputValues.city}
            name="city"
            required
            onChange={props.handleChange}
           
          />
        </fieldset>
        <fieldset>
          <label htmlFor="neighborhood" className="label">
            Barrio:
          </label>
          <input
            type="text"
            id="neighborhood"
            defaultValue={props.inputValues.neighborhood}
            name="neighborhood"
            required
            onChange={props.handleChange}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="phone" className="label">
            Teléfono:
          </label>
          <input
            type="text"
            id="phone"
            defaultValue={props.inputValues.phone}
            name="phone"
            required
            onChange={props.handleChange}
          />
        </fieldset>
        <div className="button-container">
          <button onClick={back}>Atrás</button>
          {/* <button onClick={saveAndContinue}>Siguiente</button> */}
          <button type='submit'>Siguiente</button>
        </div>
      </form>
    </div>
  </main>
  );
};

export default AddressDetails;

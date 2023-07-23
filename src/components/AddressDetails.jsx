import React from 'react';


const AddressDetails = (props) => {
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
    <h3>Dirección</h3>
    <div className="card">
      <form>
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
          />
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
        <button onClick={back}>Atrás</button>
        <button onClick={saveAndContinue}>Siguiente</button>
      </form>
    </div>
  </main>
  );
};

export default AddressDetails;

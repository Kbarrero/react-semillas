
const UserDetails = (props) => {
  
  const back = (e) => {
    e.preventDefault();
    props.prevStep();
  };

  const saveAndContinue = (e) => {
    e.preventDefault();

    // Perform validation here (e.g., check if fields are not empty)
    const { firstName, lastName, email } = props.inputValues;
    if (
      firstName.trim() === "" ||
      lastName.trim() === "" ||
      email.trim() === ""
    ) {
      alert("Please fill in all required fields.");
      return; // Don't proceed to the next step if fields are not filled
    }

    props.nextStep();
  };

  const handlerSubmit = (e) => {
    props.nextStep();
    //saveAndContinue();
    console.log("enviando info al servidor...");
    
  };

  return (
    <main>
      <h3>Datos de cliente</h3>
      <div className="card">
        <form onSubmit={handlerSubmit} autoComplete="off">
          <fieldset>
            <label htmlFor="firstName" className="label">
              Nombre:
            </label>
            <input
              type="text"
              id="firstName"
              defaultValue={props.inputValues.firstName}
              name="firstName"
              autoFocus
              required
              onChange={props.handleChange}
            />
            <p className="error">Valid name required</p>
          </fieldset>
          <fieldset>
            <label htmlFor="lastName" className="label">
              Apellido:
            </label>
            <input
              type="text"
              id="lastName"
              defaultValue={props.inputValues.lastName}
              name="lastName"
              required
              onChange={props.handleChange}
            />
            <p className="error">Valid lastName required</p>
          </fieldset>
          <fieldset>
            <label htmlFor="email" className="label">
              Correo electrónico:
            </label>
            <input
              type="email"
              id="email"
              defaultValue={props.inputValues.email}
              name="email"
              required
              onChange={props.handleChange}
            />
            <p className="error">Valid email required</p>
          </fieldset>

          {/* <Button variant="primary" onClick={saveAndContinue}>
            Siguiente
          </Button> */}
          <button type="submit">Siguiente</button>

        </form>
      </div>
    </main>
  );
};

export default UserDetails;

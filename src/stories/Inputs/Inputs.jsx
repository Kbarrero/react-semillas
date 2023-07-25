import PropTypes from "prop-types";
import "./Inputs.css";

export const Inputs = ({ label, inputType, onClick }) => {
  const tipo = inputType === "normal" ? "number" : "password";
  return (
    <div className={`input-container ${inputType}`}>
      <label>{label}</label>
      <input>
        type={tipo}
        className={`inpt ${inputType}`}
        onClick={onClick}
        </input>
    </div>
  );
};

Inputs.propTypes = {
  label: PropTypes.string,
  inputType: PropTypes.oneOf(["entrada", "password", "number"]),
  onClick: PropTypes.func,
};

Inputs.defaultProps = {
  label: "Input",
  inputType: "entrada",
  onClick: undefined,
};

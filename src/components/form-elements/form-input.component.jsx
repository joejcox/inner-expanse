import React from "react";
import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className="form-field">
      <input
        className={`${otherProps.value.length ? "not-empty" : ""} input`}
        type={otherProps.type}
        name={otherProps.name}
        placeholder={otherProps.placeholder ? otherProps.placeholder : ""}
        value={otherProps.value}
        onChange={handleChange}
        required
        autoComplete="on"
      />
      {label ? (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
          htmlFor={otherProps.name}>
          {label}:
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;

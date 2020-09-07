import React from "react";
import "./form-button.styles.scss";

const FormButton = ({ children, classes, ...otherProps }) => {
  return (
    <button
      className={`${classes ? classes : ""} button form-submit-button`}
      {...otherProps}>
      {children}
    </button>
  );
};

export default FormButton;

import React from "react";
import "./form-button.styles.scss";

const FormButton = ({ children, classes, inverted, ...otherProps }) => {
  return (
    <button
      className={`${classes ? classes : ""} ${
        inverted ? "inverted" : ""
      } button form-submit-button`}
      {...otherProps}>
      {children}
    </button>
  );
};

export default FormButton;

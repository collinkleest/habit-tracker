import React from "react";
import PropTypes from "prop-types";

export const InputField = (props) => {
  return (
    <div className="form-group">
      <label htmlFor={props.id}>{props.labelName}</label>
      <input
        type="text"
        className="form-control"
        id={props.id}
        onChange={props.func}
      />
    </div>
  );
};

InputField.propTypes = {
  id: PropTypes.string.isRequired,
  labelName: PropTypes.string.isRequired,
  func: PropTypes.func,
};

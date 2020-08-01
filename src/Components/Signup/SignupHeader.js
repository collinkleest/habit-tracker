import React from "react";
import PropTypes from "prop-types";

export const SignupHeader = (props) => {
  return (
    <div>
      <h3 className="display-3 text-center text-black">{props.title}</h3>
      <p className="lead text-center text-black">{props.desc}</p>
    </div>
  );
};

SignupHeader.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string,
};

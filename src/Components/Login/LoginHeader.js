import React from "react";
import PropTypes from "prop-types";

export const LoginHeader = (props) => {
  return (
    <div className="container text-center">
      <h3 className="display-3">{props.title}</h3>
      <p className="lead"> {props.desc} </p>
    </div>
  );
};

LoginHeader.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string,
};

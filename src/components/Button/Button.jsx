import React from 'react';
import PropTypes from 'prop-types';
import FormButton from './Button.styled';

const Button = ({ type, title = '', onClick = () => {}, children = null }) => {
  return (
    <FormButton type={type} onClick={onClick}>
      {title}
      {children}
    </FormButton>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func.isRequired,
};
export default Button;
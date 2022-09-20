import styled from 'styled-components';
import theme from '../../baseStyles/theme';

const {
  buttonPrimaryBg,
  buttonSecondaryBg,
  buttonPrimaryText,
  buttonSecondaryText,
  buttonInsetShadow,
} = theme;

const FormButton = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 5px 15px;
  border: none;
  border-radius: 4px;
  background-color: ${buttonPrimaryBg};
  color: ${buttonPrimaryText};
  &:hover,
  &:focus {
    background-color: ${buttonSecondaryBg};
    color: ${buttonSecondaryText};
    outline-color: ${buttonSecondaryText};
  }
  &:active {
    box-shadow: ${buttonInsetShadow};
  }
`;

export default FormButton;
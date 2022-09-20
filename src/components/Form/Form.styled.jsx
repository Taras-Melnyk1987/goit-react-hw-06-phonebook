import styled from 'styled-components';
import theme from '../../baseStyles/theme';

const { inputColor, inputValidColor, inputInvalidColor, inputPaddings } = theme;

const AppForm = styled.form``;

const FormField = styled.div`
  position: relative;
  margin-right: 5px;
  margin-bottom: 30px;
`;

const Input = styled.input`
  width: 90%;
  padding: ${inputPaddings};
  &:valid {
    border: 1px solid ${inputValidColor};
    outline-color: ${inputValidColor};
  }
  &:invalid {
    border: 1px solid ${inputInvalidColor};
    outline-color: ${inputInvalidColor};
  }
  &:not(:hover),
  &:not(:focus) {
    border: 1px solid ${inputColor};
  }
`;

const Label = styled.label`
  position: absolute;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
  ${Input}:focus + &&,
  ${Input}:hover + &&,
  ${Input}:not(:placeholder-shown) + && {
    transform: translateY(-35px);
    left: 0;
    font-size: 12px;
  }
  ${Input}:valid + && {
    color: ${inputValidColor};
  }
  ${Input}:invalid + && {
    color: ${inputInvalidColor};
  }
  ${Input}:placeholder-shown + &&,
  ${Input}:not(:focus) + && {
    color: ${inputColor};
  }
  ${Input}:placeholder-shown:focus + && {
    color: ${inputInvalidColor};
  }
`;

export { Input, FormField, AppForm, Label };
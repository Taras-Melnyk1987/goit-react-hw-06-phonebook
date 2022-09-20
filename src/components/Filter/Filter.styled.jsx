import styled from 'styled-components';
import theme from '../../baseStyles/theme';

const { buttonSecondaryText, inputPaddings } = theme;

const FormFilter = styled.div`
  margin-bottom: 15px;
`;

const FormLabel = styled.label``;

const InputWrapper = styled.label`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const Input = styled.input`
  margin-right: 5px;
  padding: ${inputPaddings};
`;

const FilterResetBtn = styled.button`
  display: inline-flex;
  align-items: center;
  border: none;
  background-color: transparent;
  color: ${buttonSecondaryText};
`;

export { FormFilter, FormLabel, InputWrapper, Input, FilterResetBtn };
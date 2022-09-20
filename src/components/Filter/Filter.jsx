import React from 'react';
import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa';
import {
  FormFilter,
  FormLabel,
  InputWrapper,
  Input,
  FilterResetBtn,
} from './Filter.styled';

const Filter = ({ value, onChange, onClick }) => {
  return (
    <FormFilter>
      <FormLabel>
        Find contact by name:
        <InputWrapper>
          <Input type="text" name="filter" value={value} onChange={onChange} />
          <FilterResetBtn type="button" onClick={onClick}>
            {value && <FaTimes />}
          </FilterResetBtn>
        </InputWrapper>
      </FormLabel>
    </FormFilter>
  );
};

Filter.propType = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Filter;
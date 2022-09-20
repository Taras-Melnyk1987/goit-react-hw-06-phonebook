import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import { Input, FormField, AppForm, Label } from './Form.styled';
import { nanoid } from 'nanoid';

export default class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = nanoid();
  numberInputId = nanoid();

  inputValue = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.getSubmitData(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <AppForm onSubmit={this.handleSubmit}>
        <FormField>
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder=" "
            value={this.state.name}
            onChange={this.inputValue}
            id={this.nameInputId}
          />
          <Label htmlFor={this.nameInputId}>Enter the name</Label>
        </FormField>
        <FormField>
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder=" "
            value={this.state.number}
            onChange={this.inputValue}
            id={this.numberInputId}
          />
          <Label htmlFor={this.numberInputId}>Enter the number</Label>
        </FormField>
        <Button type={'submit'} title={'Add contact'} />
      </AppForm>
    );
  }
}

Form.propType = {
  getSubmitData: PropTypes.string.isRequired,
};
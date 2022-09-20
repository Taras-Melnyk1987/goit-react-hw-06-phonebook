import React, { Component } from 'react';

import Form from './Form/Form';
import Contacts from './Contacts/Contacts';
import Section from './Section/Section';
import Filter from './Filter/Filter';
import styled from 'styled-components';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';

const PhonebookApp = styled.div`
  margin: 25px auto;
  min-width: 400px;
  max-width: 500px;
  padding: 15px;
  border-radius: 10px;
  background-color: #fff;
`;

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({contacts: parsedContacts});
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  handleFormContact = ({ name, number }) => {
    const contactToAdd = this.checkName(name);
    const editedNumber = this.numberFormatting(number);

    if (contactToAdd) {
      Notify.warning(`${name} is already in contacts`);
      return;
    }

    const contact = {
      id: nanoid(),
      name,
      number: editedNumber,
    };

    this.setState(({ contacts }) => ({ contacts: [contact, ...contacts] }));
    Notify.success(`Contact ${name} was added!`);
  };

  handleFilterReset = () => {
    this.clearFilter();
  };

  numberFormatting = number => {
    console.log(number);
    const array = [...number];
    for (let i = 3; i < array.length - 1; i += 3) {
      array.splice(i, 0, '-');
    }
    console.log();
    return array.join('');
  };

  checkName = name => {
    const { contacts } = this.state;
    const normalizeName = name.toLowerCase();
    const nameToAdd = contacts.find(
      contact => contact.name.toLowerCase() === normalizeName,
    );

    return nameToAdd;
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  deleteContact = index => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== index),
    }));
  };

  clearFilter = () => {
    this.setState({
      filter: '',
    });
  };

  render() {
    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLocaleLowerCase();
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );

    return (
      <PhonebookApp>
        <Section title={'Phonebook'}>
          <Form getSubmitData={this.handleFormContact} />
        </Section>
        <Section title={'Contacts'}>
          <Filter
            value={filter}
            onChange={this.changeFilter}
            onClick={this.handleFilterReset}
          />
          <Contacts
            list={filteredContacts}
            onDeleteContact={this.deleteContact}
          />
        </Section>
      </PhonebookApp>
    );
  }
}
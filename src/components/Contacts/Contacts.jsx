import React from 'react';
import PropTypes from 'prop-types';
import { FaTrashAlt } from 'react-icons/fa';
import {
  ContactsList,
  ListItem,
  SpanName,
  SpanNumber,
} from './Contacts.styled';
import Button from '../Button/Button';

export default function Contacts({ list, onDeleteContact }) {
  return (
    <ContactsList>
      {list.map(({ id, name, number }) => {
        return (
          <ListItem key={id}>
            <SpanName>{name}:</SpanName>
            <SpanNumber>{number}</SpanNumber>
            <Button type={'button'} onClick={() => onDeleteContact(id)}>
              <FaTrashAlt />
            </Button>
          </ListItem>
        );
      })}
    </ContactsList>
  );
}

Contacts.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
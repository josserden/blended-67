import React from 'react';
import PropTypes from 'prop-types';

import { Button } from './Button';
import { Title } from './Title';

export const Contact = ({ id, name, number, onDelete }) => {
  return (
    <li id={id} className="grid gap-5 rounded-md border bg-white p-3 shadow-md">
      <Title>{name}</Title>
      <a
        className="text-sm font-bold text-indigo-700 transition-all hover:text-indigo-500"
        href={`tel:+${number}`}
      >
        {number}
      </a>

      <Button type="button" onClick={() => onDelete(id)}>
        Delete
      </Button>
    </li>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

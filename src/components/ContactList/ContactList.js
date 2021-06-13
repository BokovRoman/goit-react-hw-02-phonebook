import React from 'react';
import PropTypes from "prop-types";


const ContactList = ({contacts, onDeleteContact}) => {
    return (
        <ul>
            {contacts.map(({id,name,number})=> (
                    <li key={id}>
                    <p>{name}: {number}</p>
                    <button className="button" type="button"
                    onClick={() => onDeleteContact(id)}>Delete</button>
                    </li>
            ))}
        </ul>
    );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
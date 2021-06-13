import React from 'react';
import PropTypes from "prop-types";
import styles from './ContactList.module.css';


const ContactList = ({contacts, onDeleteContact}) => {
    return (
        <ul className={styles.list}>
            {contacts.map(({id,name,number})=> (
                    <li key={id} className={styles.item}>
                    <p>{name}: {number}</p>
                    <button className={styles.button} type="button"
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
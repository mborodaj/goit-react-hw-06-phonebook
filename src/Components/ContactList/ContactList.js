import React from 'react';
import styles from './ContactList.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as phoneBookActions from '../../Redux/PhoneBook/PhoneBook-action';

const ContactList = ({ contacts, removeContact, filter }) => {
  return (
    <>
      <ul className={styles.contactList}>
        {contacts
          .filter(contactItem =>
            contactItem.name.toLowerCase().includes(filter.toLowerCase()),
          )
          .map(({ id, name, number }) => (
            <li key={id} className={styles.contactListItem}>
              <p className={styles.contactData}>
                {name}: {number}
              </p>
              <button
                onClick={() => removeContact(id)}
                className={styles.removeButton}
              >
                X
              </button>
            </li>
          ))}
      </ul>
    </>
  );
};

const mapStateToProps = state => ({
  contacts: state.contacts.items,
  filter: state.contacts.filter,
});

const mapDispatchToProps = {
  removeContact: phoneBookActions.removeContact,
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ),
  removeContact: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

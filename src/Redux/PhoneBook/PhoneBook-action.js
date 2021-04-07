import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

// Toolkit
const removeContact = createAction('contact/remove');
const filterContacts = createAction('contact/filter');
const addContact = createAction('contact/add', (name, number) => ({
  payload: { id: shortid(), name, number },
}));
const showAllContacts = createAction('contact/show');

// no Toolkit

// const addContact = (name, number) => {
//   return { type: types.ADD, payload: { id: uuidv4(), name, number } };
// };
// const removeContact = id => {
//   return { type: types.DELETE, payload: id };
// };
// const filterContacts = text => {
//   return { type: types.FILTER, payload: text };
// };

export { addContact, removeContact, filterContacts, showAllContacts };

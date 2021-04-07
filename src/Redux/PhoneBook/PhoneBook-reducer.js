import * as actions from './PhoneBook-action';
import { createReducer } from '@reduxjs/toolkit';

//===============================================================
//Redux Toolkit

const itemsReducers = createReducer([], {
  [actions.addContact]: (state, { payload }) => {
    console.log(state);
    return [...state, payload];
  },
  [actions.removeContact]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
  [actions.showAllContacts]: (state, { payload }) => {
    console.log(state);
    return [...payload];
  },
});

const filterReducer = createReducer('', {
  [actions.filterContacts]: (_, { payload }) => payload,
});

//=================================================================
//without Redux Toolkit

// const innitialItems = [];

// const itemsReducers = (state = innitialItems, { type, payload }) => {
//   switch (type) {
//     case types.ADD:
//       return [...state, payload];
//     case types.DELETE:
//       return state.filter(contact => contact.id !== payload);
//     default:
//       return state;
//   }
// };
// const filterReducer = (state = '', { type, payload }) => {
//   switch (type) {
//     case types.FILTER:
//       return payload;
//     default:
//       return state;
//   }
// };

const reducers = { itemsReducers, filterReducer };

export default reducers;

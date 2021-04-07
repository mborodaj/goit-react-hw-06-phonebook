import React, { Component } from 'react';
import styles from './Filter.module.css';
import PropTypes from 'prop-types';
import * as contactsAction from '../../Redux/PhoneBook/PhoneBook-action';
import { connect } from 'react-redux';

class Filter extends Component {
  filterHandler = event => {
    const { value } = event.currentTarget;
    const { filterContacts } = this.props;
    filterContacts(value);
  };

  render() {
    const { filterValue } = this.props;
    return (
      <div className={styles.filterContainer}>
        <label className={styles.formLabel}>
          Contact search
          <input
            type="text"
            name="filter"
            value={filterValue}
            onChange={this.filterHandler}
            className={styles.inputForm}
          ></input>
        </label>
      </div>
    );
  }
}

const mapStateToProps = state => ({ filterValue: state.contacts.filter });

const mapDispatchToProps = {
  filterContacts: contactsAction.filterContacts,
};

Filter.propTypes = {
  filterHandler: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

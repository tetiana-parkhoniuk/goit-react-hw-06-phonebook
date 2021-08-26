import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import toast, { Toaster } from 'react-hot-toast';
import styles from 'components/ContactForm/ContactForm.module.css';
import { connect } from 'react-redux';
import contactsActions from 'redux/contacts/contacts-actions';

function ContactForm({contacts, onAdd}) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = uuidv4();
  const numberInputId = uuidv4();

  const handleNameChange = event => {
    const { value } = event.currentTarget;
    setName(value);
  }

  const handleNumberChange = event => {
    const { value } = event.currentTarget;
    setNumber(value);
  }
  
  const handleSubmit = event => {
    event.preventDefault();
    
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase(),
      )) {
      toast.error(`${name} is already in contacts.`);
    }
    else if (name.trim() === '' || number.trim() === '') {
      toast.error('Please enter at least some data');
    }
    else {
      onAdd(name, number);
    }
    
    resetForm();
  };
  
  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <Toaster position="top-right" toastOptions={{ duration: 2000 }} />
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.formLabel} htmlFor={nameInputId}>
          Name
        </label>
        <input
          type="text"
          name="name"
          id={nameInputId}
          value={name}
          className={styles.formInput}
          onChange={handleNameChange}
        />

        <label className={styles.formLabel} htmlFor={nameInputId}>
          Number
        </label>
        <input
          type="text"
          name="number"
          id={numberInputId}
          value={number}
          className={styles.formInput}
          onChange={handleNumberChange}
        />

        <button type="submit" className={styles.submitBtn}>
          Add contact
        </button>
      </form>
    </>
  );
}
const mapStateToProps = state => {
  return {
    contacts: state.contacts.items,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAdd: (name, number) => dispatch(contactsActions.addContact(name, number)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);


ContactForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};


////==== Original Code ====////

// export default class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   nameInputId = uuidv4();
//   numberInputId = uuidv4();

//   handleInputChange = event => {
//     const { name, value } = event.currentTarget;
//     this.setState({
//       [name]: value,
//     });
//   };

//   handleSubmit = event => {
//     event.preventDefault();

//     this.props.onSubmit(this.state);

//     this.resetForm();
//   };

//   resetForm = () => {
//     this.setState({
//       name: '',
//       number: '',
//     });
//   };

//   render() {
//     return (
//       <form className={styles.form} onSubmit={this.handleSubmit}>
//         <label className={styles.formLabel} htmlFor={this.nameInputId}>
//           Name
//         </label>
//         <input
//           type="text"
//           name="name"
//           id={this.nameInputId}
//           value={this.state.name}
//           className={styles.formInput}
//           onChange={this.handleInputChange}
//         />

//         <label className={styles.formLabel} htmlFor={this.nameInputId}>
//           Number
//         </label>
//         <input
//           type="text"
//           name="number"
//           id={this.numberInputId}
//           value={this.state.number}
//           className={styles.formInput}
//           onChange={this.handleInputChange}
//         />

//         <button type="submit" className={styles.submitBtn}>
//           Add contact
//         </button>
//       </form>
//     );
//   }
// }



import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import styles from 'components/Filter/Filter.module.css';
import { connect } from 'react-redux';
import contactsActions from 'redux/contacts/contacts-actions';


function Filter({ id, value, onChange }) {
  return (
    <div className={styles.filterContainer}>
      <label className={styles.label} htmlFor={id}>
        Find contacts by name
      </label>
      <input
        type="text"
        id={id}
        value={value}
        className={styles.input}
        onChange={onChange}
      />
    </div>
  );
}

const filterInputId = uuidv4();

const mapStateToProps = (state) => ({
  value: state.contacts.filter,
  id: filterInputId,
})

const mapDispatchToProps = dispatch => ({
  onChange: (event) => dispatch(contactsActions.changeFilter(event.target.value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter);


Filter.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

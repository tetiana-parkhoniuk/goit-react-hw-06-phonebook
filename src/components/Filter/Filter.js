import { v4 as uuidv4 } from 'uuid';
import styles from 'components/Filter/Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import contactsActions from 'redux/contacts/contacts-actions';
import { getFilter } from '../../redux/contacts/contacts-selectors';


export default function Filter() {
  const id = uuidv4();
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChange = (event) => dispatch(contactsActions.changeFilter(event.target.value));

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
};
import { useSelector, useDispatch } from 'react-redux';
import ContactsListItem from 'components/ContactsListItem/';
import styles from 'components/ContactsList/ContactsList.module.css';
import contactsActions from 'redux/contacts/contacts-actions';
import { getFilteredContacts } from 'redux/contacts/contacts-selectors';

export default function ContactsList() {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  const onDeleteContact = (id) => dispatch(contactsActions.deleteContact(id))

  return (
    <ul className={styles.contactList}>
      {contacts.map(contact => (
        <ContactsListItem
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ul>
  );
};
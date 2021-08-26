import { v4 as uuidv4 } from 'uuid';
import contactsTypes from './contacts-types';

const addContact = (name, number) => ({
    type: contactsTypes.ADD,
    payload: {
        id: uuidv4(),
        name,
        number,
    }
});

const deleteContact = (contactId) => ({
    type: contactsTypes.DELETE,
    payload: contactId,
});

const changeFilter = (value) => ({
    type: contactsTypes.CHANGE_FILTER,
    payload: value,
});

export default { addContact, deleteContact, changeFilter };
import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contacts/Add', (name, number) => ({
    payload: {
        id: uuidv4(),
        name,
        number,
    },
}));

const deleteContact = createAction('contacts/Delete');

const changeFilter = createAction('contacts/changeFilter');

export default { addContact, deleteContact, changeFilter };
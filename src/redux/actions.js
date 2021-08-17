export const addContact = (name) => ({
    type: 'contacts/Add',
    payload: name,
});

export const deleteContact = (contactId) => ({
    type: 'contacts/Delete',
    payload: contactId,
});
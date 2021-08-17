import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
    contacts: {
        items: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ],
        filter: ''
    },
};


const reducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case 'contacts/Add':
            return {
                // contacts: [contact, ...state.contacts]
            };
        
        case 'contacts/Delete':
            return {
                contacts: (state.contacts.filter(contact => contact.id !== payload))
            };
        
        default:
            return state;
    }
};

const store = createStore(reducer, composeWithDevTools(applyMiddleware([])));

export default store;




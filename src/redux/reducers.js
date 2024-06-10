import { ADD_CONTACT, REMOVE_CONTACT, EDIT_CONTACT } from './actions';

const initialState = {
contacts: [
{
    id: 1,
    name: 'João Silva',
    email: 'joao.silva@example.com',
    phone: '(11) 99999-9999'
}
]
};

const contactReducer = (state = initialState, action) => {
switch (action.type) {
case ADD_CONTACT:
    return { ...state, contacts: [...state.contacts, action.payload] };
case REMOVE_CONTACT:
    return { ...state, contacts: state.contacts.filter(contact => contact.id !== action.payload) };
case EDIT_CONTACT:
    return {
    ...state,
    contacts: state.contacts.map(contact =>
        contact.id === action.payload.id ? action.payload : contact
    )
    };
default:
    return state;
}
};

export default contactReducer;

import React from 'react';
import { useSelector } from 'react-redux';
import ContactItem from '../ContactItem/ContactItem';
import { List } from './styles.ts';

const ContactList = ({ setCurrentContact }) => {
const contacts = useSelector(state => state.contacts);

return (
<List>
    {contacts.map(contact => (
    <ContactItem key={contact.id} contact={contact} setCurrentContact={setCurrentContact} />
    ))}
</List>
);
};

export default ContactList;

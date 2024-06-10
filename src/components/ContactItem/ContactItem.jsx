import React from 'react';
import { useDispatch } from 'react-redux';
import { removeContact } from '../../redux/actions';
import { Item, Button } from './styles.ts';

const ContactItem = ({ contact, setCurrentContact }) => {
const dispatch = useDispatch();

const handleEdit = () => {
setCurrentContact(contact);
};

const handleDelete = () => {
dispatch(removeContact(contact.id));
};

return (
<Item>
    <p>{contact.name}</p>
    <p>{contact.email}</p>
    <p>{contact.phone}</p>
    <Button onClick={handleEdit}>Editar</Button>
    <Button onClick={handleDelete}>Remover</Button>
</Item>
);
};

export default ContactItem;

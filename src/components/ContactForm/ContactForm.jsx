import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import InputMask from 'react-input-mask';
import { addContact, editContact } from '../../redux/actions';
import { Form, Input, Button } from './styles.ts';

const ContactForm = ({ currentContact, setCurrentContact }) => {
const [contact, setContact] = useState({ id: '', name: '', email: '', phone: '' });
const dispatch = useDispatch();

useEffect(() => {
if (currentContact) {
    setContact(currentContact);
} else {
    setContact({ id: '', name: '', email: '', phone: '' });
}
}, [currentContact]);

const handleChange = (e) => {
const { name, value } = e.target;
setContact({ ...contact, [name]: value });
};

const handleSubmit = (e) => {
e.preventDefault();
if (contact.id) {
    dispatch(editContact(contact));
} else {
    dispatch(addContact({ ...contact, id: Date.now() }));
}
setContact({ id: '', name: '', email: '', phone: '' });
setCurrentContact(null);
};

return (
<Form onSubmit={handleSubmit}>
    <Input
    type='text'
    name='name'
    value={contact.name}
    onChange={handleChange}
    placeholder='Nome Completo'
    required
    />
    <Input
    type='email'
    name='email'
    value={contact.email}
    onChange={handleChange}
    placeholder='Email'
    required
    />
    <InputMask
    mask="(99) 99999-9999"
    value={contact.phone}
    onChange={handleChange}
    >
    {(inputProps) => <Input {...inputProps} type="tel" name="phone" placeholder="Telefone" required />}
    </InputMask>
    <Button type='submit'>{contact.id ? 'Editar Contato' : 'Adicionar Contato'}</Button>
</Form>
);
};

export default ContactForm;

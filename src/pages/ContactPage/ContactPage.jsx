import React, { useState } from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import { PageContainer } from './styles.ts';

const ContactPage = () => {
const [currentContact, setCurrentContact] = useState(null);

return (
<PageContainer>
    <h1>Lista de Contatos</h1>
    <ContactForm currentContact={currentContact} setCurrentContact={setCurrentContact} />
    <ContactList setCurrentContact={setCurrentContact} />
</PageContainer>
);
};

export default ContactPage;

import React from 'react';

// eslint-disable-next-line import/no-unresolved
import { Wallet } from './Wallet';
// eslint-disable-next-line import/no-unresolved
import { ContactForm } from './ContactForm';
// eslint-disable-next-line import/no-unresolved
import { ContactList } from './ContactList';

export const Home = () => (
    <>
        <Wallet />
        <ContactForm />
        <ContactList />
    </>
);

import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import ContactForm from './components/contactForm/ContactForm';
import SearchBox from './components/searchBox/SearchBox';
import ContactList from './components/contactList/ContactList';
import contactsData from './contacts.json';

function App() {
  const [contacts, setContacts] = useState(() => {
    const data = window.localStorage.getItem('contacts');

    if (data !== null) return JSON.parse(data);
    return JSON.parse(contactsData);
  });
  const [filter, setFilter] = useState('');

  console.log(contacts);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().startsWith(filter.toLowerCase())
  );

  const addContact = newContact => {
    setContacts(prevContacts => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <h1>Phonebook</h1>

      <ContactForm onSubmit={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList items={filteredContacts} onDelete={deleteContact} />
    </>
  );
}

export default App;

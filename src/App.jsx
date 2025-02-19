import { useState } from "react";
import "./App.css";
import ContactForm from "./components/contactForm/ContactForm";
import SearchBox from "./components/searchBox/SearchBox";
import ContactList from "./components/contactList/ContactList";
import contactsData from "./contacts.json";

function App() {
  const [contacts, setContacts] = useState(contactsData);

  return (
    <>
      <h1>Phonebook</h1>

      <ContactForm />
      <SearchBox />
      <ContactList items={contacts} />
    </>
  );
}

export default App;

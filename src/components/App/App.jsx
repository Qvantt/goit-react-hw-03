import React, { useState, useEffect } from "react";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import { nanoid } from "nanoid";
import "./App.module.css";

const initialContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    return savedContacts ? JSON.parse(savedContacts) : initialContacts;
  });

  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    setContacts((prevContacts) => [...prevContacts, newContact]); // Додаємо контакт в кінець
  };

  const deleteContact = (contactId) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== contactId)
    );
  };

  const changeFilter = (e) => {
    setFilter(e.target.value);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2>Find contacts by name</h2>
      <SearchBox value={filter} onChange={changeFilter} />
      <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
    </div>
  );
};

export default App;

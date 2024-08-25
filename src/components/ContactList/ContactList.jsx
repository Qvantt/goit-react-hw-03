import React from "react";
import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";

const ContactList = ({ contacts, deleteContact }) => (
  <div className={styles.list}>
    {contacts.map((contact) => (
      <Contact
        key={contact.id}
        name={contact.name}
        number={contact.number}
        onDelete={() => deleteContact(contact.id)}
      />
    ))}
  </div>
);

export default ContactList;

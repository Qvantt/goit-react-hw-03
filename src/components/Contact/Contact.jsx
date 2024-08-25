import React from "react";
import { FaUser, FaPhone } from "react-icons/fa";
import styles from "./Contact.module.css";

const Contact = ({ name, number, onDelete }) => (
  <div className={styles.contactCard}>
    <div className={styles.contactInfo}>
      <div className={styles.nameSection}>
        <FaUser className={styles.icon} />
        <span className={styles.name}>{name}</span>
      </div>
      <div className={styles.numberSection}>
        <FaPhone className={styles.icon} />
        <span className={styles.number}>{number}</span>
      </div>
    </div>
    <button onClick={onDelete} className={styles.deleteButton}>
      Delete
    </button>
  </div>
);

export default Contact;

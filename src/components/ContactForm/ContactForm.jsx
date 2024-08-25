import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import styles from "./ContactForm.module.css";

const validationSchema = Yup.object({
  name: Yup.string().min(3).max(50).required("Required"),
  number: Yup.string().min(3).max(50).required("Required"),
});

const ContactForm = ({ addContact }) => {
  const handleSubmit = (values, { resetForm }) => {
    const newContact = { id: nanoid(), ...values };
    addContact(newContact);
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}>
      <Form className={styles.form}>
        <label htmlFor="name" className={styles.label}>
          Name
        </label>
        <Field name="name" id="name" className={styles.input} />
        <ErrorMessage name="name" component="div" className={styles.error} />

        <label htmlFor="number" className={styles.label}>
          Number
        </label>
        <Field name="number" id="number" className={styles.input} />
        <ErrorMessage name="number" component="div" className={styles.error} />

        <button type="submit" className={styles.button}>
          Add Contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;

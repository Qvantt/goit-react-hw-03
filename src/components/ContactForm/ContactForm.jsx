import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "./ContactForm.module.css";

const ContactForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      number: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Must be at least 3 characters")
        .max(50, "Must be 50 characters or less")
        .required("Required"),
      number: Yup.string()
        .min(3, "Must be at least 3 characters")
        .max(50, "Must be 50 characters or less")
        .required("Required"),
    }),
    onSubmit: (values) => {
      onSubmit(values);
      formik.resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={styles.form}>
      <label htmlFor="name">Name</label>
      <input id="name" type="text" {...formik.getFieldProps("name")} />
      {formik.touched.name && formik.errors.name ? (
        <div className={styles.error}>{formik.errors.name}</div>
      ) : null}

      <label htmlFor="number">Number</label>
      <input id="number" type="text" {...formik.getFieldProps("number")} />
      {formik.touched.number && formik.errors.number ? (
        <div className={styles.error}>{formik.errors.number}</div>
      ) : null}

      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;

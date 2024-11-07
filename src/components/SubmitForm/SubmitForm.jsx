import React from "react";
import s from "./SubmitForm.module.css";
import * as Yup from "yup";
import { Field, Form, Formik } from "formik";

const SubmitForm = () => {
  const initialValues = {
    name: "",
    email: "",
    number: "",
  };
  return (
    <div>
      <Formik initialValues={initialValues}>
        <Form>
          <label>
            <span>Name</span>
            <Field type="text" name="name" placeholder="Name" />
          </label>
          <label>
            <span>Email</span>
            <Field type="email" name="email" placeholder="Email" />
          </label>
          <label>
            <span>Number</span>
            <Field type="tel" name="number" placeholder="Number" />
          </label>
        </Form>
      </Formik>
    </div>
  );
};

export default SubmitForm;

// import React from "react";
// import s from "./SubmitForm.module.css";
import * as Yup from "yup";
import { Field, Form, Formik } from "formik";

const SubmitForm = () => {
  const initialValues = {
    name: "",
    email: "",
    number: "",
    country: "",
    gender: "",
    agree: false,
  };

  const handleForm = (values,actions) => { 
    console.log(values);
    actions.resetForm();
  }


  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleForm}>
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
          <label>
            <span>Country</span>
            <Field as="select" name="country" >
              <option disabled value="">Select Country</option>
              <option value="UA">Ukraine</option>
              <option value="USA">United States of Trump</option>
              <option value="PL">Poland</option>
            </Field>
             </label>
          <div>
            <span>Select Your Gender</span>
            <label>
              <span>Male</span>
              <Field type="radio" name="gender" value='male' />
            </label>
              <label>
              <span>Female</span>
              <Field type="radio" name="gender" value='female' />
               </label>
          </div>
          <label>
            <Field type="checkbox" name="agree" />
            <span>I am agree Terms of use</span>
          </label>
          <button type="submit">Send Form</button>
        </Form>
      </Formik>
    </div>
  );
};

export default SubmitForm;

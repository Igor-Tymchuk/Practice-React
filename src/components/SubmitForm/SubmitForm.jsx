// import React from "react";
import s from "./SubmitForm.module.css";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";

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
  const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const validationForm = Yup.object().shape({ 
    name: Yup.string().min(2, "Wright more simbles").max(30, "It's too much!").required("Fill the gap!"), 
    email: Yup.string().matches(re, "Try again!").required("Fill the gap!"),
    number: Yup.string().min(9, "Wright more simbles").required("Fill the gap!"),
    country: Yup.string().oneOf(['UA', 'USA', 'PL']).required("Choose one of this!") ,
    gender: Yup.string().required("Choose one of this!"),
    agree: Yup.boolean().oneOf([true], "Get terms!").required(),
  })
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleForm} validationSchema={validationForm} >
        <Form className={s.form}>
          <label className={s.label}>
            <span>Name</span>
            <Field type="text" name="name" placeholder="Name" />
            <ErrorMessage name='name' component='span' />
          </label>
          <label className={s.label}>
            <span>Email</span>
            <Field type="email" name="email" placeholder="Email" />
            <ErrorMessage name='email' component='span' />
          </label>
          <label className={s.label}>
            <span>Number</span>
            <Field type="tel" name="number" placeholder="Number" />
            <ErrorMessage name="number" component='span' />
          </label>
          <label className={s.label}>
            <span>Country</span>
            <Field as="select" name="country" >
              <option disabled value="">Select Country</option>
              <option value="UA">Ukraine</option>
              <option value="USA">United States of Trump</option>
              <option value="PL">Poland</option>
            </Field>
            <ErrorMessage name="country" component='span' />
             </label>
          <div className={s.checkboxes}>
            <span>Select Your Gender</span>
            <label className={s.label}>
              <span>Male</span>
              <Field type="radio" name="gender" value='male' />
            </label>

              <label className={s.label}>
              <span>Female</span>
              <Field type="radio" name="gender" value='female' />
               </label>
               <ErrorMessage name='gender' component='span' />
          </div>
          <label className={s.label}>
            <Field type="checkbox" name="agree" />
            <ErrorMessage name='agree' component='span' />
            <span>I am agree Terms of use</span>
          </label>
          <button type="submit">Send Form</button>
        </Form>
      </Formik>
    </div>
  );
};

export default SubmitForm;

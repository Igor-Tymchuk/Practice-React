import { Field, Form, Formik } from "formik";

const SearchForm = () => {
  const handleSearch = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };
  return (
    <div>
      <Formik initialValues={{ query: "" }} onSubmit={handleSearch}>
        <Form>
          <Field name="query" placeholder="Search movie..." />
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </div>
  );
};

export default SearchForm;

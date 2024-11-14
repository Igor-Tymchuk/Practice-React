import { Field, Form, Formik } from "formik";
import { useContext } from "react";
import { yourContext } from "../../context/NewContext";

const SearchForm = ({ handleQuery }) => {
  const { artur, yourValue, toggleTheme } = useContext(yourContext);
  const handleSearch = (values, actions) => {
    const value = values;
    actions.resetForm();
    handleQuery(value);
  };
  return (
    <div>
      <Formik initialValues={{ query: "" }} onSubmit={handleSearch}>
        <Form>
          <button onClick={toggleTheme} type="button">
            {yourValue.toString()}
          </button>
          <Field name="query" placeholder={artur} />
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </div>
  );
};

export default SearchForm;

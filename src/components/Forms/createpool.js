import React from "react";
import { Formik, Field, Form } from "formik";
import useApi from "../../hooks/useApi";
const Createpool = () => {
    const {
        post: { state, fetch },
      } = useApi("/pools");
  
    return (
    <div>
      <div>
        <h1>Creating a new pool...</h1>
        <Formik
          initialValues={{
            poolName: "",
          }}
          onSubmit={async (values) => {
            fetch({
                name : values.poolName
            });
          }}
        >
          <Form>
            <label htmlFor="poolName">Write the name of the pool:</label>
            <Field id="poolName" name="poolName" placeholder='this name will be public for others to see' />
            <button type="submit">Create pool draft</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Createpool;

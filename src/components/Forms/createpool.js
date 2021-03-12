import React, { useEffect } from "react";
import { Formik, Field, Form } from "formik";
import useApi from "../../hooks/useApi";
import PoolCard from "../PoolCards/PoolCard";
const Createpool = () => {
  const {
    post: { state, fetch },
  } = useApi("/pools");

  const {
    get: { state: poolsState, fetch: fetchedPools },
  } = useApi("/pools/mine", []);

  useEffect(() => {
    fetchedPools();
  }, [fetchedPools]);

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
              name: values.poolName,
            });
          }}
        >
          <Form>
            <label htmlFor="poolName">Write the name of the pool:</label>
            <Field
              id="poolName"
              name="poolName"
              placeholder="this name will be public for others to see"
            />
            <button type="submit">Create pool draft</button>
          </Form>
        </Formik>
      </div>
      <div>
        <h1>My pools</h1>
        <ul className="grid grid-cols-2 gap-4">
          {poolsState.value.data.map((pools) => (
            <li key={pools._id}>
              <PoolCard {...pools} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Createpool;

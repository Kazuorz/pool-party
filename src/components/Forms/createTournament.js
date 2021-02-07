import React, { useEffect } from "react";
import { Formik, Field, Form } from "formik";
import useApi from "../../hooks/useApi";
const CreateTournament = () => {
  const {
    post: { state, fetch },
  } = useApi("/tournaments");

  const {
    get: { state: myPools, fetch: my_pools },
  } = useApi("/pools/mine",[]);

  useEffect(() => {
    my_pools();
  }, [my_pools]);

  return (
    <div>
      <div>
        <h1>Creating a new Tournament</h1>
        <Formik
          initialValues={{
            tournamentName: "",
            firstPool: "",
          }}
          onSubmit={async (values) => {
            fetch({
              name: values.tournamentName,
              pools: [values.firstPool],
            });
          }}
        >
          <Form>
            <label htmlFor="poolName">Write the name of your tournament:</label>
            <Field
              id="tournamentName"
              name="tournamentName"
              placeholder="this name will be public for others to see"
            />

            <Field as="select" name="firstPool">
              {myPools.value.data.map((pool) => (
                <option key={pool._id} value={pool._id}>{pool.name}</option>
              ))}
            </Field>
            <button type="submit">Create Tournament</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default CreateTournament;

import React from "react";
import { Formik, Field, Form } from "formik";
import useApi from "../../hooks/useApi";
import BeatmapCard from "../BeatmapCards/BeatmapCard";
const Maprequest = () => {
  const {
    get: { state, fetch },
  } = useApi("/beatmapsets/preview");

  const {
      post: { state: newbeatmap, fetch: post},
  } = useApi("beatmapsets/");
  return (
    <div>
      <h1>Enter a map ID to start!</h1>
      <Formik
        initialValues={{
          beatmapID: "",
        }}
        onSubmit={async (values) => {
            post({
                osu_id : values.beatmapID
            });
        }}
      >
        {({ values }) => (
          <Form>
            <Field
              id="beatmapID"
              name="beatmapID"
              placeholder='URL or beatmap ID (i.e. "osu.ppy.sh/b/9999999" or just "9999999" '
            />
            <button
              type="button"
              onClick={() => {
                fetch({
                  beatmapID: values.beatmapID,
                });
              }}
            >
              Search
            </button>

            {state.value.data ? (
              <>
                <BeatmapCard {...state.value.data} />

                <p> Is this the map you're looking for?</p>
                <button type="submit">Yes</button>
              </>
            ) : null}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Maprequest;

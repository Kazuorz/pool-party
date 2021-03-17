import React, { useEffect } from "react";
import { Redirect, useParams } from "react-router-dom";
import Pool from "./Pool";

import useAlert from "../../hooks/useAlert";
import useApi from "../../hooks/useApi";
import { methods } from "../../services/axios";

const PoolContainer = () => {
  const { id } = useParams();
  const {
    get: { state, fetch: getPool },
  } = useApi("/pools/" + id);

  const alert = useAlert();

  useEffect(() => {
    getPool();
  }, [id, getPool]);

  async function updatePool(beatmapsets) {
    await methods.patch({
      url: `pools/${state.value.data._id}`,
      data: {
        beatmapsets: beatmapsets,
      },
    });

    // re-fetch the current pool
    await getPool();
  }

  const handleDelete = (beatmapId) => {
    // Remove the array from the list by filtering out
    const beatmapsets = state.value.data.beatmapsets.filter(
      (beatmapset) => beatmapset._id !== beatmapId
    );
    alert(({ onClose }) => (
      <div>
        <div>
          <span>
            Are you sure you want to delete this beatmap fron the pool?
          </span>
          <button
            onClick={() => {
              updatePool(beatmapsets);
              onClose();
            }}
          >
            Yes
          </button>
          <button onClick={onClose}>No</button>
        </div>
      </div>
    ));
  };

  if (state.loading) {
    return null;
  }
  if (state.error) {
    return <Redirect to="/error/500" />;
  }

  return <Pool {...state.value.data} onDelete={handleDelete} />;
};

export default PoolContainer;

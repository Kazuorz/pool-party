import React, { useEffect, useState } from "react";
import { Redirect, useParams } from "react-router-dom";
import Pool from "./Pool";
import PoolAlert from './PoolAlert'
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

  const handleModify = (beatmapId) => {
    const index = state.value.data.beatmapsets.findIndex(
      (diff) => diff._id === beatmapId
    );
    const beatmapset = {...state.value.data.beatmapsets[index]};

    const handleAlertModify =(map, diff, mod) => {
      // Copy original beatmapset array
      const beatmapsets = [...state.value.data.beatmapsets]
      // Update values
      const index = state.value.data.beatmapsets.findIndex(
        (diff) => diff._id === map
      )
      beatmapsets[index].difficulty = diff;
      // beatmapset.difficulty = diff;
      beatmapsets[index].modifiers = mod;
      // beatmapset.mod = mod;
      console.log(beatmapsets)
      // TODO: commit beatmapsets update
      updatePool(beatmapsets)
      // console.log(beatmapsets)
      // updatePool(beatmapsets)
    }

    alert((alertProps) => 
      <PoolAlert
        {...alertProps}
        beatmapset={beatmapset}
        onModify={handleAlertModify}
      />
    );
  };

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

  const handleReorder = (beatmapId, direction) => {
    const index = state.value.data.beatmapsets.findIndex(
      (diff) => diff._id === beatmapId
    )
    let beatmapsets = [...state.value.data.beatmapsets]
    if(direction === "right"){
      const [takeOut] = beatmapsets.splice(index,1,beatmapsets[index+1])
      const swap = beatmapsets.splice(index+1,1,takeOut)
    }
    if(direction === "left"){
      const [takeOut] = beatmapsets.splice(index,1,beatmapsets[index-1])
      const swap = beatmapsets.splice(index-1,1,takeOut)
    }
    updatePool(beatmapsets)
  }

  if (state.loading) {
    return null;
  }
  if (state.error) {
    return <Redirect to="/error/500" />;
  }

  return (
    <Pool
      {...state.value.data}
      onDelete={handleDelete}
      onModify={handleModify}
      onReorder={handleReorder}
    />
  );
};

export default PoolContainer;

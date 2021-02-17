import React, { useEffect } from "react";
import { Redirect, useParams } from "react-router-dom";
import useApi from "../../hooks/useApi";
import Beatmap from "./Beatmap";

const BeatmapContainer = () => {
  const { id } = useParams();
  const {
    get: { state, fetch },
  } = useApi("/beatmapsets/" + id);

  useEffect(() => {
    fetch();
  }, [id, fetch]);

  if (state.loading) {
    return null;
  }

  if (state.error) {
    return <Redirect to="/error/500" />;
  }

  return <Beatmap {...state.value.data} />;
};

export default BeatmapContainer;

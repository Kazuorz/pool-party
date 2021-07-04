import React, { useEffect } from "react";
import { Redirect, useParams } from "react-router-dom";

import useApi from "../../hooks/useApi";
import Beatmap from "./Beatmap";

const BeatmapContainer = () => {
  const { id } = useParams();
  const {
    get: {
      state: { value: beatmap, loading, error },
      fetch,
    },
  } = useApi("/beatmapset/" + id);

  useEffect(() => {
    fetch();
  }, [id, fetch]);

  if (loading) {
    return null;
  }

  if (error) {
    return <Redirect to="/error/500" />;
  }

  return (
    <Beatmap
      id={beatmap.id}
      osu_id={beatmap.osu_id}
      artist={beatmap.artist}
      title={beatmap.title}
      osu_user_id={beatmap.osu_user_id}
      submited_date={beatmap.submited_date}
      status={beatmap.status}
      cover_url={beatmap.cover_url}
      pool_tags={beatmap.pool_tags}
      maps={beatmap.maps}
    />
  );
};

export default BeatmapContainer;

import React, { useEffect } from "react";
import BeatmapCard from "./BeatmapCard";
import useApi from "../../hooks/useApi";
const BeatmapCardsContainer = () => {
  const {
    get: { state, fetch },
  } = useApi("beatmapset/latest", []);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return (
    <ul className="grid grid-cols-2 gap-4">
      {state.value.data.map((beatmap) => (
        <li key={beatmap.id}>
          <BeatmapCard
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
        </li>
      ))}
    </ul>
  );
};

export default BeatmapCardsContainer;

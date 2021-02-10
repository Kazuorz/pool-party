import React, { useEffect } from "react";

import styles from "./SearchResults.module.css";

import TournamentCard from "../TournamentCards/TournamentCard";
import BeatmapCard from "../BeatmapCards/BeatmapCard";
import PoolCard from "../PoolCards/PoolCard";

import useApi from "../../hooks/useApi";

const SearchResultsContainer = ({ search }) => {
  const {
    get: { state: tournaments, fetch: searchTournaments },
  } = useApi("/tournaments", []);
  const {
    get: { state: beatmaps, fetch: searchBeatmaps },
  } = useApi("/beatmapsets", []);
  const {
    get: { state: pools, fetch: searchPools },
  } = useApi("/pools", []);

  useEffect(() => {
    searchTournaments({ search: search });
    searchBeatmaps({ search: search });
    searchPools({ search: search });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <section className="flex flex-col p-4">
      <section>
        <h1>Tournaments</h1>
        <div className={styles.result_grid}>
          {tournaments.value.data.map((tournament) => (
            <TournamentCard {...tournament} />
          ))}
        </div>
      </section>

      <section>
        <h1>Beatmapsets</h1>
        <div className={styles.result_grid}>
          {beatmaps.value.data.map((beatmap) => (
            <BeatmapCard {...beatmap} />
          ))}
        </div>
      </section>

      <section>
        <h1>Pools</h1>
        <div className={styles.result_grid}>
          {pools.value.data.map((pool) => (
            <PoolCard {...pool} />
          ))}
        </div>
      </section>
    </section>
  );
};

export default SearchResultsContainer;

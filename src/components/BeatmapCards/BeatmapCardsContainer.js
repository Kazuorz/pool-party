import React, { useEffect } from 'react'
import BeatmapCard from './BeatmapCard'
import useApi from "../../hooks/useApi";
const BeatmapCardsContainer = () => {
  const {
    get: { state, fetch },
  } = useApi("/beatmapsets/latest",[]);

  useEffect(() => {
    fetch();
  }, [fetch]);
  console.log(state)
  return (
      <ul className="grid grid-cols-2 gap-4">
        {state.value.data.map((beatmap) => <li key={beatmap._id}><BeatmapCard {...beatmap}/></li>)}
      </ul>
  )
}

export default BeatmapCardsContainer

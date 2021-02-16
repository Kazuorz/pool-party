import React, { useEffect } from 'react'
import useApi from '../../hooks/useApi';
import TournamentCard from './TournamentCard'

const TournamentCardsContainer = () => {
  const {
    get: { state, fetch},
  } = useApi("tournaments/latest",[]);

  useEffect(() => {
    fetch();
  }, [fetch])
  return (
    <div>
      <ul className="grid grid-cols-2 gap-4">
        {state.value.data.map((tournament) => <li key={tournament._id}><TournamentCard {...tournament} /></li>)}
      </ul>
    </div>
  )
}

export default TournamentCardsContainer

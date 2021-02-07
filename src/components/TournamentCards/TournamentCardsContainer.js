import React, { Component } from 'react'
import TournamentCard from './TournamentCard'

export class TournamentCardsContainer extends Component {
  
  state = {
    tournaments: []
  }

  componentDidMount() {
    fetch("http://localhost:3010/tournaments/latest")
       .then((res) => res.json())
       .then((_tournaments) => this.setState({tournaments: _tournaments}));
  }

  render() {
    return (
      <ul>
        {this.state.tournaments.map((tournament) => <li key={tournament._id}><TournamentCard {...tournament}/></li>)}
      </ul>
    )
  }
}

export default TournamentCardsContainer

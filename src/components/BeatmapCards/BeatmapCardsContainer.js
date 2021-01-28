import React, { Component } from 'react'
import BeatmapCard from './BeatmapCard'

export class BeatmapCardsContainer extends Component {
  
  state = {
    beatmaps: []
  }

  componentDidMount() {
    fetch("http://localhost:3010/beatmapsets/latest")
       .then((res) => res.json())
       .then((_beatmaps) => this.setState({beatmaps: _beatmaps}));
  }

  render() {
    return (
      <ul>
        {this.state.beatmaps.map((beatmap) => <li key={beatmap.id}><BeatmapCard {...beatmap}/></li>)}
      </ul>
    )
  }
}

export default BeatmapCardsContainer

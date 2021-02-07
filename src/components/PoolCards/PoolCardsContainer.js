import React, { Component } from 'react'
import PoolCard from './PoolCard'

export class PoolCardsContainer extends Component {
  
  state = {
    pool: []
  }

  componentDidMount() {
    fetch("http://localhost:3010/pools/latest")
       .then((res) => res.json())
       .then((_pool) => this.setState({pool: _pool}));
  }

  render() {
    return (
      <ul>
        {this.state.pool.map((pool) => <li key={pool._id}><PoolCard {...pool}/></li>)}
      </ul>
    )
  }
}

export default PoolCardsContainer

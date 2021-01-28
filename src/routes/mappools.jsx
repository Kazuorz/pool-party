import React from 'react'
import PoolCardsContainer from "../components/PoolCards/PoolCardsContainer"
const Mappools = () => {
    return (
        <div>
            <h2>Map pools</h2>
            <div>
                <a href="#">Tournament Pools</a>
                <a href="#">Community Pools</a>
            </div>
            <PoolCardsContainer />
        </div>
    )
}

export default Mappools

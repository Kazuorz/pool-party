import React from 'react'
import PoolCardsContainer from "../components/PoolCards/PoolCardsContainer"
import { Link } from "react-router-dom";
const Mappools = () => {
    return (
        <div>
            <h2>Map pools</h2>
            <div>
                <Link to="/mine/pool">Create a new pool instead...</Link>
            </div>
            <PoolCardsContainer />
        </div>
    )
}

export default Mappools

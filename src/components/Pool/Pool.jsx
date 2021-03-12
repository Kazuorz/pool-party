import React from 'react'
import BeatmapCard from "../BeatmapCards/BeatmapCard"
const Pool = (props) => {
    return (
        <div>
            {console.log(props)}
            <h1>{props.name}</h1>
            <div>
                <BeatmapCard {...props.beatmapsets[0]}/>
            </div>
        </div>
    )
}

export default Pool

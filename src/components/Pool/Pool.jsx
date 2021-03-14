import React from 'react'
import BeatmapCardSimple from "../BeatmapCards/BeatmapCardSimple"
const Pool = (props) => {
    return (
        <div>
            {console.log(props)}
            <h1 className="text-center text-4xl py-8">{props.name}</h1>
            <div className="grid grid-cols-3 gap-4">
                {props.beatmapsets.map((beatmap, index)=>
                <BeatmapCardSimple {...props.beatmapsets[index]}/>)}
            </div>
        </div>
    )
}

export default Pool

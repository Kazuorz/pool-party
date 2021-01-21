import React from 'react';

const BeatmapCard =(props)=>{
        return(
            <div>
                <div>
                    <img src={props.background} aria-hidden alt="" />
                    <h3>{props.artist} - {props.title}</h3>
                    <p>Mapped by: <a href= {"osu.ppy.sh/users/" + props.mapperID} >{props.mapper}</a></p>
                    {props.helpedBy && <p>Helped by: <a href= {"osu.ppy.sh/users/" + props.helperID}>{props.helper}</a></p>}
                </div>
                <div>
                    <img src= {"../logos/" + props.status + ".png"} alt={props.status} />
                    <img src= {"../logos/" + props.isTournament + ".png"} alt="" />
                </div>
                <div>
                    <p>Difficulties: {props.diffcount}</p>
                    <p>Related Tags: {props.tags}</p>
                </div>
            </div>
        );
}
export default BeatmapCard
import React from "react";
import { BiTargetLock, BiStopwatch , BiStar , BiTime} from "react-icons/bi";

const Beatmap = (props) => {
  
  return (
    <div>
      <div>
        <img src={props.covers.slimcover} aria-hidden="true" alt=""/>
      </div>
      <div>
        <a href={"http://osu.ppy.sh/beatmapsets/" + props.osu_id}>
          {props.artist} - {props.title}
        </a>
      </div>
      <div>
        Mapped by 
        <a href={"http://osu.ppy.sh/users/" + props.creator_id}>
          {props.creator}
        </a>
        Created at: {props.created_at}
      </div>
      <div>
        <BiTime /><p>{props.song_length}</p>
      </div>
      {console.log(props)}
      <div>
        <BiStopwatch /> {props.beatmaps[0].bpm}
      </div>
      <div>
        <BiStar /> {props.beatmaps[0].difficulty_rating}
      </div>
      <div>
        <BiTargetLock /> {props.beatmaps[0].accuracy}
      </div>
    </div>
  );
};

export default Beatmap;

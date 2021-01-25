import React from "react";
const Beatmap = (props) => {
  return (
    <div>
      <div>
        <div>
          <img src={props.card} alt="" />
        </div>
        <div>
          <a href={"http://osu.ppy.sh/b/" + props.id}>
            {props.artist} - {props.title}
          </a>
        </div>
        <div>
          Mapped by
          <a href={"http://osu.ppy.sh/u/" + props.user_id}>{props.creator}</a>
        </div>
        <div>
          <img
            src={"../logos/" + props.status + ".png"}
            alt={props.status}
          ></img>
          <img
            src={"../logos/tournament_" + props.is_tournament + ".png"}
            alt={
              this.props.is_tournament
                ? "Has been selected before"
                : "Has not been selected before"
            }
          ></img>
        </div>
      </div>
      <div>
        <i class="far fa-clock"></i> {props.beatmap.total_length}
      </div>
      <div>
        <i class="far fa-stopwatch"></i> {props.beatmap.bpm}
      </div>
      <div>
        {/* Acá voy a poner una lista de los torneos en que se jugó cuando tengamos eso en la DB*/}
      </div>
      <div>
      <ul>
        {this.props.map((pool_tags) => <li key={props.pool_tags}>{props.pool_tags}</li>)}
      </ul>
      </div>
    </div>
  );
};

export default Beatmap;

import React from "react";

const BeatmapCard = (props) => {
  return (
    <div>
      <div>
        <a href={"/beatmapsets/" + props.id}>
          <img src={props.card} aria-hidden alt="" />
        </a>
        <h3>
          {props.artist} - {props.title}
        </h3>
        <p>
          Mapped by:{" "}
          <a href={"osu.ppy.sh/users/" + props.user_id}>{props.creator}</a>
        </p>
        {props.helpedBy && (
          <p>
            Helped by:{" "}
            <a href={"osu.ppy.sh/users/" + props.helper_id}>{props.helper}</a>
          </p>
        )}
      </div>
      <div>
        <img src={"../logos/" + props.status + ".png"} alt={props.status} />
        <img src={"../logos/" + props.isTournament + ".png"} alt="" />
      </div>
      <div>
        <p>Difficulties: {props.diffcount}</p>
        <p>Related Tags: {props.pool_tags}</p>
      </div>
    </div>
  );
};
export default BeatmapCard;

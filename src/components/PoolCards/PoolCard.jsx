import React from "react";
import { Link } from "react-router-dom" ;

export const PoolCard = (props) => {
  return (
    <div className="flex">
      <section
        className="p-4 w-full py-6"
        style={{
          backgroundSize: "cover",
          backgroundBlendMode: "difference",
          backgroundImage: `linear-gradient(rgba(255,255,255, .4), rgba(255,255,255, .4)), url(${
            props.beatmapsets[0]?.covers.cover ?? "/Placeholder.png"
          })`,
        }}
      >
        <Link to={{
          pathname: `/pools/${props._id}`,
        }}>
        
        <h1 className="text-2xl">
          {props.name} - {props.beatmap_amount}{" "}
        </h1>
        <p>Submitted by: {props.created_by.username}</p>
        </Link>
      </section>
    </div>
  );
};
export default PoolCard;
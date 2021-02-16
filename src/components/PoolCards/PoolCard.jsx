import React from "react";

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
        <h1 className="text-2xl">
          {props.name} - {props.beatmap_amount}{" "}
        </h1>
        <p>Submitted by: {props.created_by.username}</p>
      </section>
    </div>
  );
};
export default PoolCard;
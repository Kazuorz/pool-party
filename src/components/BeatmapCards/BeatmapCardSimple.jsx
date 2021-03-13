import React from "react";

const BeatmapCardSimple = (props) => {
  console.log(props)
  return (
    <div className="rounded-xl overflow-auto relative text-center">
      <section
        className="p-4 space-y-4"
        style={{
          backgroundSize: "cover",
          backgroundBlendMode: "difference",
          backgroundImage: `linear-gradient(rgba(255,255,255, .4), rgba(255,255,255, .4)), url(${props.reference.covers.cover})`,
        }}
      >
        <h2 className="text-white">{props.reference.title}</h2>
        <h3 className="text-white">{props.reference.artist}</h3>
      </section>
      <div className="p-4 py-2 bg-black text-white text-center">
          HR
      </div>
    </div>
  );
};

export default BeatmapCardSimple;

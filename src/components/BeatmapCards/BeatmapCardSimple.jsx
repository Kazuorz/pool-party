/* eslint-disable eqeqeq */
import React from "react";
import { Link } from "react-router-dom";

const BeatmapCardSimple = (props) => {
  function handleColors(modifier) {
    if (modifier == "no_mod") {
      return "bg-gray-400";
    }
    if (modifier == "hard_rock") {
      return "bg-red-500";
    }
    if (modifier == "double_time") {
      return "bg-purple-600";
    }
    if (modifier == "hidden") {
      return "bg-blue-300";
    }
    if (modifier == "free_mods") {
      return "bg-green-600";
    }
    if (modifier == "flashlight") {
      return "bg-blue-900";
    }
    if (modifier == "tie_breaker") {
      return "bg-gray-900";
    }
  }

  return (
    <Link
      to={{
        pathname: `/beatmaps/${props.reference._id}`,
      }}
    >
      <div className="rounded-xl overflow-auto relative text-center">
        <section
          className="p-4 h-28"
          style={{
            backgroundSize: "cover",
            backgroundBlendMode: "difference",
            backgroundImage: `linear-gradient(rgba(255,255,255, .4), rgba(255,255,255, .4)), url(${props.reference.covers.cover})`,
          }}
        >
          <h2 className="text-white text-lg truncate ...">{props.reference.title}</h2>
          <h3 className="text-white text-base truncate ...">{props.reference.artist}</h3>
          <p className="font-bold text-lg truncate ...">{props.difficulty}</p>
        </section>
        <div
          className={
            "p-4 py-2 text-white text-center " + handleColors(props.modifiers)
          }
        >
          <p className="capitalize">{props.modifiers}</p>
        </div>
      </div>
    </Link>
  );
};

export default BeatmapCardSimple;

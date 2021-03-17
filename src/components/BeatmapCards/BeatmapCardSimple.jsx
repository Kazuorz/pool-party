/* eslint-disable eqeqeq */
import React from "react";
import { Link } from "react-router-dom";
import useApi from "../../hooks/useApi";
const BeatmapCardSimple = (props) => {
  function handleColors(modifier) {
    if (modifier == "no_mod") {
      return "from-gray-400 to-gray-600";
    }
    if (modifier == "hard_rock") {
      return "from-red-400 to-red-900";
    }
    if (modifier == "double_time") {
      return "from-purple-500 to-purple-800";
    }
    if (modifier == "hidden") {
      return "from-blue-300 to-blue-500";
    }
    if (modifier == "free_mods") {
      return "from-green-500 to-green-800";
    }
    if (modifier == "flashlight") {
      return "bg-blue-900";
    }
    if (modifier == "tie_breaker") {
      return "from-gray-600 to-black";
    }
  }

  return (
    <div>
      <Link
        to={{
          pathname: `/beatmaps/${props.reference._id}`,
        }}
      >
        <div className="rounded-t-xl overflow-auto relative text-center">
          <section
            className="p-4 h-28"
            style={{
              backgroundSize: "cover",
              backgroundBlendMode: "difference",
              backgroundImage: `linear-gradient(rgba(0,0,0, .4), rgba(255,255,255, .4)), url(${props.reference.covers.cover})`,
            }}
          >
            <div className="">
              <h2 className="text-white text-lg truncate ...">
                {props.reference.title}
              </h2>
              <h3 className="text-white text-base truncate ...">
                {props.reference.artist}
              </h3>
              <p className="font-bold text-white text-xl truncate ...">
                {props.difficulty}
              </p>
            </div>
          </section>
        </div>
      </Link>
      <div
        className={
          "flex rounded-b-xl justify-center p-4 py-2 text-white bg-gradient-to-r " +
          handleColors(props.modifiers)
        }
      >
        <p className="capitalize font-bolder text-xl">{props.modifiers}</p>
      </div>
    </div>
  );
};

export default BeatmapCardSimple;

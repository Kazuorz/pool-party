import React from "react";
import BeatmapCardSimple from "../BeatmapCards/BeatmapCardSimple";
import { FaTrash } from "react-icons/fa";

const Pool = (props) => {
  return (
    <div>
      <h1 className="text-center text-4xl py-8">{props.name}</h1>

      <p className="text-2xl font-bold">
        {" "}
        This pool's status is "{props.status}".
      </p>
      <p className="text-lg pb-8">
        This means{" "}
        {props.status === "draft"
          ? "you can edit it."
          : "you cannot modify it anymore."}
      </p>
      <div className="grid grid-cols-3 gap-4">
        {props.beatmapsets.map((beatmap) => (
          <div>
            <BeatmapCardSimple {...beatmap} />
            <button
              className="text-white opacity-50 hover:opacity-100 float-right"
              onClick={() => props.onDelete(beatmap._id)}
            >
              <FaTrash />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pool;

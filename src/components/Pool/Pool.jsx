import React from "react";
import BeatmapCardSimple from "../BeatmapCards/BeatmapCardSimple";
import { FaTrash } from "react-icons/fa";
import useApi from "../../hooks/useApi";
import { methods } from "../../services/axios";
const Pool = (props) => {
  async function updatePool(payload) {
    // await methods.patch({
    //     url: `pools/${props._id}`,
    //     data: {
    //         beatmapsets: [
    //             payload[0],
    //         ]
    //     }
    // })
    console.log(payload[0])
  }

  const handleDelete = (id) => {
    const payload = props;
    const found = payload.beatmapsets.findIndex(
      (beatmapset) => beatmapset._id === id
    );
    if (found !== -1) {
      const deleteFound = payload.beatmapsets.splice(found, 1);
      
      const mapped = payload.beatmapsets.map((beatmapset) => ({
        reference: beatmapset._id,
        modifiers: beatmapset.modifiers,
        difficulty: beatmapset.difficulty,
      }));
      updatePool(mapped);
    }
  };

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
        {props.beatmapsets.map((beatmap, index) => (
          <div>
            <BeatmapCardSimple {...props.beatmapsets[index]} />
            <button
              className="text-white opacity-50 hover:opacity-100 float-right"
              onClick={() => handleDelete(props.beatmapsets[index]._id)}
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

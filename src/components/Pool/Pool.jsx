import React from "react";
import BeatmapCardSimple from "../BeatmapCards/BeatmapCardSimple";
import { FaTrash, FaEdit, FaCaretLeft, FaCaretRight } from "react-icons/fa";
import { methods } from "../../services/axios";
import { Redirect } from "react-router";
import useApi from "../../hooks/useApi";

const Pool = (props) => {
  async function deletePool(id) {
    console.log(id)
    await methods.delete({
      url: `pools/${id}`,
    });
    await <Redirect to="/mappools"/>
  }

  const {
    get: { state, fetch: getPool },
  } = useApi("/pools/" + props._id);

  
  async function finishPool(id) {
    console.log(props.beatmapsets)
    await methods.patch({
      url: `pools/${id}`,
      data: {
        beatmapsets: [...props.beatmapsets],
        status: "public",
      },
    });

    // re-fetch the current pool
    await getPool();
  }

  return (
    <div>
      <h1 className="text-center text-4xl py-8" title="test">
        {props.name}
      </h1>

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
          <div key={beatmap._id}>
            <BeatmapCardSimple {...beatmap} />
            <button
              className="text-black opacity-75 hover:opacity-100 float-right text-2xl"
              onClick={() => props.onDelete(beatmap._id)}
            >
              <FaTrash />
            </button>
            <button
              className="text-black opacity-75 hover:opacity-100 float-right text-2xl"
              onClick={() => props.onModify(beatmap._id)}
            >
              <FaEdit />
            </button>
            <button
              className="text-black opacity-75 hover:opacity-100 float-right text-2xl"
              onClick={() => props.onReorder(beatmap._id, "right")}
            >
              <FaCaretRight />
            </button>
            <button
              className="text-black opacity-75 hover:opacity-100 float-right text-2xl"
              onClick={() => props.onReorder(beatmap._id, "left")}
            >
              <FaCaretLeft />
            </button>
          </div>
        ))}
      </div>
      <div>
        <button className="bg-red-600 hover:bg-red-900 text-white font-bold py-2 px-4 rounded mx-4 my-4"
        onClick={() => deletePool(props._id)}>delete pool</button>
        <button className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded mx-4 my-4"
        onClick={() => finishPool(props._id)}>finish pool</button>
      </div>
    </div>
  );
};

export default Pool;

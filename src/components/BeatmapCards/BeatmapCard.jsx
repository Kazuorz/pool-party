import React from "react";
import { FaTrophy } from "react-icons/fa";
import { IconContext } from "react-icons";
const BeatmapCard = (props) => {
  return (
    <div className="relative m-8">
      <img
        src={props.covers.cover}
        aria-hidden
        alt=""
        className=" w-full h-full object-cover opacity-50 rounded-t-lg"
      />
      <div className="text-3xl absolute top-4 right-8">
        <IconContext.Provider
          value={{
            color: props.is_tournament ? "yellow" : "gray",
            className: "global-class-name",
          }}
        >
          <div>
            <FaTrophy />
          </div>
        </IconContext.Provider>
      </div>
      <div className="absolute top-0 left-0 py-2">
        <div className="bg-gray-900 opacity-80 rounded-full h-8 mx-4 text-center ">
          <p className="text-white font-bold px-4 ">{props.status}</p>
        </div>
      </div>
      <div>
        <a href={"/beatmapsets/" + props.id}>
          <img src={props.card} aria-hidden alt="" />
        </a>
        <h2 className="text-white px-4 py-2 absolute left-0 bottom-28">
          {props.title}
        </h2>
        <h3 className="text-white px-4 py-2 absolute left-0 bottom-20">{props.artist}</h3>
        <p className="text-white px-4 font-medium absolute left-0 bottom-16">
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

      <div className="bg-black rounded-b-lg">
        <p className="text-white px-2 pt-2">Difficulties: {props.diffcount}</p>
        <p className="text-white px-2 pb-2">Related Tags: {props.pool_tags}</p>
      </div>
    </div>
  );
};
export default BeatmapCard;

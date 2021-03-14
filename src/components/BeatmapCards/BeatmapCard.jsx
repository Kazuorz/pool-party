import React from "react";
import { FaTrophy } from "react-icons/fa";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
const BeatmapCard = (props) => {
  return (
    <div className="rounded-xl overflow-auto relative">
      <section
        className="p-4 space-y-4"
        style={{
          backgroundSize: "cover",
          backgroundBlendMode: "difference",
          backgroundImage: `linear-gradient(rgba(255,255,255, .4), rgba(0,0,0, .4)), url(${props.covers.cover})`,
        }}
      >
        <section className="flex justify-between">
          <section className="bg-gray-700 opacity rounded-full h-8 text-center flex items-center text-white px-4">
            <strong>{props.status}</strong>
          </section>
          <div className="text-3xl">
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
        </section>

        <section className="text-white">
          <Link
            to={{
              pathname: `/beatmaps/${props._id}`,
              state: { beatmap_id: props._id },
            }}
          >
            <h2 className="truncate ...">{props.title}</h2>
            <h3 className="truncate ...">{props.artist}</h3>
          </Link>
          <p className="text-white font-medium left-0 bottom-16">
            Mapped by:{" "}
            <a href={"osu.ppy.sh/users/" + props.user_id}>{props.creator}</a>
          </p>
          {props.helpedBy && (
            <p>
              Helped by:{" "}
              <a href={"osu.ppy.sh/users/" + props.helper_id}>{props.helper}</a>
            </p>
          )}
        </section>
      </section>
      <div className="bg-black text-white p-4 py-2">
        <p>Difficulties: {props.diff_amount}</p>
        <p>Related Tags: {props.pool_tags}</p>
      </div>
    </div>
  );
};
export default BeatmapCard;

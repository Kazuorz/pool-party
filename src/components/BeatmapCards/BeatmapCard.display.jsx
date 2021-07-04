import React from "react";
import { FaTrophy } from "react-icons/fa";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const BeatmapCard = (props) => {
  return (
    <div className="rounded-xl overflow-auto relative">
      <section
        className="p-4 space-y-4"
        style={{
          backgroundSize: "cover",
          backgroundBlendMode: "difference",
          backgroundImage: `linear-gradient(rgba(0,0,0, .3), rgba(255,255,255, .3)), url(${props.cover_url})`,
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
              pathname: `/beatmaps/${props.id}`,
              state: { beatmap_id: props.id },
            }}
          >
            <h2 className="truncate ...">{props.title}</h2>
            <h3 className="truncate ...">{props.artist}</h3>
          </Link>
          <p className="text-white font-medium left-0 bottom-16">
            Mapped by:{" "}
            <a href={"osu.ppy.sh/users/" + props.user_id}>{props.creator}</a>
          </p>
        </section>
      </section>
      <div className="bg-black text-white p-4 py-2">
        <p>Difficulties: {props.maps.length}</p>
        <p>Related Tags: {props.pool_tags.join(", ")}</p>
      </div>
    </div>
  );
};

BeatmapCard.propTypes = {
  id: PropTypes.number.isRequired,
  osu_id: PropTypes.number.isRequired,
  artist: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  osu_user_id: PropTypes.number.isRequired,
  submited_date: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  cover_url: PropTypes.string.isRequired,
  pool_tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  maps: PropTypes.array.isRequired,
};

export default BeatmapCard;

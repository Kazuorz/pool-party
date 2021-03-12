import React, { useState } from "react";
import { BiTargetLock, BiStopwatch, BiStar, BiTime } from "react-icons/bi";
import { FaDotCircle, FaTrophy } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

const Beatmap = (props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <div className="bg-gray-400">
      <section
        className="p-4 pt-8 space-y-4"
        style={{
          backgroundSize: "cover",
          backgroundBlendMode: "difference",
          backgroundImage: `linear-gradient(rgba(255,255,255, .4), rgba(255,255,255, .4)), url(${props.covers.slimcover})`,
        }}
      >
        <div className="col-span-8 bg-gray-300 bg-opacity-10 m-2 p-2 rounded-full text-white list-none flex flex-col">
          <ul className="flex">
            {props.beatmaps.map((beatmap, index) => (
              <li className="px-4 text-2xl">
                <button onClick={() => setSelectedIndex(index)}>
                  <FaDotCircle />
                </button>
              </li>
            ))}
          </ul>
          <p className="px-4 py-2 ">{props.beatmaps[selectedIndex].version}</p>
        </div>
        <div className="grid grid-cols-12">
          <div className="col-span-4">
            <div className="text-white">
              <a
                href={"http://osu.ppy.sh/beatmapsets/" + props.osu_id}
                className="text-3xl"
              >
                <div>{props.title}</div>
                <div>{props.artist}</div>
              </a>
            </div>
            <div className="text-white">
              <p className="inline">{"Mapped by: "} </p>
              <a href={"http://osu.ppy.sh/users/" + props.creator_id}>
                {props.creator}
              </a>
              <div className="text-white text-xs font-thin">
                submitted: {props.created_at}
              </div>
            </div>
            <div className="flex space-x-2">
              <div className="bg-gray-700 opacity rounded-full h-8 text-center flex-initial items-center text-white px-4 inline-flex">
                <strong>{props.status}</strong>
              </div>
              <div className="bg-gray-700 opacity rounded-full text-3xl px-2">
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
            </div>
          </div>
          <div className="bg-gray-900 text-white col-span-4 grid grid-cols-4 col-start-8 m-2 p-2 rounded-full h-16">
            <div className="col-span-1 px-2 m-auto">
              <BiTime />
              <p>{props.song_length}</p>
            </div>
            <div className="col-span-1 px-2 m-auto">
              <BiStopwatch /> {props.beatmaps[selectedIndex].bpm + "BPM"}
            </div>
            <div className="col-span-1 px-2 m-auto">
              <BiStar /> {props.beatmaps[selectedIndex].difficulty_rating}
            </div>
            <div className="col-span-1 px-2 m-auto">
              <BiTargetLock /> {props.beatmaps[selectedIndex].accuracy}
            </div>
          </div>
          {/* <div className="bg-gray-900 text-white col-span-4 col-start-8">
                  contenido chistoso
          </div> */}
        </div>
      </section>
      <div className="p-4">
        <h4>Played in:</h4>
        <p>
          {props.used_in.length === 0 && "Not included in any pools"}
          {props.used_in.length > 0 && props.used_in[0].name}
        </p>
      </div>
    </div>
  );
};

export default Beatmap;

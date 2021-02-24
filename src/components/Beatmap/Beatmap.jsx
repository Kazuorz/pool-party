import React, { useState } from "react";
import { BiTargetLock, BiStopwatch, BiStar, BiTime } from "react-icons/bi";
import { FaDotCircle, FaTrophy } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

const Beatmap = (props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <div className="bg-gray-400">
      <section
        className="p-4 pt-16 space-y-4"
        style={{
          backgroundSize: "cover",
          backgroundBlendMode: "difference",
          backgroundImage: `linear-gradient(rgba(255,255,255, .4), rgba(255,255,255, .4)), url(${props.covers.slimcover})`,
        }}
      >
        <div>
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
      </section>
      <div className="grid grid-cols-12 gap-x-12">
        {console.log(props.beatmaps.indexOf())}
        <div className="col-span-8 bg-gray-900 m-2 p-2 rounded-full text-white list-none flex flex-col">
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
        <div className="w-4/5 bg-gray-900 text-white col-span-4 grid grid-cols-4 m-2 p-2 rounded-full">
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
        <div className="bg-gray-900 col-span-12 m-2 p-2 rounded-full"></div>
      </div>
    </div>
  );
};

export default Beatmap;

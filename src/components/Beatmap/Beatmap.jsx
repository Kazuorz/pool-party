import { Field, Form, Formik, withFormik } from "formik";
import React, { useEffect, useState } from "react";
import { BiTargetLock, BiStopwatch, BiStar, BiTime } from "react-icons/bi";
import { FaDotCircle, FaTrophy } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import useApi from "../../hooks/useApi";
import { methods, computeConfig } from "../../services/axios";

const Beatmap = (props) => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
  } = props;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [poolId, setPoolId] = useState(undefined);

  const {
    get: { state: myPools, fetch: getMyPools },
  } = useApi("/pools/mine", []);

  useEffect(() => {
    getMyPools();
  }, [getMyPools]);

  const handlePoolChange = (event) => {
    const id = event.target.value;
    const pool = myPools.value.data.find((pool) => pool.id === id);
    setFieldValue(event.currentTarget.name, pool);
  };

  const handleModChange = (event) => {
    const mod = event.target.value;
    setFieldValue(event.currentTarget.name, mod);
  };

  const handleSelectedDiff = (event, index) => {
    setSelectedIndex(index);
    const diff = props.beatmap.beatmaps[selectedIndex].version;
    setFieldValue(event.currentTarget.name, diff);
  };

  return (
    <div className="bg-gray-400">
      <section
        className="p-4 pt-8 space-y-4"
        style={{
          backgroundSize: "cover",
          backgroundBlendMode: "difference",
          backgroundImage: `linear-gradient(rgba(255,255,255, .4), rgba(0,0,0, .4)), url(${props.beatmap.covers.cover})`,
        }}
      >
        <div className="col-span-8 bg-gray-300 bg-opacity-10 m-2 p-2 rounded-full text-white list-none flex flex-col">
          <ul className="flex">
            {props.beatmap.beatmaps.map((beatmap, index) => (
              <li className="px-4 text-2xl">
                <button
                  name="diff"
                  onClick={(event) => handleSelectedDiff(event, index)}
                >
                  <FaDotCircle />
                </button>
              </li>
            ))}
          </ul>
          <p className="px-4 py-2 ">
            {props.beatmap.beatmaps[selectedIndex].version}
          </p>
        </div>
        <div className="grid grid-cols-12">
          <div className="col-span-4">
            <div className="text-white">
              <a
                href={"http://osu.ppy.sh/beatmapsets/" + props.beatmap.osu_id}
                className="text-3xl"
              >
                <div>{props.beatmap.title}</div>
                <div>{props.beatmap.artist}</div>
              </a>
            </div>
            <div className="text-white">
              <p className="inline">{"Mapped by: "} </p>
              <a href={"http://osu.ppy.sh/users/" + props.beatmap.creator_id}>
                {props.beatmap.creator}
              </a>
              <div className="text-white text-xs font-thin">
                submitted: {props.beatmap.created_at}
              </div>
            </div>
            <div className="flex space-x-2">
              <div className="bg-gray-700 opacity rounded-full h-8 text-center flex-initial items-center text-white px-4 inline-flex">
                <strong>{props.beatmap.status}</strong>
              </div>
              <div className="bg-gray-700 opacity rounded-full text-3xl px-2">
                <IconContext.Provider
                  value={{
                    color: props.beatmap.is_tournament ? "yellow" : "gray",
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
              <p>{props.beatmap.song_length}</p>
            </div>
            <div className="col-span-1 px-2 m-auto">
              <BiStopwatch />{" "}
              {props.beatmap.beatmaps[selectedIndex].bpm + "BPM"}
            </div>
            <div className="col-span-1 px-2 m-auto">
              <BiStar />{" "}
              {props.beatmap.beatmaps[selectedIndex].difficulty_rating}
            </div>
            <div className="col-span-1 px-2 m-auto">
              <BiTargetLock /> {props.beatmap.beatmaps[selectedIndex].accuracy}
            </div>
          </div>
        </div>
      </section>
      <div className="p-4 grid grid-cols-12">
        <div className="col-span-6 border-black border-2 border-opacity-20">
          <div>
            <h4>Played in:</h4>
            <p>
              {props.beatmap.used_in.length === 0 &&
                "Not included in any pools"}
              {props.beatmap.used_in.length > 0 &&
                props.beatmap.used_in[0].name}
            </p>
          </div>
          <div>
            <h4>Related tags:</h4>
            <div>
              {/* codigo precioso para traer los tags del mapa */}Short, Stream,
              Burst
            </div>
          </div>
        </div>
        <div className="col-start-1 col-span-4"></div>
        <div className="col-span-2 col-start-10 row-start-1">
          <form onSubmit={handleSubmit}>
            <label htmlFor="pool" className="block">
              Add to one of my pools:
            </label>
            <select
              id="pool"
              name="pool"
              onChange={handlePoolChange}
              value={values.poolId}
              className="block mx-4"
            >
              <option disabled selected>
                Select one of your drafts
              </option>
              {myPools.value.data.map((pool) => (
                <option
                  key={pool._id}
                  value={pool._id}
                  label={pool.name}
                ></option>
              ))}
            </select>
            <label htmlFor="mod">Mods:</label>
            <select
              name="mod"
              id="mod"
              onChange={handleModChange}
              className="block mx-4"
            >
              <option value="no_mod" label="No Mod"></option>
              <option value="hard_rock" label="Hard Rock"></option>
              <option value="hidden" label="Hidden"></option>
              <option value="double_time" label="Double Time"></option>
              <option value="free_mods" label="Free Mods"></option>
              <option value="flashlight" label="Flashlight"></option>
              <option value="tie_breaker" label="Tie Breaker"></option>
            </select>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-4 my-4"
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default withFormik({
  mapPropsToValues: () => ({ pool: undefined }),
  handleSubmit: async (values, { props }) => {
    if (values.pool === undefined) {
      return;
    }
    if (values.diff === undefined) {
      values.diff = props.beatmap.beatmaps[0].version;
      console.log(values.diff);
    }
    if (values.mod === undefined) {
      values.mod = "no_mod";
    }
    await methods.patch({
      url: `pools/${values.pool._id}`,
      data: {
        beatmapsets: [
          ...values.pool.beatmapsets,
          {
            reference: props.beatmap._id,
            modifiers: [values.mod],
            difficulty: values.diff,
          },
        ],
      },
    });
  },
  displayName: "BeatmapsWithFormik",
})(Beatmap);

import React from "react";
import { useToggle } from "react-use";
import { FaCaretRight, FaCaretDown } from "react-icons/fa";
export const TournamentCard = (props) => {
  const [on, toggle] = useToggle(true);

  return (
    <div>
      <section
        className="p-4 w-full py-6 flex"
        style={{
          backgroundSize: "cover",
          backgroundBlendMode: "difference",
          backgroundImage: `linear-gradient(rgba(255,255,255, .4), rgba(255,255,255, .4)), url(${"/Placeholder.png"})`,
        }}
      >
        <button className="text-5xl focus:outline-none" onClick={toggle}>
          {on ? <FaCaretRight /> : <FaCaretDown />}
        </button>
        <div>
          <h1>{props.name}</h1>
          <p>Created by: {props.created_by.username}</p>
          {/* formatear ↓ */}
          <p>{props.created_at}</p>
          <p>Pool Amount: {props.pool_amount}</p>
        </div>
      </section>
      <section 
        hidden={on}
        className="bg-gradient-to-b from-gray-900 to-gray-500" 
      >
        {props.pools.map((pool)=><li key={pool._id} className="text-white p-4 font-light">{pool.name} - {pool.beatmap_amount} beatmaps</li>)}
      </section>
    </div>
  );
};
export default TournamentCard;

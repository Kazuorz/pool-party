import React, { useEffect } from "react";
import PoolCard from "./PoolCard";
import useApi from "../../hooks/useApi";

const PoolCardsContainer = () => {
  const {
    get: { state, fetch },
  } = useApi("pools/latest", []);

  useEffect(() => {
    fetch();
  }, [fetch]);
  return (
    <ul className="grid grid-cols-2 gap-4">
      {state.value.data.map((pools) => <li key={pools._id}><PoolCard {...pools} /></li>)}
    </ul>
  )
};

export default PoolCardsContainer;

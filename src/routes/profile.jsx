import React, { useEffect } from "react";
import { useParams } from "react-router";
import BeatmapCard from "../components/BeatmapCards/BeatmapCard";
import useApi from "../hooks/useApi";

const Profile = (props) => {
  const { id } = useParams();
  const {
    get: { state: userState, fetch: fetchUser },
  } = useApi("/users/" + id);
  useEffect(() => {
    fetchUser();
  }, []);

  const {
    get: {state: beatmapsState, fetch: fetchBeatmaps}
  } = useApi(`/users/${id}/beatmaps`)
  useEffect(() => {
    fetchBeatmaps();
  }, [])
  
  if (userState.loading) {
    return null;
  }
  console.log(beatmapsState)
  return (
    <div className="">
      <div>
        <img src={userState.value.data.avatar_url} alt="" className="m-auto" />
        <h1 className="text-5xl text-center">
          {userState.value.data.username}
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-4" >
        
      </div>
    </div>
  );
};

export default Profile;

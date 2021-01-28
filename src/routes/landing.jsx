import React from "react";
import ImgContainer from "../components/ImgContainer";

const Landing = () => {
  return (
    <div>
      <ImgContainer
        source="https://picsum.photos/200/300"
        alt=""
        cName="big-picture"
      />
      <h2> Welcome to the Pool Party!</h2>
      <p className="paragraph">
        Looking for new maps to play? Or maybe you’re a desperate map pooler
        needing some fresh maps that fill the right spot on your list? Then
        you’ve come to the right place.
      </p>
      <p className="paragraph">
        This website was also made by a guy who was desperately looking for the
        perfect beatmap and was tailored towards both finding that hidden gem
        and presenting a group of beatmaps in an easy way.
      </p>
      <legend className="legend">
        That said, let’s jump right into it! Click “Beatmaps” on the navigation
        bar to start looking for new beatmaps!
      </legend>
      <p className="paragraph">
        No registration needed to just look for maps, just go in there, search
        exactly what you want and have fun.
      </p>
      <br />
      <ImgContainer
        source="https://picsum.photos/200/300"
        cName="small-picture"
      />
      <h3 className="inline-h3">Curious about the tournament button?</h3>
      <p className="inline-p">
        We’ve recopiled a bunch of tournaments and their pools so you can easily
        look for those in specific. Worried your amazing newly found pick has
        been already in another tournament? We’ve made sure you’ll know if
        that’s the case.
      </p>
      <ImgContainer
        source="https://picsum.photos/200/300"
        cName="small-picture"
      />
      <h3>But, what about the Map pools button?</h3>
      <p>
        All the pools done before, both from tournaments and by other members
        are there for you to check! If you want to make your own map pool, you
        can do so! Just Register clicking the Log In button and start crafting
        your own pool.
      </p>
    </div>
  );
};

export default Landing;

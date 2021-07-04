import React from "react";
import ImgContainer from "../components/ImgContainer";
import logoEx from "../images/LOGORecurso 7@2x.png";
const Landing = () => {
  return (
    <div className="">
      <section
        className="w-full h-96 pt-8 flex mx-0"
        style={{
          backgroundSize: "cover",
          backgroundBlendMode: "darken",
          backgroundImage: `linear-gradient(to right, rgba(0,0,0, .6), rgba(255,255,255, .6)), url(/Placeholder.png)`,
        }}
      >
        <img src={logoEx} alt="" className="h-24 mx-8 self-center" />
      </section>
      <div className="mx-24 pt-2">
        <h2 className="text-2xl"> Welcome to the Pool Party!</h2>
        <div className="ml-24 mt-8 space-y-8">
          <div>
            <p className="text-justify">
              Looking for new maps to play? Or maybe you’re a desperate map
              pooler needing some fresh maps that fill the right spot on your
              list? Then you’ve come to the right place.
            </p>
            <p className="text-justify">
              This website was also made by a guy who was desperately looking
              for the perfect beatmap and was tailored towards both finding that
              hidden gem and presenting a group of beatmaps in an easy way.
            </p>
            <legend className="font-bold text-center">
              That said, let’s jump right into it! Click “Beatmaps” on the
              navigation bar to start looking for new beatmaps!
            </legend>
            <p className="text-xs text-center">
              No registration needed to just look for maps, just go in there,
              search exactly what you want and have fun.
            </p>
          </div>
          <div className="flex flex-row space-x-12">
            <div className="flex-1">
              <section
                className="w-full h-full"
                style={{
                  backgroundSize: "cover",
                  backgroundBlendMode: "darken",
                  backgroundImage: `linear-gradient(to right, rgba(0,0,0, .6), rgba(255,255,255, .6)), url(/Placeholder.png)`,
                }}
              />
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <h3>Curious about the tournament button?</h3>
              <p>
                We’ve recopiled a bunch of tournaments and their pools so you
                can easily look for those in specific. Worried your amazing
                newly found pick has been already in another tournament? We’ve
                made sure you’ll know if that’s the case.
              </p>
            </div>
          </div>
          <div className="flex flex-row space-x-12">
            <div className="flex flex-col flex-1 justify-center">
              <h3>But, what about the Map pools button?</h3>
              <p>
                All the pools done before, both from tournaments and by other
                members are there for you to check! If you want to make your own
                map pool, you can do so! Just Register clicking the Log In
                button and start crafting your own pool.
              </p>
            </div>
            <div className="flex-1">
            <section
                className="w-full h-full"
                style={{
                  backgroundSize: "cover",
                  backgroundBlendMode: "darken",
                  backgroundImage: `linear-gradient(to right, rgba(0,0,0, .6), rgba(255,255,255, .6)), url(/Placeholder.png)`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;

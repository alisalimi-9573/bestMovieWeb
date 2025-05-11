import React from "react";
import { useState } from "react";
import MoviesListSlider from "../main/MoviesListSlider";

export default function Home() {
  const [activeMovieTap, setActiveMovieTap] = useState("now_playing");

  function changeContentSlider(tap) {
    setActiveMovieTap(tap);
  }

  function activeTap(tap) {
    return tap === activeMovieTap ? "text-yellow-400 text-xl " : "";
  }

  return (
    <div className="container ">
      <div className="py-8">
        <div className="lg:flex lg:items-center lg:gap-3 lg:mb-2">
          <h5>Movies</h5>
          <ul className="list-none px-2 lg:flex lg:gap-4 lg:border lg:rounded-full lg:px-2 lg:py-1 lg:mb-0 [&>*]: cursor-pointer">
            <li onClick={() => changeContentSlider("now_playing")}>
              <a className={activeTap("now_playing")}>Now Playing</a>
            </li>
            <li onClick={() => changeContentSlider("popular")}>
              <a className={activeTap("popular")}>Popular</a>
            </li>
            <li onClick={() => changeContentSlider("top_rated")}>
              <a className={activeTap("top_rated")}>Top Rated</a>
            </li>
          </ul>
        </div>
        <MoviesListSlider activeTap={activeMovieTap} />
      </div>
    </div>
  );
}

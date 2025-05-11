import React from "react";
import MoviesListSlider from "./MoviesListSlider";

export default function MoviesList() {
  return (
    <div className="container">
      <div className="py-8">
        <div className="lg:flex lg:items-center lg:gap-3 lg:mb-2">
          <h5>What's popular</h5>
          <ul className="list-none pl-0 lg:flex lg:gap-4 lg:border lg:rounded-full lg:px-2 lg:py-1 lg:mb-0">
            <li>
              <a href="#">Streaming</a>
            </li>
            <li>
              <a href="#">On TV</a>
            </li>
            <li>
              <a href="#">For Rent</a>
            </li>
            <li>
              <a href="#">In Theaters</a>
            </li>
          </ul>
        </div>
        <MoviesListSlider />
      </div>
    </div>
  );
}

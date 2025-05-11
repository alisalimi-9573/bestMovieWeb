import React from "react";
import Navigation from "./Navigation";
import SearchBar from "./SearchBar/SearchBar";
import FollowUs from "./FollowUs";
import HeaderSlider from "./HeaderSlider";
import bgImage from "../../assets/image/backImage.jpg";
import { useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  return (
    <header
      className={`w-full ${location.pathname !== "/" ? "h-[260px]" : ""}`}
      style={{
        backgroundImage: `linear-gradient(to bottom, #0000006b, #000000c2) ,url(${bgImage})`,
      }}
    >
      <div className="container">
        <Navigation />
        {location.pathname === "/login" ? null : <SearchBar />}
        {location.pathname === "/" ? (
          <>
            <FollowUs />
            <HeaderSlider />
          </>
        ) : null}
      </div>
    </header>
  );
}

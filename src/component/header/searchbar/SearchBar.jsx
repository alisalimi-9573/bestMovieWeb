import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { baseUrl, apiKey } from "../../../apiConfig";
import Person from "./Person";
import Tv from "./Tv";
import MovieSearch from "./MovieSearch";
import { useLocation } from "react-router-dom";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState([]);
  const { pathname } = useLocation();

  useEffect(() => {
    const timeOut = setTimeout(async () => {
      if (query) {
        const searchResult = await axios.get(
          `${baseUrl}/3/search/multi?api_key=${apiKey}&query=${query}`
        );
        setSearch(searchResult.data.results);
      } else {
        setSearch({});
      }
    }, 1000);

    return () => {
      clearTimeout(timeOut);
    };
  }, [query]);

  useEffect(() => {
    setSearch([]);
    setQuery("");
  }, [pathname]);

  function showItems(item) {
    switch (item.media_type) {
      case "person":
        return <Person item={item} />;
      case "tv":
        return <Tv item={item} />;
      case "movie":
        <MovieSearch item={item} />;
    }
  }

  return (
    <section className=" mb-7">
      <input
        id="search_input"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        className="search_input w-full bg-slate-600 py-2 px-1 outline-none border-2 border-slate-900 rounded-md text-white text-xl"
        placeholder="Search Movie and names"
      />
      <div
        className={`bg-slate-500 w-full z-50 rounded-md  transition-all duration-300 opacity-95 ${
          search.length && query
            ? "h-72 overflow-y-scroll"
            : "h-0 overflow-hidden"
        }`}
      >
        {search.length && search.map((item) => showItems(item))}
      </div>
    </section>
  );
}

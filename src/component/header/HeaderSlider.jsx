import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { baseUrl, apiKey, posterImg } from "../../../src/apiConfig";
import axios from "axios";

export default function HeaderSlider() {
  const [movies, setMovies] = useState([]);

  async function getNowPlayingMovies() {
    try {
      const { data } = await axios.get(
        `${baseUrl}/3/movie/now_playing?api_key=${apiKey}`
      );
      setMovies(data.results);
    } catch {
      console.log("on, No");
    }
  }

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  return (
    <div className="mt-8">
      <Swiper
        // breakpoints={{
        //   640: {
        //     slidesPerView: 2,
        //     spaceBetween: 20,
        //   },

        //   768: {
        //     slidesPerView: 3,
        //     spaceBetween: 30,
        //   },

        //   1024: {
        //     slidesPerView: 4,
        //     spaceBetween: 40,
        //   },
        // }}
        modules={[Autoplay]}
        autoplay={{ delay: 2000 }}
        loop
        spaceBetween={20}
        slidesPerView={2}
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <a href="#">
              <img
                className="w-full"
                src={posterImg(movie.poster_path, "w780")}
                alt={movie.title}
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

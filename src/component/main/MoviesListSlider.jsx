import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import MovieCard from "../movies/MovieCard";
import { baseUrl, apiKey, posterImg } from "../../../src/apiConfig";
import axios from "axios";

export default function MoviesListSlider({ activeTap }) {
  console.log(activeTap);
  const [movies, setMovies] = useState([]);
  console.log(movies);

  async function getMoviePosters() {
    try {
      const { data } = await axios.get(
        `${baseUrl}/3/movie/${activeTap}?api_key=${apiKey}`
      );
      console.log(data.results.length);
      setMovies(data.results);
    } catch {
      console.log("oh");
    }
  }

  useEffect(() => {
    getMoviePosters();
  }, [activeTap]);

  return (
    <div className="my-10">
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
        autoplay={{ delay: 1200 }}
        loop
        centeredSlides={true}
        spaceBetween={20}
        slidesPerView={4}
      >
        {movies.map((movie, index) => (
          <SwiperSlide key={index}>
            <MovieCard
              movieVote={movie.vote_average.toFixed(1)}
              movieTitle={movie.title}
              img={posterImg(movie.backdrop_path, "w342")}
              movieId={movie.id}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

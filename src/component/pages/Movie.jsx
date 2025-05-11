import axios from "axios";
import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { baseUrl, apiKey } from "../../apiConfig";
import { UserContext } from "../../context/UserContext";
import ReactStars from "react-rating-stars-component";

export default function Movie() {
  const [movie, setMovie] = useState(null);
  console.log(movie);
  const { id } = useParams();

  const { session, user, favoriteMovies } = useContext(UserContext);

  async function addToWatchList() {
    const result = await axios.post(
      `${baseUrl}/account/${user.id}/favorite/?api_key=${apiKey}&session_id=${session}`,
      {
        media_type: "movie",
        media_id: movie.id,
        favorite: true,
      }
    );
  }

  const ratingChanged = async (newRating) => {
    await axios.post(`${baseUrl}/movie/${movie_id}/rating?api_key=${apiKey}`);
  };

  async function getMovies() {
    const { data } = await axios.get(
      `${baseUrl}/3/movie/${id}?api_key=${apiKey}`
    );

    setMovie(data);
  }

  useEffect(() => {
    getMovies();
  }, [id]);

  return (
    <div>
      {movie ? (
        <div className="container flex flex-col md:flex-row ">
          <div className="basis-52">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt="poster"
            />
          </div>
          <div className="flex flex-col gap-3 px-5 basis-[900px] py-1">
            <div>
              <span className="text-slate-300 mr-5 text-2xl">
                {movie.title}
              </span>
              <span className="text-slate-500">
                {movie.release_date.split("-")[0]}
              </span>
            </div>
            <div className="flex">
              <button className="flex items-center gap-2 text-md mr-5">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-heart"
                    viewBox="0 0 16 16"
                  >
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                  </svg>
                </span>
                Add to favorite
              </button>
              <button className="flex items-center gap-2 text-md mr-5">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-share"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" />
                  </svg>
                </span>{" "}
                Share
              </button>
            </div>
            <div className="flex justify-between items-centerborder-t-2 border-b-2">
              <div className="flex items-center">
                <span className="mr-3">
                  <svg
                    className="text-yellow-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="currentColor"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                </span>
                <span>{parseInt(movie.vote_average)} / 10</span>
              </div>
              <div className="flex items-center gap-3">
                <span>Rate to movie</span>
                <ReactStars
                  count={5}
                  value={parseInt(movie.vote_average) / 2}
                  onChange={ratingChanged}
                  size={30}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                />
              </div>
            </div>
            <div>{movie.overview}</div>
          </div>
        </div>
      ) : (
        <h1>movie not found</h1>
      )}
    </div>
  );
}

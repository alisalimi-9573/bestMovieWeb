import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { baseUrl, apiKey } from "../../apiConfig";

export default function People() {
  const [peopleDetail, setPeopleDetail] = useState([]);
  const [peopleCasting, setPeopleCasting] = useState([]);
  const [peopleCrew, setPeopleCrew] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const text = peopleDetail.biography || "Biography not available.";

  console.log("crew", peopleCrew);
  console.log("cast", peopleCasting);
  console.log("detail", peopleDetail);

  const { id } = useParams();

  async function getPeople() {
    const { data } = await axios.get(
      `${baseUrl}/3/person/${id}?api_key=${apiKey}`
    );
    setPeopleDetail(data);
  }

  async function getPeopleMovies() {
    const { data } = await axios.get(
      `${baseUrl}/3/person/${id}/movie_credits?api_key=${apiKey}`
    );
    setPeopleCasting(data.cast);
    setPeopleCrew(data.crew);
  }

  useEffect(() => {
    getPeople();
    getPeopleMovies();
  }, [id]);

  return (
    <>
      <div className="container bg-slate-600">
        <div className="flex">
          <div className="w-40 h-60">
            <div>
              {peopleDetail && (
                <img
                  src={`https://image.tmdb.org/t/p/w500${peopleDetail.profile_path}`}
                  alt={peopleDetail.name}
                />
              )}
            </div>
          </div>
          <div className="w-60">
            {peopleDetail && (
              <>
                <div>
                  <ul>
                    <li className="text-yellow-500">{peopleDetail.name}</li>
                    <li>{peopleDetail.birthday}</li>
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>

        <div>
          {peopleDetail && (
            <>
              <p>
                {showMore ? text : `${text.substring(0, 255)}`}
                <button
                  className="ml-4 text-orange-500"
                  onClick={() => setShowMore(!showMore)}
                >
                  {showMore ? "show less" : "show more"}
                </button>
              </p>
            </>
          )}
        </div>

        <div className="flex m-5 p-3 bg-slate-400">
          <h5>crew</h5>
          <div className="overflow-x-scroll flex">
            {peopleCrew &&
              peopleCrew.map((cast) => (
                <>
                  <ul className="flex">
                    <li className="w-24 h-32 mb-2">
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${cast.poster_path}`}
                        alt=""
                      />
                    </li>
                  </ul>
                </>
              ))}
          </div>
        </div>

        <div className="flex m-5 p-3 bg-slate-400">
          <h5>casting</h5>
          <div className="overflow-x-scroll flex">
            {peopleCasting &&
              peopleCasting.map((crew) => (
                <>
                  <ul className="flex">
                    <li className="w-24 h-32 mb-2">
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${crew.poster_path}`}
                        alt=""
                      />
                    </li>
                  </ul>
                </>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

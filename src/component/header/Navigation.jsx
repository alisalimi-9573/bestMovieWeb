import React, { useState, useContext, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { useLocation } from "react-router-dom";

export default function Navigation() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const { user, logout } = useContext(UserContext);
  const location = useLocation();

  useEffect(() => {
    setIsOpenMenu(false);
  }, [location]);

  function hamMenu() {
    const menu = document.getElementById("menu");
    if (isOpenMenu) {
      menu.classList.add("hidden");
      setIsOpenMenu(false);
    } else {
      menu.classList.remove("hidden");
      setIsOpenMenu(true);
    }
  }

  return (
    <>
      <nav className="flex text-white pt-6 items-center mb-2 md:mb-8 md:text-sm relative">
        <div className="flex items-center">
          <Link to={"/"}>
            <h1 className="mr-20 text-2xl md:text-lg md:mr-0">
              Best<span className="text-rose-500">Movies</span>
            </h1>
          </Link>
          <ul className="hidden md:flex md:text-xs  md:gap-1 lg:text-base lg:gap-5">
            <li>
              {/* <NavLink to="/">Movies</NavLink> */}
              <NavLink to={"/movies"}>Movies</NavLink>
            </li>
            <li>
              <NavLink to="/tv">TV Shows</NavLink>
            </li>
            <li>
              <NavLink to="/people">People</NavLink>
            </li>
            <li>
              <NavLink to="#">More</NavLink>
            </li>
          </ul>
        </div>
        <div className="hidden md:block ml-auto">
          {Object.keys(user).length ? (
            <>
              <div>{user.userName}</div>
              <button
                onClick={logout}
                className="bg-rose-600 hover:bg-rose-700 md:px-2 md:py-1 lg:px-6 lg:py-2 rounded-3xl "
              >
                logout
              </button>
            </>
          ) : (
            <ul className="flex md:gap-5 lg:gap-10">
              <li className="md:text-sm lg:text-xl">
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink
                  to="/signup"
                  className="bg-rose-600 hover:bg-rose-700 md:px-2 md:py-1 lg:px-6 lg:py-2 rounded-3xl "
                >
                  SignUp
                </NavLink>
              </li>
            </ul>
          )}
        </div>
        <div className="md:hidden ml-auto">
          <button onClick={hamMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              fill="currentColor"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
              />
            </svg>
          </button>
        </div>
      </nav>
      <div
        id="menu"
        className={`md:hidden z-10 bg-slate-700 transition-all duration-500 overflow-hidden ${
          isOpenMenu ? "h-72" : "h-0"
        }`}
      >
        <ul className="flex flex-col  items-center pl-0 gap-4 py-4">
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
          <li>
            <NavLink to="/people">People</NavLink>
          </li>
          <li>
            <NavLink to="/tv">TV Shows</NavLink>
          </li>
          <li>
            <NavLink to="#">More</NavLink>
          </li>
        </ul>
        <div className="flex justify-center items-center gap-6">
          <input type="button" value="/signup" />
          <input
            className="bg-rose-600 py-1 px-3 rounded-3xl hover:bg-rose-700"
            type="button"
            value="/LogIn"
          />
        </div>
      </div>
    </>
  );
}

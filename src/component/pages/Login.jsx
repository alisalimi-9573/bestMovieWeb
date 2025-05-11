import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Toaster } from "react-hot-toast";

export default function Login() {
  const { login } = useContext(UserContext);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    login(userName, password);
  }

  return (
    <>
      <div className="px-10 my-10">
        <form
          action="#"
          method="post"
          className="flex flex-col gap-2 text-black "
          onSubmit={handleSubmit}
        >
          <label htmlFor="name" className="text-white">
            user name :{" "}
          </label>
          <input
            className="p-1"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            placeholder="user name"
            type="text"
            name="name"
            id="name"
          />
          <label htmlFor="pass" className="text-white">
            password :{" "}
          </label>
          <input
            className="p-1"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="password"
            type="password"
            name="password"
            id="password"
          />
          <input
            type="submit"
            value="login"
            className="my-2 px-4 py-1 bg-rose-500 text-black"
          />
        </form>
      </div>
      <Toaster />
    </>
  );
}

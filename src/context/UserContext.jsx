import { useState } from "react";
import { createContext } from "react";
import axios from "axios";
import { baseUrl, apiKey } from "../apiConfig";
import toast, { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [session, setSession] = useState(() => localStorage.getItem("session"));

  async function getUserData() {
    const { data } = await axios.get(
      `${baseUrl}/3/account/api_key=59f5436394f6c62aaf0669fe1d77453f&session_id=${session}`
    );
  }

  useEffect(() => {
    getUserData();
    // setUser(data);
  }, [session]);

  function logout() {
    setUser({});
    setSession(null);
    localStorage.clear();
  }

  async function login(username, password) {
    try {
      const tokenResult = await axios.get(
        `${baseUrl}/3/authentication/token/new?api_key=${apiKey}`
      );

      const authorize = axios.post(
        `${baseUrl}/3/authentication/token/validate_with_login?api_key=${apiKey}`,
        {
          username,
          password,
          request_token: tokenResult.data.request_token,
        }
      );

      const session = await axios.post(
        `${baseUrl}/3/authentication/session/new?api_key=${apiKey}&RAW_BODY=${authorize}`,
        {
          request_token: tokenResult.data.request_token,
        }
      );
      setSession(session.data.session_id);
      localStorage.setItem("session", session.data.session_id);
      navigate("/profile", {
        replace: true,
      });
    } catch {
      toast.error("LOGIN ERROR.");
    }
  }

  return (
    <UserContext.Provider
      value={{ user, login, session, logout, favoriteMovies }}
    >
      {children}
    </UserContext.Provider>
  );
}

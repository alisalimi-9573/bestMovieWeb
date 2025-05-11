import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./component/pages/Home";
import Movies from "./component/pages/Movies";
import Movie from "./component/pages/Movie";
import Login from "./component/pages/Login";
import UserProvider from "./context/UserContext";
import People from "./component/pages/People";
import Profile from "./component/pages/Profile";

export const router = createBrowserRouter([
  {
    element: (
      <UserProvider>
        <App />
      </UserProvider>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/movies",
        element: <Movies />,
      },
      {
        path: "/movies/:id",
        element: <Movie />,
      },
      {
        path: "/tv",
        element: <h1 className="text-center py-10 bg-slate-300">tv shows</h1>,
      },
      {
        path: "/people",
        element: <h1 className="text-center py-10 bg-slate-300">people</h1>,
      },
      {
        path: "/people/:id",
        element: <People />,
      },
      {
        path: "/signup",
        element: <h1 className="text-center py-10 bg-slate-300">signup</h1>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);

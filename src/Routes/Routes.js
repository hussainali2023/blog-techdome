import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Blog from "../Pages/Blog";
import SignUp from "../Pages/SignUp";
import Login from "../Pages/Login";
import AddBlog from "../Pages/AddBlog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Blog />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/add-blog",
        element: <AddBlog />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;

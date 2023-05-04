import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../pages/Blog/Blog";
import ChefData from "../pages/Home/Chef/ChefData";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const router = createBrowserRouter([
  
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "chef",
        element: <ChefData></ChefData>,
      },
      {
        path: '/login',
        element: <Login></Login>    
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ],
  },
]);

export default router;

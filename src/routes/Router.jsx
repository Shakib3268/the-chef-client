import { createBrowserRouter } from "react-router-dom";
import Error from "../Error/Error";
import Main from "../Layout/Main";
import Blog from "../pages/Blog/Blog";
import ChefData from "../pages/Home/Chef/ChefData";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ViewRecipe from "../pages/ViewRecipe/ViewRecipe";
import PrivateRoute from "./PrivateRoute";

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
        path: "/chef/:id",
        element: <PrivateRoute><ViewRecipe></ViewRecipe></PrivateRoute>,
        loader: ({params}) => fetch(`https://the-chef-server-drab.vercel.app/chef/${params.id}`)
      },
      {
        path: '/login',
        element: <Login></Login>    
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '*',
        element: <Error></Error>
      }
    ],
  },
]);

export default router;

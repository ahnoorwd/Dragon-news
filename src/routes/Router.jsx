import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../layouts/Home";
import NewsPages from "../pages/NewsPages";
import Authlayout from "../layouts/Authlayout";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import NewssDetails from "../pages/NewssDetails";
import Private from "./Private";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Navigate to={"/category/01"}></Navigate>,
      },
      {
        path: "/category/:id",
        element: <NewsPages></NewsPages>,
        loader: ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/news/category/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/news/:id",
    element: <Private><NewssDetails></NewssDetails></Private>,
    loader:({params})=> fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
  },
  {
    path: "/auth",
    element: <Authlayout></Authlayout>,
    children:[
        {
            path:"/auth/login",
            element:<LoginPage></LoginPage>
        },
        {
            path:"/auth/register",
            element:<RegisterPage></RegisterPage>
        }
    ]
  },
  {
    path: "*",
    element: <h1>There is Nothing here </h1>,
  },
]);

export default Router;

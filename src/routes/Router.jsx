import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../layouts/Home";

const Router = createBrowserRouter([
{
    path:'/',
    element:<Home></Home>,
    children:[

        {
        path:"/",
        element:<Navigate to={'/category/01'}></Navigate>
        },
        {
            path:"/category/:id",
            element:<h2>this all element of  the page</h2>
        }
    ]
    
},
{
    path:"/news",
    element:<h1>news Layout</h1>,
},
{
path:"/auth",
element:<h1>login</h1>
},
{
    path:"*",
    element:<h1>There is Nothing here </h1>
}
])



export default Router;  
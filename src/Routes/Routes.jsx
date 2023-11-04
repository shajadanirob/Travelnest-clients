import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Services from "../Pages/Services/Services";
import Login from "../Pages/Login/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/TravelNest/services',
                element:<Services></Services>
            },
            {
                path:'/TravelNest/dashboard'
            },
            {
                path:'/TravelNest/login',
                element:<Login></Login>
            }
        ]
    },
]);
export default router
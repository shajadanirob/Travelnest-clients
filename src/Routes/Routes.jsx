import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Services from "../Pages/Services/Services";
import Login from "../Pages/Login/Login";
import DashBoard from "../Pages/DashBoard/DashBoard";
import AddServices from "../Pages/DashBoard/AddServices";
import UpdateServices from "../Pages/DashBoard/UpdateServices";
import Schedules from "../Pages/DashBoard/Schedules";

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
                path:'/TravelNest/dashboard',
                element:<DashBoard></DashBoard>,
                children:[
                    {
                        path:'/TravelNest/dashboard',
                        element:<AddServices></AddServices>
                    },
                    {
                        path:'/TravelNest/dashboard/updated',
                        element:<UpdateServices></UpdateServices>
                    },
                    {
                        path:'/TravelNest/dashboard/schedules',
                        element:<Schedules></Schedules>
                    }
                ]
            },
            {
                path:'/TravelNest/login',
                element:<Login></Login>
            }
        ]
    },
]);
export default router
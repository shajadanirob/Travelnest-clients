import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Services from "../Pages/Services/Services";
import Login from "../Pages/Login/Login";
import DashBoard from "../Pages/DashBoard/DashBoard";
import AddServices from "../Pages/DashBoard/AddServices";
import Schedules from "../Pages/DashBoard/Schedules";
import Register from "../Pages/Register/Register";
import ManageService from "../Pages/DashBoard/ManageService";
import UpdateServices from "../Pages/DashBoard/UpdateServices";

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
                path:'/TravelNest/update/:id',
                element:<UpdateServices></UpdateServices>,
                loader:({params}) => fetch(`http://localhost:5000/update/${params.id}`)
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
                        element:<ManageService></ManageService>
                    },
                    {
                        path:'/TravelNest/dashboard/schedules',
                        element:<Schedules></Schedules>
                    },
                    
                ]
            },
            {
                path:'/TravelNest/login',
                element:<Login></Login>
            },
            {
                path:'/TravelNest/register',
                element:<Register></Register>
            },
           
        ]
    },
]);
export default router
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
import MyBookings from "../Pages/DashBoard/MyBookings";
import MyPendingWork from "../Pages/DashBoard/MyPendingWork";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import ServicesDetails from "../Pages/Services/ServicesDetals/ServicesDetails";
import Modal from "../Pages/Services/ServicesDetals/Modal";

import SingleServices from "../Pages/Services/SingleServices";

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
                element:<Services></Services>,
                loader: () => fetch('http://localhost:5000/services')
            },
            {
                path:'/services/:id',
                element:<PrivetRoute>
                    <ServicesDetails></ServicesDetails>
                </PrivetRoute>,
                loader:({params}) => fetch(`http://localhost:5000/services/${params.id}`)

            },
            {
                path:'/services/:id',
                element:<Modal></Modal>,
                loader:({params}) => fetch(`http://localhost:5000/services/${params.id}`)

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
                        element:<PrivetRoute>
                            <AddServices></AddServices>
                        </PrivetRoute>
                    },
                    {
                        path:'/TravelNest/dashboard/updated',
                        element:<PrivetRoute>
                            <ManageService></ManageService>
                        </PrivetRoute>
                    },
                    {
                        path:'/TravelNest/dashboard/schedules',
                        element:<PrivetRoute>
                            <Schedules></Schedules>
                        </PrivetRoute>
                    },
                    {
                       path:'/TravelNest/dashboard/bookings',
                       element:<PrivetRoute>
                        <MyBookings></MyBookings>
                       </PrivetRoute> 
                    },
                    {
                        path:'/TravelNest/dashboard/pending',
                        element:<PrivetRoute>
                            <MyPendingWork></MyPendingWork>
                        </PrivetRoute>
                    }
                    
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
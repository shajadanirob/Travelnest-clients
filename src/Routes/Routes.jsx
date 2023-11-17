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
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Allusers from "../Pages/DashBoard/AllUsers/Allusers";
const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
              
                element:<Home></Home>,
                errorElement:<ErrorPage></ErrorPage>
            },
            {
                path:'/TravelNest/services',
                
                element:<Services></Services>,
                
            },
            {
                path:'/services/:id',
                errorElement:<ErrorPage></ErrorPage>,
                element:<PrivetRoute>
                    <ServicesDetails></ServicesDetails>
                </PrivetRoute>,
                loader:({params}) => fetch(`https://y-ebon-seven.vercel.app/services/${params.id}`)

            },

            {
                path:'/services/:id',
                errorElement:<ErrorPage></ErrorPage>,
                element:<Modal></Modal>,
                loader:({params}) => fetch(`https://y-ebon-seven.vercel.app/services/${params.id}`)

            },
            {
                path:'/TravelNest/update/:id',
                errorElement:<ErrorPage></ErrorPage>,
                element:<UpdateServices></UpdateServices>,
                loader:({params}) => fetch(`https://y-ebon-seven.vercel.app/update/${params.id}`)
            },
            {
                path:'/TravelNest/dashboard',
                errorElement:<ErrorPage></ErrorPage>,
                element:<DashBoard></DashBoard>,
                children:[
                    {
                        path:'/TravelNest/dashboard',
                        errorElement:<ErrorPage></ErrorPage>,
                        element:<PrivetRoute>
                            <AddServices></AddServices>
                        </PrivetRoute>
                    },
                    {
                        path:'/TravelNest/dashboard/updated',
                        errorElement:<ErrorPage></ErrorPage>,
                        element:<PrivetRoute>
                            <ManageService></ManageService>
                        </PrivetRoute>
                    },
                    {
                        path:'/TravelNest/dashboard/schedules',
                        errorElement:<ErrorPage></ErrorPage>,
                        element:<PrivetRoute>
                            <Schedules></Schedules>
                        </PrivetRoute>
                    },
                    {
                       path:'/TravelNest/dashboard/bookings',
                       errorElement:<ErrorPage></ErrorPage>,
                       element:<PrivetRoute>
                        <MyBookings></MyBookings>
                       </PrivetRoute> 
                    },
                    {
                        path:'/TravelNest/dashboard/pending',
                        errorElement:<ErrorPage></ErrorPage>,
                        element:<PrivetRoute>
                            <MyPendingWork></MyPendingWork>
                        </PrivetRoute>,
                    },
                    
                    {
                        path:'/TravelNest/dashboard/allUsers',
                        errorElement:<ErrorPage></ErrorPage>,
                        element:<PrivetRoute>
                            <Allusers></Allusers>
                        </PrivetRoute>,
                    }
                    
                ]
            },
            {
                path:'/TravelNest/login',
                errorElement:<ErrorPage></ErrorPage>,
                element:<Login></Login>
            },
            {
                path:'/TravelNest/register',
                errorElement:<ErrorPage></ErrorPage>,
                element:<Register></Register>
            },
           
        ]
    },
]);
export default router
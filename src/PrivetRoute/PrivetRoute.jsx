import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";



const PrivetRoute = ({children}) => {
    const { user, loading } = UseAuth();
    const location = useLocation()
     
     if (loading) return <>
     <div className="flex items-center justify-center h-screen">
 <div className="relative">
     <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
     <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin">
     </div>
 </div>
</div>
     </>
 
     if (user) {
         return children
     }
 
 
     return <Navigate state={location.pathname} to='/TravelNest/login'></Navigate>
};

export default PrivetRoute;
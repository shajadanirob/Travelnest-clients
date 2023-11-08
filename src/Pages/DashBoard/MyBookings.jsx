
import { useEffect, useState } from "react";
import UseAuth from "../../Hooks/UseAuth";
import SingleMybooking from "./SingleMybooking";
import UserAxiosSecure from "../../Hooks/UserAxiosSecure";


const MyBookings = () => {
    const{user} =UseAuth()
    const axiosSecure = UserAxiosSecure()

    const [bookings ,setBookings] = useState([])
    const url = `http://localhost:5000/bookings?email=${user?.email}`
    useEffect(() =>{
        axiosSecure.get(url)
        .then(res => setBookings(res.data))
    },[url,axiosSecure])

    return (
        <div>
           
           <div>
            {
               bookings.length === 0 ? <p className="text-center flex items-center justify-center text-3xl font-semibold text-red-700">You have no booking please book now</p> : bookings.map(booking => <SingleMybooking key={booking._id} booking={booking}></SingleMybooking>)
            }
           </div>
        </div>
    );
};

export default MyBookings;
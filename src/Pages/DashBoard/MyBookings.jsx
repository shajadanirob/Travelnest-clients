import { useEffect, useState } from "react";
import UseAuth from "../../Hooks/UseAuth";
import SingleMybooking from "./SingleMybooking";


const MyBookings = () => {
    const{user} =UseAuth()
    const [bookings ,setBookings] = useState([])
    const url = `http://localhost:5000/bookings?email=${user?.email}`
    fetch(url)
    .then(res => res.json())
    .then(data => setBookings(data))
    return (
        <div>
           
           <div>
            {
                bookings.map(booking => <SingleMybooking key={booking._id} booking={booking}></SingleMybooking>)
            }
           </div>
        </div>
    );
};

export default MyBookings;
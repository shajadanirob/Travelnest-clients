import { useEffect, useState } from "react";
import UseAuth from "../../Hooks/UseAuth";
import SingleMybooking from "./SingleMybooking";
import UserAxiosSecure from "../../Hooks/UserAxiosSecure";

const MyBookings = () => {
    const { user } = UseAuth();
    const axiosSecure = UserAxiosSecure();

    const [bookings, setBookings] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    console.log(totalPrice)

    useEffect(() => {
        if (user) {
            const url = `https://y-ebon-seven.vercel.app/bookings?email=${user?.email}`;
            axiosSecure
                .get(url)
                .then((res) => {
                    console.log(res.data); // Check the data you are receiving
                    setBookings(res.data);

                    // Calculate total price when bookings are updated
                    const total = res.data.reduce((acc, booking) => acc + parseInt(booking.price), 0);
                    console.log(total); // Check the calculated total
                    setTotalPrice(total);
                })
                .catch((error) => {
                    console.error("Error fetching bookings:", error);
                });
        }
    }, [axiosSecure, user]);


    return (
        <div>
            <div class="p-4 max-w-xl mx-auto mt-16">
                <div class="bg-white shadow-lg rounded-lg overflow-hidden">
                    <div class="flex items-center justify-between px-4 py-3 bg-gray-200">
                        <h1 class="text-lg font-bold">Shopping Cart</h1>
                        <span class="text-gray-600">{bookings.length}</span>
                    </div>
                    <div class="p-4">
                        {bookings.length === 0 ? (
                            <p className="text-center flex items-center justify-center text-3xl font-semibold text-red-700">
                                You have no bookings. Please book now.
                            </p>
                        ) : (
                            bookings.map((booking) => (
                                <SingleMybooking key={booking._id} booking={booking}></SingleMybooking>
                            ))
                        )}
                    </div>
                    <div class="px-4 py-3 bg-gray-200">
                        <div class="flex justify-between items-center">
                            <span class="font-bold text-lg">Total:</span>
                            <span class="font-bold text-lg">${totalPrice}</span>
                        </div>
                        <button class="block w-full mt-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                            Checkout
                        </button>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    );
};

export default MyBookings;

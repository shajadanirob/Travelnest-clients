import { useLoaderData } from "react-router-dom";
import Modal from "./Modal";
import { useState } from "react";
import RelatedService from "../../../Components/RelatedService/RelatedService";



const ServicesDetails = () => {
    const servicesData = useLoaderData()
    const{_id,userName,userEmail,ServiceName,price,serviceDescription,image,servicesArea,providerImg} = servicesData;

    const [bookings ,setBookings] = useState([])
    const url = `https://y-ebon-seven.vercel.app/service/${userEmail}`
    fetch(url)
    .then(res => res.json())
    .then(data => setBookings(data))

    return (
        <div>
   <div className="flex flex-wrap">
    <div className="flex flex-col-reverse lg:flex-row">
    <div className="w-full sm:w-8/12 mt-10">
      <div className="container mx-auto h-full sm:p-10">
        <header className="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
          <div className="w-full">
            <h1 className="text-4xl lg:text-6xl font-bold">{ServiceName}</h1>
            <h3 className="text-2xl my-5">Services Provide by:</h3>
            <div className="flex my-5">
    <div className="relative">
        <img className="h-16 w-16 rounded-full object-cover" src={providerImg} alt="Avatar"/>
        <div className="absolute inset-0 rounded-full shadow-inner"></div>
    </div>
    <div className="ml-4">
        <h2 className="font-bold text-lg">Name: {userName}</h2>
        <h2>Services Area: {servicesArea}</h2>
    </div>
</div>


            <div className="w-20 h-2 bg-green-700 my-4"></div>
            <p className="text-[16px] mt-10">{serviceDescription}</p>
           



<button className="btn bg-[#E5AE49]  my-5" onClick={()=>document.getElementById('my_modal_4').showModal()}>Book Now</button>


<Modal></Modal>

          </div>
        </header>
      </div>
    </div>
    <img src={image} alt="Leafs" className="w-full h-48 mt-10 object-cover sm:h-screen sm:w-4/12"/>
    </div>
    <div className="pt-12 px-6 mx-auto">
      <h1 className="text-3xl my-5 text-center">Related Service</h1>
    <div className=" grid grid-cols-1 lg:grid-cols-3 gap-5">
    {
      bookings.map(booking => <RelatedService key={booking._id} booking={booking}></RelatedService>)
    }
  </div>
</div>

   
  </div>
  


        </div>
        
    );
};

export default ServicesDetails;
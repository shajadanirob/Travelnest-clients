import { useLoaderData } from "react-router-dom";
import Modal from "./Modal";
import { useState } from "react";
import RelatedService from "../../../Components/RelatedService/RelatedService";
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";



const ServicesDetails = () => {
  
  useEffect(() =>{
    Aos.init();
      },[])


    const servicesData = useLoaderData()
    const{_id,userName,userEmail,ServiceName,price,serviceDescription,image,servicesArea,providerImg} = servicesData;

    const [bookings ,setBookings] = useState([])
    const url = `https://y-ebon-seven.vercel.app/service/${userEmail}`
    fetch(url)
    .then(res => res.json())
    .then(data => setBookings(data))

    return (
        <div className="my-15 lg:my-24">
   <div className="flex flex-wrap">
    <div className="flex flex-col-reverse md:flex-row">
    <div className="w-full sm:w-8/12 mt-10">
      <div className="container mx-auto h-full sm:p-10">
        <header className="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
          <div data-aos='zoom-in-up' className="w-full">
            <h1 className="text-4xl lg:text-6xl font-bold">{ServiceName}</h1>
            <h3 className="text-2xl my-5">Services Provide by:</h3>
            <div className="flex my-5">
    <div className="relative">
        <img className="h-16 w-16 rounded-full object-cover" src={providerImg} alt="Avatar"/>
        <div className="absolute inset-0 rounded-full shadow-inner"></div>
    </div>
    <div data-aos='zoom-in-down' className="ml-4">
        <h2 className="font-bold text-lg">Name: {userName}</h2>
        <h2>Services Area: {servicesArea}</h2>
    </div>
</div>


            <div data-aos='zoom-in-up' className="w-20 h-2 bg-green-700 my-4"></div>
            <p className="text-[16px] mt-10">{serviceDescription}</p>
           



<button data-aos='zoom-in-down' className="inline-flex text-white bg-[#5c98f2] border-0  focus:outline-none hover:bg-[5c98f2] rounded-full py-2 px-6 text-lg  my-5" onClick={()=>document.getElementById('my_modal_4').showModal()}>Book Now</button>


<Modal></Modal>

          </div>
        </header>
      </div>
    </div>
    <img data-aos='zoom-in-up' src={image} alt="Leafs" className="w-full h-48 mt-10 object-cover sm:h-screen sm:w-4/12"/>
    </div>
    <div className="max-w-screen-xl mx-auto px-8 md:px-16 lg:px-24 py-5">
      <h2  data-aos='zoom-in-up' className="font-bold text-[#000000] text-2xl sm:text-3xl md:text-4xl text-center my-10 lg:text-5xl">
      Related  <span className="text-[#5c98f2]">Service</span>
        </h2>
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
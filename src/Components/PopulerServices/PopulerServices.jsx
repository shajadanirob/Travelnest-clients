import { useEffect } from "react";
import { useState } from "react";
import SinglePopuler from "./SinglePopuler";
import { Link } from "react-router-dom";
import Aos from 'aos';
import 'aos/dist/aos.css'


const PopulerServices = () => {
  const [populers ,setPopulers] = useState([]);
  useEffect(() =>{
    fetch('https://y-ebon-seven.vercel.app/services')
    .then(res => res.json())
    .then(data => setPopulers(data))
  },[])
  useEffect(() =>{
    Aos.init();
      },[])


    return (
      <div className="  max-w-screen-xl mx-auto px-8 md:px-16 lg:px-24 py-5 ">
        <h2  data-aos='zoom-in-up' className="font-bold text-[#000000] text-2xl sm:text-3xl md:text-4xl text-center my-10 lg:text-5xl">
        Popular <span className="text-[#5c98f2]">Tours</span>
        </h2>
    

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {
            populers.slice(0,4).map(populer => <SinglePopuler key={populer._id} populer={populer}></SinglePopuler>)
          }


        </div>
        <Link to='/TravelNest/services' className="flex justify-center items-center my-5">
          <button  data-aos='zoom-in-down' className="inline-flex text-white bg-[#5c98f2] border-0  focus:outline-none hover:bg-[5c98f2] rounded-full py-2 px-6 text-lg">See All</button>
        </Link>
      </div>
    );
};

export default PopulerServices;
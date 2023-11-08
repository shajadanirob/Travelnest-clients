import { useEffect } from "react";
import { useState } from "react";
import SinglePopuler from "./SinglePopuler";


const PopulerServices = () => {
  const [populers ,setPopulers] = useState([]);
  useEffect(() =>{
    fetch('https://y-ebon-seven.vercel.app/services')
    .then(res => res.json())
    .then(data => setPopulers(data))
  },[])

    return (
      <div className=" pt-12 px-6 md:px-20 ">
               <p className="text-[#efae37] text-xl my-5 text-center flex justify-center items-center md:text-left">POPULAR SERVICES</p>
        <h2 className="font-bold text-[#111111] text-2xl sm:text-3xl md:text-4xl text-center my-10 lg:text-5xl">
           Popular Services
        </h2>
    

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {
            populers.slice(0,4).map(populer => <SinglePopuler key={populer._id} populer={populer}></SinglePopuler>)
          }


        </div>
      </div>
    );
};

export default PopulerServices;
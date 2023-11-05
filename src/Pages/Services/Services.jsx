import { useEffect, useState } from "react";
import SingleServices from "./SingleServices";


const Services = () => {
    const [services,setServices] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res =>res.json())
        .then(data => setServices(data))
    },[])
    // 
    return (
        <div>
<div className="hero h-[60vh]" style={{backgroundImage: 'url(https://i.ibb.co/NjtKsn5/woman-holiday-journey-travel-relaxation.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Our Services</h1>
      <div className="relative z-30 text-base flex text-black">
       <input type="text" className="mt-2 shadow-md focus:outline-none rounded-2xl py-3 px-6 block w-full" placeholder="Search services..." />
        </div>
        <div className="flex justify-center items-center">
       <button className="btn my-4">Search</button>
       </div>

      
    
    </div>
  </div>
</div>






            <div className=" pt-12 px-6 md:px-20 ">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
           {
            services.map(service =><SingleServices key={services._id} service={service}></SingleServices>)
           }
        </div>
            </div>
        </div>
    );
};

export default Services;
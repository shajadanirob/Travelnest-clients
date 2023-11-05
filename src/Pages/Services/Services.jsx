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
            {/* <div style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}
    className="py-52 px-1 md:px-8 text-center bg-opacity-60 relative text-white font-bold text-2xl md:text-3xl overflow-auto">
    <h1 className="pb-4">Search for Services</h1>
    <div className="w-11/12 md:w-3/4 lg:max-w-3xl m-auto">
        <div className="relative z-30 text-base text-black"><input type="text" value="" placeholder="Keyword" className="mt-2 shadow-md focus:outline-none rounded-2xl py-3 px-6 block w-full"/>
            <div
                className="text-left absolute top-10 rounded-t-none rounded-b-2xl shadow bg-white divide-y w-full max-h-40 overflow-auto">
            </div>
        </div>
    </div>
</div> */}
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
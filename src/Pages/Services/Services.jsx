import { useEffect, useState } from "react";
import SingleServices from "./SingleServices";


const Services = () => {
    const [services,setServices] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res =>res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>

            <div className=" pt-12 px-6 md:px-20 ">
            <div className="grid grid-cols-3 gap-5">
           {
            services.map(service =><SingleServices key={services._id} service={service}></SingleServices>)
           }
        </div>
            </div>
        </div>
    );
};

export default Services;
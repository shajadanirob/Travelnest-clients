import { useEffect, useState } from "react";
import SingleServices from "./SingleServices";
import { useLoaderData } from "react-router-dom";
import Aos from 'aos';
import 'aos/dist/aos.css'

const Services = () => {
    useEffect(() =>{
        Aos.init();
          },[])
  
    const [originalServices, setOriginalServices] = useState([]);
    const [services, setServices] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isShow,setIsShow] = useState(false)
    useEffect(()=>{
        fetch('https://y-ebon-seven.vercel.app/services')
        // fetch('http://localhost:5000/services')
        .then(res =>res.json())
        .then(data => {
            setServices(data)
            setOriginalServices(data)
        } )
    },[])
    const handleSearchChange = (e) => {
        e.preventDefault()
        const search = e.target.value;
        console.log(search)

        setSearchTerm(search);
    
        if (!search) {
            // If the search term is empty, show all services
            setServices(originalServices);
          } else {
            const filtered = services.filter((service) =>
              service.ServiceName.toLowerCase().includes(search.toLowerCase())
            );
            setServices(filtered);
          }
      };
    // 

  


    return (
        <div className="">
<div class="mx-auto max-w-7xl sm:px-6 my-10 lg:px-8">
    <div
    data-aos='zoom-in-up'
        class="relative isolate overflow-hidden bg-white px-6 py-20 text-center sm:px-16 sm:shadow-sm dark:bg-transparent">
        <p class="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-200 sm:text-4xl">
        Destinations
        </p>


        <form  onChange={handleSearchChange }>
            <label
                class="mx-auto mt-8 relative bg-white min-w-sm max-w-2xl flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-2xl focus-within:border-gray-300"
                for="search-bar">

                <input id="search-bar" placeholder="your keyword here" name="search" value={searchTerm}
                    class="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white" required=""/>
                {/* <button type="submit"
                    class="w-full md:w-auto px-6 py-3 bg-black border-black text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-xl transition-all">
                    <div class="flex items-center transition-all opacity-1">
                        <span class="text-sm font-semibold whitespace-nowrap truncate mx-auto">
                            Search
                        </span>
                    </div>
                </button> */}
            </label>
        </form>

        <svg viewBox="0 0 1024 1024"
            class="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
            aria-hidden="true">
            <circle cx="512" cy="512" r="512" fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" fill-opacity="0.7">
            </circle>
            <defs>
                <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                    <stop stop-color="#3b82f6"></stop>
                    <stop offset="1" stop-color="#1d4ed8"></stop>
                </radialGradient>
            </defs>
        </svg>
    </div>
</div>





            <div className=" max-w-screen-xl mx-auto px-8 md:px-16 lg:px-24 py-5 ">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
           
           {
           isShow? services.map((service)=>(
                <SingleServices key={service._id} service={service} ></SingleServices>
            ) ) :
            services.slice(0,3).map((service) => (
                <SingleServices key={service._id} service={service}></SingleServices>
              ))
            
        }
        </div>
        {services.length > 4 && <button onClick={()=>setIsShow(!isShow)} className="px-5 my-5 block mx-auto">
            {isShow ? <button data-aos='zoom-in-up' className="inline-flex text-white bg-[#5c98f2] border-0  focus:outline-none hover:bg-[5c98f2] rounded-full py-2 px-6 text-lg">See less</button> : <button data-aos='zoom-in-up' className="inline-flex text-white bg-[#5c98f2] border-0  focus:outline-none hover:bg-[5c98f2] rounded-full py-2 px-6 text-lg">See more</button>}
          </button>}
            </div>
        </div>
    );
};

export default Services;
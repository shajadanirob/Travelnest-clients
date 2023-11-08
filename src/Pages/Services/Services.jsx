import { useEffect, useState } from "react";
import SingleServices from "./SingleServices";
import { useLoaderData } from "react-router-dom";


const Services = () => {
  const [searchValue , setSearchValue]  =useState(null)
    const [services,setServices] = useState([])
    const allData = useLoaderData()
    const [isShow,setIsShow] = useState(false)
    // useEffect(()=>{
    //     fetch('https://y-ebon-seven.vercel.app/services')
    //     .then(res =>res.json())
    //     .then(data => setServices(data))
    // },[])
    const handleSubmit = e =>{
      e.preventDefault()
      const form = e.target;
      const Search = form.search.value;
      setSearchValue(Search)
    }
    // 

    useEffect(() =>{
      if(searchValue === null){
        setServices(allData)
      }
      else if(searchValue === 'Chottogram' || searchValue ==='CHOTTOGRAM'|| searchValue ==='chottogram'){
          
        setServices(allData?.filter(item => item.servicesArea ==='Chottogram'))
      }
      else if(searchValue === 'Bankkok' || searchValue ==='BANKKOK'|| searchValue ==='bankkok'){
          
        setServices(allData?.filter(item => item.servicesArea ==='Bankkok'))
      }
      else if(searchValue === 'Dhaka' || searchValue ==='DHAKA'|| searchValue ==='dhaka'){
          
        setServices(allData?.filter(item => item.servicesArea ==='Dhaka'))
      }
      
  },[allData,searchValue ])



    return (
        <div>
<div className="hero h-[60vh]" style={{backgroundImage: 'url(https://i.ibb.co/NjtKsn5/woman-holiday-journey-travel-relaxation.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Our Services</h1>
    <form onSubmit={handleSubmit}>
    <div className="relative z-30 text-base flex text-black">
       <input type="text" className="mt-2 shadow-md focus:outline-none rounded-2xl py-3 px-6 block w-full" name="search" placeholder="Search Area Name..." />
        </div>
        <div className="flex justify-center items-center">
       <button className="btn my-4">Search</button>
       </div>
    </form>

      
    
    </div>
  </div>
</div>






            <div className=" pt-12 px-6 md:px-20 ">
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
            {isShow ? <button className="btn bg-[#E5AE49]">See less</button> : <button className="btn bg-[#E5AE49]">See more</button>}
          </button>}
            </div>
        </div>
    );
};

export default Services;
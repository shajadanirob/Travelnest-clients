import { Link } from "react-router-dom";
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";


const SingleServices = ({service}) => {
  useEffect(() =>{
    Aos.init();
      },[])
  const {_id,userName,userEmail,ServiceName,price,serviceDescription,image,servicesArea,providerImg} = service
    return (
        <div data-aos='zoom-in-up' className="group w-[100%] relative block bg-black rounded-2xl">
        <img
          alt="Developer"
          src={image}
          className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50 rounded-2xl"
        />
      
        <div className="relative p-4 sm:p-6 lg:p-8">
         
          <p className="text-xl font-bold text-white sm:text-2xl">{ServiceName}</p>
      
          <div className="mt-32 sm:mt-48 lg:mt-64">
            <div
              className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 space-y-2"
            >
              <p className="text-sm text-white">
                {serviceDescription.slice(0,100)}....
              </p>
              <div class="flex items-center">
    <div class="relative">
        <img class="h-16 w-16 rounded-full object-cover" src={providerImg} alt="Avatar"/>
        <div class="absolute inset-0 rounded-full shadow-inner"></div>
    </div>
    <div class="ml-4">
        <h2 class="font-bold text-white text-lg">{userName}</h2>
        <p class="text-white">{servicesArea}</p>
    </div>
</div>
              <p className="text-xl text-center text-[#efae37]">Price:${price}</p>
              <Link to={`/services/${_id}`} className='text-center flex justify-center items-center my-2'>
                  <button className='inline-flex text-white bg-[#5c98f2] border-0  focus:outline-none hover:bg-[5c98f2] rounded-full py-2 px-6 text-lg'>Explore</button>
              </Link>
            </div>
          </div>
        </div>

                  </div>
    );
};

export default SingleServices;
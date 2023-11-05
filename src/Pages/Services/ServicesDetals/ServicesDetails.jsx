import { useLoaderData } from "react-router-dom";
import Modal from "./Modal";


const ServicesDetails = () => {
    const servicesData = useLoaderData()
    const{_id,userName,userEmail,ServiceName,price,serviceDescription,image,servicesArea} = servicesData
    return (
        <div>
   <div className="flex flex-wrap">
    <div className="w-full sm:w-8/12 mt-10">
      <div className="container mx-auto h-full sm:p-10">
        <header className="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
          <div className="w-full">
            <h1 className="text-4xl lg:text-6xl font-bold">{ServiceName}</h1>
            <div className="w-20 h-2 bg-green-700 my-4"></div>
            <p className="text-[16px] mt-10">{serviceDescription}</p>
           



<button className="btn" onClick={()=>document.getElementById('my_modal_4').showModal()}>Book Now</button>


<Modal></Modal>

          </div>
        </header>
      </div>
    </div>
    <img src={image} alt="Leafs" className="w-full h-48 mt-10 object-cover sm:h-screen sm:w-4/12"/>
  </div>
  
        </div>
    );
};

export default ServicesDetails;
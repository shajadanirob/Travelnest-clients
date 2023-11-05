import { Link } from "react-router-dom";


const SingleServices = ({service}) => {
  const {_id,userName,userEmail,ServiceName,price,serviceDescription,image,servicesArea} = service
    return (
        <div  className="group w-[100%] relative block bg-black">
        <img
          alt="Developer"
          src={image}
          className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
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
              <p className="text-xl text-white">Services by:   {userName}</p>
              <p className="text-xl text-white">Service Area : {servicesArea}</p>
              <p className="text-xl text-center text-[#efae37]">Price:${price}</p>
              <Link to={`/services/${_id}`} className='text-center my-2'>
                  <button className='btn bg-[#efae37] py-3 px-8'>Explore</button>
              </Link>
            </div>
          </div>
        </div>

                  </div>
    );
};

export default SingleServices;
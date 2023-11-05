import { Link, Outlet } from "react-router-dom";

const DashBoard = () => {
    return (
        <div>
        
            <div className="bg-orange-100 min-h-screen">
            <h1 className="text-center text-3xl">WellCome to DashBoard</h1>
  <div className="flex flex-col lg:flex-row pt-24 px-10 pb-4">
    <div className=" lg:w-[30%] mr-6">
      <div className="bg-white rounded-xl shadow-lg mb-6 px-6 py-4">
        <Link  to='/TravelNest/dashboard' className="inline-block text-gray-600 hover:text-black my-4 w-full">
          <span className="material-icons-outlined float-left pr-2"> Add Services</span>
         
        </Link>



        <Link to='/TravelNest/dashboard/updated' className="inline-block text-gray-600 hover:text-black my-4 w-full">
        <span className="material-icons-outlined float-left pr-2">  Manage Services</span>
        </Link>

        <Link to='/TravelNest/dashboard/schedules' className="inline-block text-gray-600 hover:text-black my-4 w-full">
        <span className="material-icons-outlined float-left pr-2"> My Schedules</span>
       
        </Link>
      </div>

  
    </div>
    
    <div className="w-full">
      <div className="">
     <Outlet></Outlet>
      </div>
    
    </div>
  </div>
</div>
        </div>
    );
};

export default DashBoard;
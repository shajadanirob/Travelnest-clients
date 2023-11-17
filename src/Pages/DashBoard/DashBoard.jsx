import { Link, Outlet } from "react-router-dom";

const DashBoard = () => {
    return (
        <div>
        
            <div className=" min-h-screen my-20">
  <div className="flex flex-col lg:flex-row pt-24 px-10 pb-4">
    <div className=" lg:w-[30%]  mr-6">
      <div className="bg-white rounded-xl shadow-lg mb-6 px-6 py-4">
        <Link  to='/TravelNest/dashboard' className="inline-block text-gray-600 hover:text-black my-4 w-full">
          <span className="material-icons-outlined float-left pr-2"> Add Services</span>
         
        </Link>
        <Link  to='/TravelNest/dashboard/allUsers' className="inline-block text-gray-600 hover:text-black my-4 w-full">
          <span className="material-icons-outlined float-left pr-2">Manged user</span>
         
        </Link>



        <Link to='/TravelNest/dashboard/updated' className="inline-block text-gray-600 hover:text-black my-4 w-full">
        <span className="material-icons-outlined float-left pr-2">  Manage Services</span>
        </Link>

        <div  className="inline-block text-gray-600 hover:text-black my-4 w-full">
        <span className="material-icons-outlined float-left pr-2">

        <div className="dropdown">
  <label tabIndex={0} className=" w-full m-1"> My Schedules</label>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><Link to='/TravelNest/dashboard/bookings'>My Bookings</Link></li>
    <li><Link to='/TravelNest/dashboard/pending'>My Pending works</Link></li>
  </ul>
        </div>
        </span>
       
        </div>
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
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user,logOut} = UseAuth();

  const handlelogOut = e =>{
    e.preventDefault()
    logOut()
    .then(result =>{
        toast.success('logout successFully')
        console.log(result)
    })
    .catch(error =>{
        console.log(error)
    })
}



    const [menuOpen, setMenuOpen] = useState(false);


    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
      };

    const NabLinks = <>
    <ol><NavLink 
    
    to='/' className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "underline text-red-500" : ""
  }>Home</NavLink></ol>

    <ol><NavLink to='/TravelNest/services'className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "underline text-red-500" : ""
  }>Services</NavLink></ol>
    <ol><NavLink to='/TravelNest/dashboard'className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "underline text-red-500" : ""
  }>DashBoard</NavLink></ol>
 
    {/* {
        user? 
        <>
        <ol><NavLink to='/blog'className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "underline text-red-500" : ""
  }>Blog</NavLink></ol>
        
        <ol><NavLink to='/profile'className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "underline text-red-500" : ""
  }>Profile</NavLink></ol>
        </>:''
    } */}
</>

    return (
        // 
        <nav className="bg-[#111111] opacity-90 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              {/* <img className="w-[70px] md:w-[100px] md:ml-56 lg:ml-20 " src={img} alt="Logo" className="h-8" /> */}
              <h1>TravelNest</h1>
            </div>
          </div>
          <div className="hidden md:flex space-x-4 text-white font-semibold ">
            {NabLinks}
          </div>
          <div className="flex items-center hidden lg:inline-flex">
          {
            user?<div className="dropdown dropdown-end flex justify-center items-center">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                    <img src={user.photoURL} alt={user.displayName} />
                </div>
            </label>
            <button className="btn bg-[#FF630E] text-white"
                        onClick={handlelogOut}
                    >Logout</button>
            </div>
            : <> <Link className='my-5' to='/TravelNest/login'>
            <button className="btn bg-[#E5AE49] text-white">Login</button>
            </Link> </>
          }



          </div>
          <div className="md:hidden  flex items-center">
            <button onClick={toggleMenu} className="text-white">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                )}
              </svg>
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden text-center text-white mt-2 space-y-8 font-bold translate-y-3">
           {NabLinks}
             {
            user?<div className="dropdown dropdown-end flex justify-center items-center mt-4">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                    <img src={user.photoURL} alt={user.displayName} />
                </div>
            </label>
            <button className="btn bg-[#FF630E] text-white"
                        onClick={handlelogOut}
                    >Logout</button>
            </div>
            :<> <Link to='/login'>
            <button className="btn bg-[#FF630E] text-white">Login</button>
            </Link></>
          }
         
         </div>
        )}
        </nav>
    );
};

export default Navbar;
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";
import toast from "react-hot-toast";
import { useSpring, animated } from '@react-spring/web'
import UserAxiosSecure from "../../Hooks/UserAxiosSecure";
const Navbar = () => {
  const { user,logOut} = UseAuth();
  const axiosSecure = UserAxiosSecure()

  const [bookings ,setBookings] = useState([])
  
  useEffect(() =>{
    
      if(user){
        const url = `https://y-ebon-seven.vercel.app/bookings?email=${user?.email}`
        fetch(url,{credentials:'include'})
        .then(res => res.json())
        .then(data => setBookings(data))
      //   axiosSecure.get(url)
      // .then(res => setBookings(res.data))
      }
  },[axiosSecure,user])



  const [isOpen, setIsOpen] = useState(false);

  const slideIn = useSpring({
    transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
    config: { duration: 300 },
  });



 

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
    isPending ? "pending" : isActive ? "underline text-[#5C98F2]" : ""
  }>Home</NavLink></ol>

    <ol><NavLink to='/TravelNest/services'className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "underline text-[#5C98F2]" : ""
  }>Destinations</NavLink></ol>
    {
      user ? <ol><NavLink to='/TravelNest/dashboard'className={({ isActive, isPending }) =>
      isPending ? "pending" : isActive ? "underline text-[#5C98F2]" : ""
    }>DashBoard</NavLink></ol> :''
    }
 
   
</>

    return (
        <header className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-2 md:rounded-3xl lg:max-w-screen-lg">
      <div className="px-4">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <a aria-current="page" className="flex items-center" href="/">
              <img className="h-[50px] lg:h-[80px] lg:w-[180px]" src="https://i.ibb.co/wMqQJby/download-7-removebg-preview.png" alt="Website Logo" />
              <p className="sr-only">Website Title</p>
            </a>
          </div>
          <div className="md:hidden ">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 focus:outline-none"
            >
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6 ml-40" viewBox="0 0 24 24">
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12"></path>
                ) : (
                  <path d="M4 6h16M4 12h16m-7 6h7"></path>
                )}
              </svg>
            </button>
          </div>
          <div className="hidden md:flex md:items-center md:justify-center md:gap-5 font-bold">
{NabLinks}


<NavLink className= {({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "underline text-[#5C98F2]" : ""
  } to='/TravelNest/dashboard/bookings'>
<button class="py-4 px-1 relative border-2 border-transparent text-gray-800 rounded-full hover:text-gray-400 focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out" aria-label="Cart">
  <svg class="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
  </svg>
  <span class="absolute inset-0 object-right-top -mr-6">
    <div class="inline-flex items-center px-1.5 py-0.5 border-2 border-white rounded-full text-xs font-semibold leading-4 bg-red-500 text-white">
      {user ? bookings.length : 0}
    </div>
  </span>
</button>
</NavLink>

     
          </div>
          <div className="flex items-center justify-end gap-3 hidden md:block">
          {
            user?<div className="dropdown dropdown-end flex justify-center items-center">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                    <img src={user.photoURL} alt={user.displayName} />
                </div>
            </label>
            <button className="inline-flex items-center justify-center rounded-xl bg-[#5C98F2] px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-[#5C98F2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                        onClick={handlelogOut}
                    >Logout</button>
            </div>
            :   <> <Link to='/TravelNest/login' className="inline-flex items-center justify-center rounded-xl bg-[#5C98F2] px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-[#5C98F2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600" href="/login">Login</Link></>
            
          } 

          </div>



          
        </div>
      </div>
      <animated.div style={slideIn} className="md:hidden absolute inset-x-0 text-center border border-gray-100  py-3  backdrop-blur-sm h-[80vh] rounded-[50px] top-0 bg-white shadow-md">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute  top-2 right-2 text-gray-900 focus:outline-none"
        >
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6 " viewBox="0 0 24 24">
            <path d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        
<div className="block mt-24 py-2 px-4 font-bold text-gray-900 space-y-5">
<ol><NavLink 
    
    to='/' className= {({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "underline text-[#5C98F2]" : ""
  }>Home</NavLink></ol>

    <ol><NavLink to='/TravelNest/services'className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "underline text-[#5C98F2]" : ""
  }>Services</NavLink></ol>
    {
      user ? <ol><NavLink to='/TravelNest/dashboard'className={({ isActive, isPending }) =>
      isPending ? "pending" : isActive ? "underline text-[#5C98F2]" : ""
    }>DashBoard</NavLink></ol> :''
    }
  <NavLink className= {({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "underline text-[#5C98F2]" : ""
  } to='/TravelNest/dashboard/bookings'>
<button class="py-4 px-1 relative border-2 border-transparent text-gray-800 rounded-full hover:text-gray-400 focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out" aria-label="Cart">
  <svg class="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
  </svg>
  <span class="absolute inset-0 object-right-top -mr-6">
    <div class="inline-flex items-center px-1.5 py-0.5 border-2 border-white rounded-full text-xs font-semibold leading-4 bg-red-500 text-white">
    {user ? bookings.length : 0}
    </div>
  </span>
</button>
</NavLink>
 
</div>



{
            user?<div className="dropdown dropdown-end flex justify-center items-center">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                    <img src={user.photoURL} alt={user.displayName} />
                </div>
            </label>
            <button className="inline-flex items-center justify-center rounded-xl bg-[#5C98F2] px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-[#5C98F2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                        onClick={handlelogOut}
                    >Logout</button>
            </div>
            :   <> <Link to='/TravelNest/login' className="inline-flex items-center justify-center rounded-xl bg-[#5C98F2] px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-[#5C98F2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600" href="/login">Login</Link></>
            
          } 
        {/* Login button remains outside the animated.div */}
      </animated.div>
    </header>
    
    );
};

export default Navbar;



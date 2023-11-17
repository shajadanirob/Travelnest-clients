import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar";
import Footer from "../Pages/Footer/Footer";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";



const MainLayout = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      // Simulate an API call or any asynchronous operation
      const fakeAPICall = () => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve();
          }, 2000); // Simulating a 2-second loading time
        });
      };
  
      // Perform any asynchronous operations here
      fakeAPICall()
        .then(() => {
          // Once the operation is complete, set loading to false
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error during preloading:", error);
          setLoading(false); // Set loading to false in case of an error too
        });
    }, []);



    return (
        <div>
           {
            loading ? <div class="w-full h-[100vh] relative flex justify-center  items-center">
            <div class="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"></div>
            <img src="https://i.ibb.co/gR4g7Hj/download-7.jpg"  class="rounded-full h-28 w-28"/>
        </div> : <>
            <Navbar></Navbar>
           <Outlet></Outlet>
           <Footer></Footer>
           <Toaster/>
            
            </>
           }
        </div>
    );
};

export default MainLayout;
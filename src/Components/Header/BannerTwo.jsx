import { Link } from "react-router-dom";
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";

const BannerTwo = () => {
    useEffect(() =>{
        Aos.init();
          },[])




    return (
        <section className="text-gray-600 body-font  ">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center my-10">
            <div
                className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 data-aos='zoom-in-up' className="title-font text-4xl  lg::text-7xl mb-4 font-bold text-[#1F2937]">Find Next Place
To <span className="text-[#5C98F2]">Visit</span>
                </h1>
                <p data-aos='zoom-in-up' className="mb-8 text-xs font-bold md:text-[16px] leading-relaxed">Discover amzaing places at exclusive deals. <br />
Eat, Shop, Visit interesting places around the world.</p>
                <div className="flex justify-center">
                    <button data-aos='zoom-in-up' className="inline-flex text-white bg-[#5c98f2]  focus:outline-none hover:bg-[5c98f2] rounded-full py-2 px-6 text-lg">
                    <svg className="mt-[7px]" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="2em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M22 7.5C22 5.57 17.52 4 12 4S2 5.57 2 7.5c0 1.81 3.95 3.31 9 3.48V15H9.35c-.82 0-1.55.5-1.86 1.26L6 20h2l1.2-3h5.6l1.2 3h2l-1.5-3.74c-.3-.76-1.04-1.26-1.85-1.26H13v-4.02c5.05-.17 9-1.67 9-3.48z"></path></svg>
                        Book Services</button>

                  <Link to='/TravelNest/services'>
                  <button data-aos='zoom-in-up' className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 border-[#5c98f2] focus:outline-none hover:bg-gray-200 rounded-full text-lg">
                    <svg className="mt-[7px]" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M3 2h2v20H3zm7 4h7v2h-7zm0 4h7v2h-7z"></path><path d="M19 2H6v20h13c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 18H8V4h11v16z"></path></svg>

                        View services</button>
                  
                  </Link>
        



                </div>
            </div>
            <div className="lg:max-w-[700px]lg:w-full md:w-1/2 w-full">
            <div class="grid grid-cols-2 gap-2">
        <div data-aos="zoom-in-right">
            <img class="h-auto max-w-full rounded-lg hover:translate-y-[-10px] duration-200" src="https://i.ibb.co/vJ33s0Q/man-relax-siting-bank-flowing-river.jpg" alt=""/>
        </div>
        <div data-aos="zoom-in-right">
            <img class="h-auto max-w-full hover:translate-y-[-10px] duration-200 rounded-lg" src="https://i.ibb.co/vXQjV0V/long-boat-blue-water-maya-bay-phi-phi-island-krabi-thailand.jpg" alt=""/>
        </div>
        <div data-aos="zoom-in-right">
            <img class="h-auto max-w-full hover:translate-y-[-10px] duration-200 rounded-lg" src="https://i.ibb.co/s5VMmz6/summer-alps-landscape-switzerland-middle-swiss-alps-mountains-1.jpg" alt=""/>
        </div>
        <div data-aos="zoom-in-right">
            <img class="h-auto max-w-full hover:translate-y-[-10px] duration-200 rounded-lg" src="https://i.ibb.co/JF4D461/small-house-built-peaceful-green-hill-high-up-mountains.jpg" alt=""/>
        </div>
    </div>
     

            </div>
        </div>
    </section>






    );
};

export default BannerTwo;
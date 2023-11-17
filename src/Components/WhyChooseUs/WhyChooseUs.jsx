import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";
const WhyChooseUs = () => {
    useEffect(() =>{
        Aos.init();
          },[])
    return (
        <div className="text-center max-w-screen-xl mx-auto px-8 md:px-16 lg:px-24 py-5">

        <h2 data-aos='zoom-in-up' className="font-bold text-[#000000] text-2xl sm:text-3xl md:text-4xl text-center my-10 lg:text-5xl">
        Why to  <span className="text-[#5c98f2]">choose US?</span>
        </h2>
    
        <div className="flex flex-wrap items-center mt-20 text-left text-center">
            <div data-aos='zoom-in-up' className="w-full md:w-3/5 lg:w-1/2 px-4">
                <img src="https://i.ibb.co/Z6F1Msy/45.jpg" alt="gem" className="inline-block rounded shadow-lg border border-merino-400"/>
            </div>
            <div data-aos='zoom-in-down' className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
                <h3  className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
                Diverse Services
                </h3>
                <p className="sm:text-lg mt-6">
                We offer a wide range of travel services, from local tours and accommodations to adventure activities and travel guides. With TravelNest, you can find everything you need in one place.
                </p>
            </div>
        </div>
    
        <div className="flex flex-wrap items-center mt-20 text-left text-center">
            <div data-aos='zoom-in-up' className="w-full md:w-3/5 lg:w-1/2 px-4">
                <img src="https://i.ibb.co/f17Wdd9/47.jpg" alt="project members" className="inline-block rounded shadow-lg border border-merino-400"/>
            </div>
            <div data-aos='zoom-in-down' className="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
                <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
                Personalization
                </h3>
                <p className="sm:text-lg mt-6">
                We believe in making travel personal. Our platform connects you with service providers who can tailor experiences to your preferences, ensuring each trip is unique to you.
                </p>
            </div>
        </div>
    
        <div className="flex flex-wrap items-center mt-20 text-left  text-center">
            <div data-aos='zoom-in-up' className="w-full md:w-3/5 lg:w-1/2 px-4">
                <img src="https://i.ibb.co/1L6gyDt/46.jpg" alt="editor" className="inline-block rounded shadow-lg border border-merino-400"/>
            </div>
            <div data-aos='zoom-in-down' className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
                <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
                Convenience
                </h3>
                <p className="sm:text-lg mt-6">
                Booking and managing your travel services has never been easier. Our user-friendly interface makes it simple to plan your journey, whether you're at home or on the go.
                </p>
            </div>
        </div>
    
        <div className="flex flex-wrap items-center mt-20 text-left text-center">
            <div data-aos='zoom-in-up' className="w-full md:w-3/5 lg:w-1/2 px-4">
                <img src="https://i.ibb.co/DkQzFb3/48.jpg" alt="bulk editing" className="inline-block rounded shadow-lg border border-merino-400"/>
            </div>
            <div data-aos='zoom-in-down' className="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
                <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
                Support
                </h3>
                <p className="sm:text-lg mt-6">
                We're here to assist you throughout your travel journey. Our customer support team is ready to help with any questions or concerns you may have.
                </p>
            </div>
        </div>
    
    </div>
    );
};

export default WhyChooseUs;
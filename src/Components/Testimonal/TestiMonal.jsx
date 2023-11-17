import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";

const TestiMonal = () => {
    useEffect(() =>{
        Aos.init();
          },[])

    return (
    <div className='max-w-screen-xl mx-auto px-8 md:px-16 lg:px-24 py-5'>
         <h2  data-aos='zoom-in-up' className="font-bold text-[#000000] text-2xl sm:text-3xl md:text-4xl text-center my-10 lg:text-5xl">
         What our customers are <br /> <span className="text-[#5c98f2]">saying about us</span>
        </h2>

        <Swiper data-aos='zoom-in-down' pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide >
        <div className="p-5 border rounded text-center text-gray-500 max-w-sm mx-auto">
    <img className="w-32 h-32 rounded-full mx-auto" src="https://i.ibb.co/3W0JMCH/images-5.jpg" alt=""/>
    <div className="text-sm mt-5">
        <a href="#"
            className="font-medium leading-none text-gray-900 hover:text-indigo-600 transition duration-500 ease-in-out"> Emily W
        </a>
        
    </div>

    <p className="mt-2 text-sm text-gray-900">Switzerland Expedition exceeded all expectations! From the scenic train rides through the majestic Alps to the luxurious alpine retreats, every moment felt like a dream. The attention to detail and the seamless blend of adventure and relaxation made this journey truly unforgettable. Can't wait to explore more with this exceptional team!</p>
       

</div>

        </SwiperSlide>
        <SwiperSlide>
        <div className="p-5 border mx-auto rounded text-center text-gray-500 max-w-sm">
    <img className="w-32 h-32 rounded-full mx-auto" src="https://i.ibb.co/9pyq7Rt/portrait-handsome-caucasian-man-formal-260nw-2142820441.webp" alt=""/>
    <div className="text-sm mt-5">
        <a href="#"
            className="font-medium leading-none text-gray-900 hover:text-indigo-600 transition duration-500 ease-in-out">James 
            Doe
        </a>
    </div>

    <p className="mt-2 text-sm text-gray-900">A journey through Switzerland with this expedition was nothing short of magical. The cultural immersion in charming villages, coupled with the thrill of outdoor activities, created a perfect balance. The Swiss cuisine and the breathtaking views made every penny worth it. Highly recommend this experience to fellow travelers seeking a blend of adventure and sophistication.</p>
       

</div>

        </SwiperSlide>
        <SwiperSlide>
        <div className="p-5 mx-auto border rounded text-center text-gray-500 max-w-sm">
    <img className="w-32 h-32 rounded-full mx-auto" src="https://i.ibb.co/xjx6B00/images-4.jpg" alt=""/>
    <div className="text-sm mt-5">
        <a href="#"
            className="font-medium leading-none text-gray-900 hover:text-indigo-600 transition duration-500 ease-in-out">Sarahl
        </a>
    </div>

    <p className="mt-2 text-sm text-gray-900">The Switzerland Expedition was a masterpiece of travel planning. The well-curated itinerary took us to hidden gems, and the alpine retreats were pure luxury. Our guides were not only knowledgeable but also added a personal touch that made the trip special. Switzerland has stolen my heart, and I owe it to this incredible experience.</p>
       

</div>


        </SwiperSlide>
        <SwiperSlide>
        <div className="p-5 mx-auto border rounded text-center text-gray-500 max-w-sm">
    <img className="w-32 h-32 rounded-full mx-auto" src="https://i.ibb.co/sjHHZ7Q/images-3.jpg" alt=""/>
    <div className="text-sm mt-5">
        <a href="#"
            className="font-medium leading-none text-gray-900 hover:text-indigo-600 transition duration-500 ease-in-out">David 
            
        </a>
       
    </div>

    <p className="mt-2 text-sm text-gray-900">As an avid traveler, the Switzerland Expedition ranks among my top experiences. The professionalism of the team, coupled with the breathtaking scenery, made every moment a picture-perfect memory. The adventures, from skiing in the Alps to serene moments by the lakes, were expertly crafted. Kudos to the team for a flawless expedition.</p>
       

</div>

        </SwiperSlide>
        <SwiperSlide>
        <div className="p-5 mx-auto border rounded text-center text-gray-500 max-w-sm">
    <img className="w-32 h-32 rounded-full mx-auto" src="https://i.ibb.co/0Qg05zP/images-2.jpg" alt=""/>
    <div className="text-sm mt-5">
        <a href="#"
            className="font-medium leading-none text-gray-900 hover:text-indigo-600 transition duration-500 ease-in-out">Mia 
            Doe
        </a>
        
    </div>

    <p className="mt-2 text-sm text-gray-900">Switzerland was a dream, and this expedition brought that dream to life. The attention to detail in crafting the itinerary showcased the best of the country. The personalized service and the diverse activities catered to every traveler's taste. From cultural explorations to high-adrenaline adventures, this journey left me with cherished memories. Can't wait to join another expedition soon.</p>
       

</div>

        </SwiperSlide>
      </Swiper>
      

{/* <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="p-5 border rounded text-center text-gray-500 max-w-sm">
    <img className="w-32 h-32 rounded-full mx-auto" src="https://i.ibb.co/3W0JMCH/images-5.jpg" alt=""/>
    <div className="text-sm mt-5">
        <a href="#"
            className="font-medium leading-none text-gray-900 hover:text-indigo-600 transition duration-500 ease-in-out"> Emily W
        </a>
        
    </div>

    <p className="mt-2 text-sm text-gray-900">Switzerland Expedition exceeded all expectations! From the scenic train rides through the majestic Alps to the luxurious alpine retreats, every moment felt like a dream. The attention to detail and the seamless blend of adventure and relaxation made this journey truly unforgettable. Can't wait to explore more with this exceptional team!</p>
       

</div>

        </SwiperSlide>
        <SwiperSlide>
        <div className="p-5 border rounded text-center text-gray-500 max-w-sm">
    <img className="w-32 h-32 rounded-full mx-auto" src="https://i.ibb.co/9pyq7Rt/portrait-handsome-caucasian-man-formal-260nw-2142820441.webp" alt=""/>
    <div className="text-sm mt-5">
        <a href="#"
            className="font-medium leading-none text-gray-900 hover:text-indigo-600 transition duration-500 ease-in-out">James 
            Doe
        </a>
    </div>

    <p className="mt-2 text-sm text-gray-900">A journey through Switzerland with this expedition was nothing short of magical. The cultural immersion in charming villages, coupled with the thrill of outdoor activities, created a perfect balance. The Swiss cuisine and the breathtaking views made every penny worth it. Highly recommend this experience to fellow travelers seeking a blend of adventure and sophistication.</p>
       

</div>

        </SwiperSlide>
        <SwiperSlide>
        <div className="p-5 border rounded text-center text-gray-500 max-w-sm">
    <img className="w-32 h-32 rounded-full mx-auto" src="https://i.ibb.co/xjx6B00/images-4.jpg" alt=""/>
    <div className="text-sm mt-5">
        <a href="#"
            className="font-medium leading-none text-gray-900 hover:text-indigo-600 transition duration-500 ease-in-out">Sarahl
        </a>
    </div>

    <p className="mt-2 text-sm text-gray-900">Lorem ipsum The Switzerland Expedition was a masterpiece of travel planning. The well-curated itinerary took us to hidden gems, and the alpine retreats were pure luxury. Our guides were not only knowledgeable but also added a personal touch that made the trip special. Switzerland has stolen my heart, and I owe it to this incredible experience.</p>
       

</div>

        </SwiperSlide>
        <SwiperSlide>
        <div className="p-5 border rounded text-center text-gray-500 max-w-sm">
    <img className="w-32 h-32 rounded-full mx-auto" src="https://i.ibb.co/sjHHZ7Q/images-3.jpg" alt=""/>
    <div className="text-sm mt-5">
        <a href="#"
            className="font-medium leading-none text-gray-900 hover:text-indigo-600 transition duration-500 ease-in-out">David 
            
        </a>
       
    </div>

    <p className="mt-2 text-sm text-gray-900">As an avid traveler, the Switzerland Expedition ranks among my top experiences. The professionalism of the team, coupled with the breathtaking scenery, made every moment a picture-perfect memory. The adventures, from skiing in the Alps to serene moments by the lakes, were expertly crafted. Kudos to the team for a flawless expedition.</p>
       

</div>

        </SwiperSlide>
        <SwiperSlide>

        <div className="p-5 border rounded text-center text-gray-500 max-w-sm">
    <img className="w-32 h-32 rounded-full mx-auto" src="https://i.ibb.co/0Qg05zP/images-2.jpg" alt=""/>
    <div className="text-sm mt-5">
        <a href="#"
            className="font-medium leading-none text-gray-900 hover:text-indigo-600 transition duration-500 ease-in-out">Mia 
            Doe
        </a>
        
    </div>

    <p className="mt-2 text-sm text-gray-900">Switzerland was a dream, and this expedition brought that dream to life. The attention to detail in crafting the itinerary showcased the best of the country. The personalized service and the diverse activities catered to every traveler's taste. From cultural explorations to high-adrenaline adventures, this journey left me with cherished memories. Can't wait to join another expedition soon.</p>
       

</div>
        </SwiperSlide>
        
      </Swiper> */}
    </div>
    );
};

export default TestiMonal;
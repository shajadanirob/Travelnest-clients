import videoTwo from '../../public/pexels-ibrahim-bennett-5717020 (2160p).mp4'
import '../../public/Banner.css'


const Banner = () => {
    return (
        <section className="relative h-[90vh] flex flex-col items-center justify-center text-center text-white ">
    <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
        <video className="min-w-full min-h-full absolute object-cover"
            src={videoTwo}
            type="video/mp4" autoPlay muted loop></video>
    </div>
    <div className="video-content space-y-4 mb-10 z-10">
        <p className='text-center lg:mr-[800px] text-[#efae37]'>WELCOME TO TravelNest</p>
        <h1 className="text-center font-semibold mb-10 md:text-4xl text-xl lg:mr-[800px] ">Unrivaled Expertise for Unique Travel Experiences</h1>
        <div className='text-center lg:mr-[800px]'>
            <button className='btn bg-[#efae37] py-3 px-8'>Explore</button>
        </div>
    </div>
</section>
    );
};

export default Banner;
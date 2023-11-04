

const About = () => {
    return (
        <div className="flex pt-12 px-6 md:px-20  items-center justify-center bg-hero md:h-screen overflow-hidden">
    <div className="flex flex-col-reverse gap-6 md:flex-row items-center max-w-8xl">
        <div className="w-full md:w-1/2 lg:pr-32">
            <p className="text-[#efae37] text-xl my-5 text-center md:text-left">ABOUT US</p>
            <h2 className="text-4xl lg:text-5xl text-center md:text-left text-[#111111] leading-tight font-medium">We Maximize Your Vacation Experience the Right Way</h2>
            <h3
                className="mt-6 md:mt-10 text-md lg:text-xl text-center md:text-left text-[#111111] font-light tracking-wider leading-relaxed">
           TravelNest: Your one-stop travel services platform. Connect, book, and provide travel experiences like never before
            </h3>
            <div className='my-5 text-center md:text-left'>
            <button className='btn bg-[#efae37] py-3 px-8'>Explore</button>
        </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <img src="https://i.ibb.co/R60SfN3/cloudy-volcano-in-indonesia-Y4-J7-Y63.jpg"/>
        </div>
    </div>
</div>
    );
};

export default About;
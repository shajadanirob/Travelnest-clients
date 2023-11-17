
import Faq from "../../Components/Faq/Faq";
import BannerTwo from "../../Components/Header/BannerTwo";
// import Banner from "../../Components/Header/Banner";
import PopulerServices from "../../Components/PopulerServices/PopulerServices";
import TestiMonal from "../../Components/Testimonal/TestiMonal";
import WhyChooseUs from "../../Components/WhyChooseUs/WhyChooseUs";


const Home = () => {
    return (
        <div> 
            {/* <Banner></Banner> */}
            <BannerTwo></BannerTwo>
            <PopulerServices></PopulerServices>
            <WhyChooseUs></WhyChooseUs>
           <div className="">
           <TestiMonal></TestiMonal>
           </div>
            <Faq></Faq>
        </div>
    );
};

export default Home;
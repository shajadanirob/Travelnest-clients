import About from "../../Components/About/About";
import Faq from "../../Components/Faq/Faq";
import Banner from "../../Components/Header/Banner";
import PopulerServices from "../../Components/PopulerServices/PopulerServices";
import WhyChooseUs from "../../Components/WhyChooseUs/WhyChooseUs";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <PopulerServices></PopulerServices>
            <WhyChooseUs></WhyChooseUs>
            <Faq></Faq>
        </div>
    );
};

export default Home;
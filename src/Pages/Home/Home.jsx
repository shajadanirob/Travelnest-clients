import About from "../../Components/About/About";
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
        </div>
    );
};

export default Home;
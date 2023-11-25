import Banner from "../../Components/Banner/Banner";
import ContactUs from "../../Components/ContactUs/ContactUs";
import Featured from "../../Components/Featured/Featured";

const Home = () => {
    return (
        <div>
           <Banner/>
           <Featured></Featured>
           <ContactUs></ContactUs>
        </div>
    );
};

export default Home;
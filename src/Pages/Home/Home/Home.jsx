import AboutTheBuilding from "../AboutTheBuilding/AboutTheBuilding";
import SliderBanner from "../SliderBanner/SliderBanner";

const Home = () => {
    return (
        <>
            <div className="sm:space-y-36 space-y-20">
                <div>
                    <SliderBanner />
                </div>
                <div className="bg-base-200 py-20">
                    <AboutTheBuilding />
                </div>
            </div>
        </>
    );
};

export default Home;

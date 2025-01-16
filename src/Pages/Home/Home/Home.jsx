import AboutTheBuilding from "../AboutTheBuilding/AboutTheBuilding";
import Coupons from "../Coupons/Coupons";
import DetailsAboutBuilding from "../DetailsAboutBuilding/DetailsAboutBuilding";
import SliderBanner from "../SliderBanner/SliderBanner";

const Home = () => {
    return (
        <>
            <div className="sm:space-y-10 space-y-5">
                <div className="max-w-screen-2xl px-2 mx-auto grid grid-cols-12">
                    <div className="coupons:col-span-9 col-span-12">
                        <SliderBanner />
                    </div>
                    <div className="coupons:col-span-3 col-span-12">
                        <Coupons />
                    </div>
                </div>
                <div className="bg-base-200 py-5">
                    <AboutTheBuilding />
                </div>
                <div>
                    <DetailsAboutBuilding />
                </div>
            </div>
        </>
    );
};

export default Home;

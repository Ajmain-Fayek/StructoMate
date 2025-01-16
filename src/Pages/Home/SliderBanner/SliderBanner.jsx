import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import apartment1 from "../../../assets/Apartment/apartment (1).webp";
import apartment2 from "../../../assets/Apartment/apartment (2).webp";
import apartment3 from "../../../assets/Apartment/apartment (3).webp";
import apartment4 from "../../../assets/Apartment/apartment (4).webp";
import apartment5 from "../../../assets/Apartment/apartment (5).webp";
import apartment6 from "../../../assets/Apartment/apartment (6).webp";
import apartment7 from "../../../assets/Apartment/apartment (7).webp";
import apartment8 from "../../../assets/Apartment/apartment (8).webp";
import apartment9 from "../../../assets/Apartment/apartment (9).webp";
import apartment10 from "../../../assets/Apartment/apartment (10).webp";

const SliderBanner = () => {
    return (
        <div className="text-center">
            <Carousel
                autoPlay={true}
                swipeable={true}
                dynamicHeight={true}
                stopOnHover={false}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
            >
                <div>
                    <img
                        className="max-h-[500px] object-cover object-[center_65%]"
                        src={apartment1}
                    />
                </div>
                <div>
                    <img
                        className="max-h-[500px]  object-cover object-[center_65%]"
                        src={apartment2}
                    />
                </div>
                <div>
                    <img
                        className="max-h-[500px]  object-cover object-[center_65%]"
                        src={apartment3}
                    />
                </div>
                <div>
                    <img
                        className="max-h-[500px]  object-cover object-[center_65%]"
                        src={apartment4}
                    />
                </div>
                <div>
                    <img
                        className="max-h-[500px]  object-cover object-[center_60%]"
                        src={apartment5}
                    />
                </div>
                <div>
                    <img
                        className="max-h-[500px]  object-cover object-[center_65%]"
                        src={apartment6}
                    />
                </div>
                <div>
                    <img
                        className="max-h-[500px]  object-cover object-[center_65%]"
                        src={apartment7}
                    />
                </div>
                <div>
                    <img
                        className="max-h-[500px]  object-cover object-[center_60%]"
                        src={apartment8}
                    />
                </div>
                <div>
                    <img
                        className="max-h-[500px]  object-cover object-[center_60%]"
                        src={apartment9}
                    />
                </div>
                <div>
                    <img
                        className="max-h-[500px]  object-cover object-[center_45%]"
                        src={apartment10}
                    />
                </div>
            </Carousel>
        </div>
    );
};

export default SliderBanner;

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

const Rooms = () => {
    const apartments = [
        {
            apartmentImage: apartment1,
            floorNo: 1,
            blockName: "A",
            apartmentNo: "101",
            rent: 10000,
            details:
                "Cozy 1-bedroom apartment with modern amenities and a great view.",
        },
        {
            apartmentImage: apartment2,
            floorNo: 2,
            blockName: "A",
            apartmentNo: "202",
            rent: 12000,
            details:
                "Spacious 2-bedroom apartment with a balcony and ample sunlight.",
        },
        {
            apartmentImage: apartment3,
            floorNo: 3,
            blockName: "B",
            apartmentNo: "303",
            rent: 14000,
            details:
                "Modern 1-bedroom apartment, perfect for young professionals.",
        },
        {
            apartmentImage: apartment4,
            floorNo: 4,
            blockName: "B",
            apartmentNo: "404",
            rent: 16000,
            details:
                "Elegant 2-bedroom apartment with premium fittings and parking space.",
        },
        {
            apartmentImage: apartment5,
            floorNo: 5,
            blockName: "C",
            apartmentNo: "505",
            rent: 18000,
            details:
                "Bright 3-bedroom apartment with a large living area and kitchen.",
        },
        {
            apartmentImage: apartment6,
            floorNo: 6,
            blockName: "C",
            apartmentNo: "606",
            rent: 20000,
            details:
                "Stylish 2-bedroom apartment with access to a swimming pool and gym.",
        },
        {
            apartmentImage: apartment7,
            floorNo: 7,
            blockName: "D",
            apartmentNo: "707",
            rent: 22000,
            details:
                "Luxury 3-bedroom apartment with smart home features and rooftop access.",
        },
        {
            apartmentImage: apartment8,
            floorNo: 8,
            blockName: "D",
            apartmentNo: "808",
            rent: 24000,
            details:
                "Premium 4-bedroom apartment ideal for large families, with great views.",
        },
        {
            apartmentImage: apartment9,
            floorNo: 9,
            blockName: "E",
            apartmentNo: "909",
            rent: 15000,
            details:
                "Comfortable 2-bedroom apartment with close proximity to schools and parks.",
        },
        {
            apartmentImage: apartment10,
            floorNo: 10,
            blockName: "E",
            apartmentNo: "1010",
            rent: 25000,
            details:
                "Exclusive penthouse with 5 bedrooms, private terrace, and luxury amenities.",
        },
    ];

    return apartments.map((a, index) => (
        <div
            key={a.apartmentNo}
            className={` p-2 py-6  ${index % 2 === 0 ? "bg-base-200" : ""}`}
        >
            <div className="max-w-screen-2xl mx-auto flex items-center flex-col lg:flex-row-reverse gap-10">
                <img
                    src={a.apartmentImage}
                    className="lg:w-5/12 sm:w-10/12 w-full rounded-lg shadow-2xl"
                />
                <div className="lg:w-7/12 sm:w-10/12 w-full">
                    <h1 className="sm:text-5xl text-4xl font-bold  font-Source-Code-Pro">
                        Apartment No: {a.apartmentNo}
                    </h1>
                    <p className="mt-6 mb-4">{a.details}</p>
                    <h3 className="font-bold mt-4 text-xl font-Source-Code-Pro tracking-tight mb-2">
                        Details:
                    </h3>
                    <ul className="space-y-2 mb-6">
                        <li>
                            <span className="font-semibold underline">
                                Floor:
                            </span>{" "}
                            {a.floorNo}
                        </li>
                        <li>
                            <span className="font-semibold underline">
                                Block:
                            </span>{" "}
                            {a.blockName}
                        </li>
                        <li>
                            <span className="font-semibold underline">
                                Rent:
                            </span>{" "}
                            {a.rent} {" BDT / Month"}
                        </li>
                    </ul>
                    <button className="btn rounded-none text-white hover:bg-[#004] bg-[#002]">
                        Rent This Apartment
                    </button>
                </div>
            </div>
        </div>
    ));
};

export default Rooms;

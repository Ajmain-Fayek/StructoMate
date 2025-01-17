import { useState } from "react";

const Rooms = () => {
    const apartments = [
        {
            apartmentImage: "https://i.ibb.co.com/yp6JT3C/Apartment-1.webp",
            floorNo: 1,
            blockName: "A",
            apartmentNo: "101",
            rent: 10000,
            details:
                "Cozy 1-bedroom apartment with modern amenities and a great view.",
        },
        {
            apartmentImage: "https://i.ibb.co.com/yQYkSFk/Apartment-2.webp",
            floorNo: 2,
            blockName: "A",
            apartmentNo: "202",
            rent: 12000,
            details:
                "Spacious 2-bedroom apartment with a balcony and ample sunlight.",
        },
        {
            apartmentImage: "https://i.ibb.co.com/4gdP81G/Apartment-3.webp",
            floorNo: 3,
            blockName: "B",
            apartmentNo: "303",
            rent: 14000,
            details:
                "Modern 1-bedroom apartment, perfect for young professionals.",
        },
        {
            apartmentImage: "https://i.ibb.co.com/sRVY17Y/Apartment-4.webp",
            floorNo: 4,
            blockName: "B",
            apartmentNo: "404",
            rent: 16000,
            details:
                "Elegant 2-bedroom apartment with premium fittings and parking space.",
        },
        {
            apartmentImage: "https://i.ibb.co.com/G7BWtkw/Apartment-5.webp",
            floorNo: 5,
            blockName: "C",
            apartmentNo: "505",
            rent: 18000,
            details:
                "Bright 3-bedroom apartment with a large living area and kitchen.",
        },
        {
            apartmentImage: "https://i.ibb.co.com/z5HqmYP/Apartment-6.webp",
            floorNo: 6,
            blockName: "C",
            apartmentNo: "606",
            rent: 20000,
            details:
                "Stylish 2-bedroom apartment with access to a swimming pool and gym.",
        },
        {
            apartmentImage: "https://i.ibb.co.com/KyfpYnR/Apartment-7.webp",
            floorNo: 7,
            blockName: "D",
            apartmentNo: "707",
            rent: 22000,
            details:
                "Luxury 3-bedroom apartment with smart home features and rooftop access.",
        },
        {
            apartmentImage: "https://i.ibb.co.com/0JvdcYm/Apartment-8.webp",
            floorNo: 8,
            blockName: "D",
            apartmentNo: "808",
            rent: 24000,
            details:
                "Premium 4-bedroom apartment ideal for large families, with great views.",
        },
        {
            apartmentImage: "https://i.ibb.co.com/JR23898/Apartment-9.webp",
            floorNo: 9,
            blockName: "E",
            apartmentNo: "909",
            rent: 15000,
            details:
                "Comfortable 2-bedroom apartment with close proximity to schools and parks.",
        },
        {
            apartmentImage: "https://i.ibb.co.com/bRCRtLW/Apartment-10.webp",
            floorNo: 10,
            blockName: "E",
            apartmentNo: "1010",
            rent: 25000,
            details:
                "Exclusive penthouse with 5 bedrooms, private terrace, and luxury amenities.",
        },
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const [searchRent, setSearchRent] = useState("");
    const apartmentsPerPage = 6;

    const filteredApartments = apartments
        .filter(
            (apartment) =>
                apartment.rent <= parseInt(searchRent) || searchRent === ""
        )
        .sort((a, b) => b.rent - a.rent);

    const indexOfLastApartment = currentPage * apartmentsPerPage;
    const indexOfFirstApartment = indexOfLastApartment - apartmentsPerPage;
    const currentApartments = filteredApartments.slice(
        indexOfFirstApartment,
        indexOfLastApartment
    );

    const totalPages = Math.ceil(filteredApartments.length / apartmentsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleCLear = () => {
        setSearchRent("");
    };

    return (
        <div>
            <div className="flex justify-center px-2 my-4">
                <input
                    type="number"
                    placeholder="Search by maximum rent"
                    value={searchRent}
                    onChange={(e) => setSearchRent(e.target.value)}
                    className="input rounded-none border-[#002] ring-0 outline-none focus:outline-none focus:border-[#002] input-bordered w-full max-w-xs"
                />
                <button
                    onClick={handleCLear}
                    className="btn border border-[#002] rounded-none bg-[#002] hover:bg-[#003] text-white"
                >
                    Clear
                </button>
            </div>
            {currentApartments.length === 0 && (
                <div className="text-center flex justify-center p-2 bg-base-200">
                    <span className="w-fit p-2 bg-red-50 border border-red-700 text-red-700">
                        No apartment found within this range
                    </span>
                </div>
            )}
            {currentApartments.map((a, index) => (
                <div
                    key={a.apartmentNo}
                    className={`p-2 py-6 ${
                        index % 2 === 0 ? "bg-base-200" : ""
                    }`}
                >
                    <div className="max-w-screen-2xl mx-auto flex items-center flex-col lg:flex-row-reverse gap-10">
                        <img
                            src={a.apartmentImage}
                            alt={a.details}
                            title={"Apartment No:"+a.apartmentNo+", "+a.details}
                            className="lg:w-5/12 sm:w-10/12 w-full rounded-lg shadow-2xl"
                        />
                        <div className="lg:w-7/12 sm:w-10/12 w-full">
                            <h1 className="sm:text-5xl text-4xl font-bold font-Source-Code-Pro">
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
            ))}
            <div className="flex justify-center my-4">
                <button
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                    className="btn btn-sm rounded-none bg-[#001] hover:bg-[#003] text-white font-medium mx-2"
                >
                    Previous
                </button>
                <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className="btn btn-sm rounded-none bg-[#001] hover:bg-[#003] text-white font-medium mx-2"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Rooms;

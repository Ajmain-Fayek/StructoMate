import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import useAxios from "../../../Hooks/useAxios";

const Rooms = () => {
    const [apartments, setAgreements] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchRent, setSearchRent] = useState("");
    const navigate = useNavigate();
    const axiosFetch = useAxios();

    const fetchApartments = async () => {
        try {
            const response = await axiosFetch.get("/apartments");
            setAgreements(response?.data?.result || []);
        } catch (error) {
            console.error("Failed to fetch Apartments Request:", error);
        }
    };
    useEffect(() => {
        fetchApartments();
    }, [axiosFetch]);

    if (!apartments.length) {
        return (
            <div className="text-center flex items-center loading_screen">
                <span className="loading mx-auto text-center loading-ring loading-lg"></span>
            </div>
        );
    }

    const apartmentsPerPage = 6;

    // Filter Apartment
    const filteredApartments = apartments
        .filter(
            (apartment) =>
                apartment.rent <= parseInt(searchRent) || searchRent === ""
        )
        .sort((a, b) => b.rent - a.rent);

    // Pagination
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

    // Clear Search query
    const handleCLear = () => {
        setSearchRent("");
    };

    // handle search query
    const handleSearchRent = (e) => {
        setCurrentPage(1);
        setSearchRent(e.target.value);
    };

    return (
        <div>
            {apartments && (
                <>
                    <div className="flex justify-center px-2 py-4">
                        <input
                            type="number"
                            placeholder="Search by maximum rent"
                            value={searchRent}
                            onChange={handleSearchRent}
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
                                index % 2 === 0 ? "bg-white" : "bg-base-200"
                            }`}
                        >
                            <div className="max-w-screen-2xl mx-auto flex items-center flex-col lg:flex-row-reverse gap-10">
                                <img
                                    src={a.apartmentImage}
                                    alt={a.details}
                                    title={
                                        "Apartment No:" +
                                        a.apartmentNo +
                                        ", " +
                                        a.details
                                    }
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
                                    <button
                                        onClick={() =>
                                            navigate(`/apartment/${a._id}`)
                                        }
                                        className="btn rounded-none text-white hover:bg-[#004] bg-[#002]"
                                    >
                                        Rent This Apartment
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="flex justify-center py-4">
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
                </>
            )}
        </div>
    );
};

export default Rooms;

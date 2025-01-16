const Coupons = () => {
    return (
        <div
            className=" 
        flex flex-col justify-evenly h-[100%] bg-gradient-to-r from-indigo-500 to-violet-500 text-white p-6 shadow-lg w-full mx-auto"
        >
            <div className="text-xl font-Source-Code-Pro font-bold mb-4">
                StructoMate
            </div>
            <div className="text-xl font-bold mb-4">Special Offer!</div>
            <div className="text-base mb-4">
                Get <span className="text-yellow-400 font-bold">25% OFF</span>{" "}
                on first month rent!
            </div>
            <div className="text-base  mb-4">Use coupon code:</div>
            <div className="bg-white text-gray-800 rounded-lg px-4 py-2 flex items-center justify-between">
                <span className="text-xl font-Source-Code-Pro lg:text-lg font-semibold">
                    STRUCTO25
                </span>
                <button className="bg-blue-800 text-white px-3 py-1 btn-sm rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    Copy
                </button>
            </div>
            <div className="text-sm mt-4">
                <p>
                    Valid until{" "}
                    <span className="font-semibold">February 5, 2025</span>
                </p>
                <p>Terms and conditions apply.</p>
            </div>
        </div>
    );
};

export default Coupons;

import building1 from "../../../assets/Building/Building (1).webp";
const AboutTheBuilding = () => {
    return (
        <div className="max-w-screen-2xl p-2 mx-auto">
            <div className="flex items-center flex-col lg:flex-row-reverse gap-10">
                <img
                    src={building1}
                    className="lg:w-5/12 w-2/3 rounded-lg shadow-2xl"
                />
                <div className="lg:w-7/12 w-2/3">
                    <h1 className="text-5xl font-bold font-Source-Code-Pro">
                        About the Building
                    </h1>
                    <p className="mt-6 mb-4">
                        This building represents the perfect blend of
                        innovation, functionality, and modern design, creating
                        an ideal environment for residents, visitors, and
                        administrators alike.
                    </p>
                    <h3 className="font-bold text-xl font-Source-Code-Pro tracking-tight mb-2">
                        Key highlights of the building include:
                    </h3>
                    <ul className="space-y-2 mb-6">
                        <li>
                            <span className="font-semibold underline">
                                Energy Efficiency:
                            </span>{" "}
                            Smart lighting and HVAC systems.
                        </li>
                        <li>
                            <span className="font-semibold underline">Security:</span>{" "}
                            CCTV, keycard access, and real-time monitoring.
                        </li>
                        <li>
                            <span className="font-semibold underline">
                                Facility Management:
                            </span>{" "}
                            Managed parking, storage, and recreational spaces.
                        </li>
                        <li>
                            <span className="font-semibold underline">User Comfort:</span>{" "}
                            High-speed internet and ergonomic layouts.
                        </li>
                        <li>
                            <span className="font-semibold underline">
                                Smart Integration:
                            </span>{" "}
                            IoT-ready infrastructure for a seamless experience.
                        </li>
                    </ul>
                    <button className="btn rounded-none text-white hover:bg-[#004] bg-[#002]">
                        Rent Apartment
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AboutTheBuilding;

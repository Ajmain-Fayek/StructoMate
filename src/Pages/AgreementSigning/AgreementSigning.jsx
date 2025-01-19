import { useLoaderData } from "react-router";
import useAuthContext from "../../Hooks/useAuthContext";

const AgreementSigning = () => {
    const data = useLoaderData();
    const { user } = useAuthContext();
    return (
        <div className="p-4">
            <div className="max-w-3xl mx-auto p-8 bg-white shadow-md rounded-md font-sans">
                <h1 className="text-2xl font-bold text-center mb-4">
                    Residential Lease Agreement
                </h1>
                <p className="text-gray-700 mb-6">
                    This Residential Lease Agreement &quot;Agreement&quot; is
                    made and entered into on{" "}
                    <strong className="text-black">
                        {new Date().toLocaleDateString()}
                    </strong>{" "}
                    by and between{" "}
                    <strong className="text-black">StructoMate</strong>{" "}
                    &quot;Landlord&quot; and{" "}
                    <strong className="text-black">{user?.displayName}</strong>{" "}
                    &quot;Tenant&quot;.
                </p>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">
                        1. Apartment Details
                    </h2>
                    <div className="mb-4">
                        <img
                            src={data?.apartmentImage}
                            alt={`Apartment ${data?.apartmentNo}`}
                            className="w-full h-64 object-cover rounded-md"
                        />
                    </div>
                    <ul className="list-disc pl-6 text-gray-700">
                        <li>
                            <strong>Apartment Number:</strong>{" "}
                            {data?.apartmentNo}
                        </li>
                        <li>
                            <strong>Block Name:</strong> {data?.blockName}
                        </li>
                        <li>
                            <strong>Floor Number:</strong> {data?.floorNo}
                        </li>
                        <li>
                            <strong>Rent:</strong> {data?.rent} {" BDT / Month"}
                        </li>
                        <li>
                            <strong>Details:</strong> {data?.details}
                        </li>
                    </ul>
                </section>
                {/* -========================== Terms -========================== */}
                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">
                        2. Term
                    </h2>
                    <p className="text-gray-700">
                        The lease term shall commence on{" "}
                        <strong>February 1, 2025</strong> and shall:{" "}
                    </p>
                    <ul className="list-disc pl-6 mt-2">
                        <li>
                            Last for a fixed period ending on{" "}
                            <strong>January 31, 2026</strong>.
                        </li>
                    </ul>
                </section>
                {/* -========================== Rent -========================== */}
                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">
                        3. Rent
                    </h2>
                    <p className="text-gray-700">
                        The Tenant agrees to pay a monthly rent of{" "}
                        <strong>{data?.rent} BDT</strong>, payable in advance on
                        or before the <strong>1st day</strong> of each month.
                        Payments shall be made via{" "}
                        <strong>online transfer through Structomate</strong>.
                    </p>
                </section>
                {/* -========================== Security -========================== */}
                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">
                        4. Security Deposit
                    </h2>
                    <p className="text-gray-700">
                        The Tenant shall pay a security deposit of{" "}
                        <strong>${data?.rent}</strong>, refundable at the end of
                        the lease term, provided there are no damages or
                        outstanding dues.
                    </p>
                </section>
                {/* -========================== Utilities & Services -========================== */}
                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">
                        5. Utilities and Services
                    </h2>
                    <ul className="list-disc pl-6 text-gray-700">
                        <li>
                            <strong>Electricity:</strong> Tenant
                        </li>
                        <li>
                            <strong>Water:</strong> Landlord
                        </li>
                        <li>
                            <strong>Internet:</strong> Tenant
                        </li>
                        <li>
                            <strong>Gas:</strong> Tenant
                        </li>
                    </ul>
                </section>
                {/* -========================== Maintanence & Reports -========================== */}
                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">
                        6. Maintenance and Repairs
                    </h2>
                    <p className="text-gray-700">
                        - The Tenant shall keep the Premises clean and in good
                        condition. <br />
                        - Any damages caused by the Tenant or their guests will
                        be repaired at the Tenant&apos;s expense. <br />- The
                        Landlord is responsible for major repairs and structural
                        maintenance.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">
                        7. Use of Premises
                    </h2>
                    <p className="text-gray-700">
                        The Premises shall be used solely for residential
                        purposes. Subletting or any unauthorized use is strictly
                        prohibited.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">
                        8. Termination
                    </h2>
                    <p className="text-gray-700">
                        This Agreement may be terminated by either party with{" "}
                        <strong>30</strong> days&apos; notice.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">
                        9. Additional Terms
                    </h2>
                    <ul className="list-disc pl-6 text-gray-700">
                        <li>Pets are not allowed on the Premises.</li>
                        <li>
                            Smoking is strictly prohibited inside the apartment.
                        </li>
                        <li>
                            Tenant is assigned Parking Spot #12 in the building
                            lot.
                        </li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">
                        10. Signatures
                    </h2>
                    <p className="text-gray-700 mb-4">
                        By signing below, both parties agree to the terms and
                        conditions of this Agreement.
                    </p>
                    <p>
                        <strong>Landlord&apos;s Signature:</strong>{" "}
                        ___________________________
                        <br />
                        Date: ___________________________
                    </p>
                    <p className="mt-4">
                        <strong>Tenant&apos;s Signature:</strong>{" "}
                        {user?.displayName}, {user?.email}
                        <br />
                        Date: {new Date().toLocaleDateString()}
                    </p>
                </section>

                <section className="mt-8 text-center">
                    <button className="btn w-24 rounded-none bg-[#002] hover:bg-[#004] text-white">
                        Apply
                    </button>
                </section>
            </div>
        </div>
    );
};

export default AgreementSigning;

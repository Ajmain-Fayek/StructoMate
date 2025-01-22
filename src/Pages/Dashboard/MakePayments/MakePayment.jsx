import { useEffect, useState } from "react";
import useAuthContext from "../../../Hooks/useAuthContext";
import useAxios from "../../../Hooks/useAxios";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckoutForm/CheckOutForm";

// TODO - Add your Stripe Public Key
const stripePromise = loadStripe(import.meta.env.VITE_stripe_public_key);

const MakePayment = () => {
    const { user } = useAuthContext();
    const axiosFetch = useAxios();
    const [agreements, setAgreements] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [paymentData, setPaymentData] = useState([]);

    const fetchAgreements = async () => {
        try {
            const token = localStorage.getItem("token");
            const { data } = await axiosFetch.post("/member/agreements", {
                token,
                tenantEmail: user?.email,
                tenant_id: user?._id,
            });
            const { result } = data;
            const { apartmentDetails } = result;
            setAgreements(apartmentDetails || []);
        } catch (error) {
            console.log("Failed to fetch Agreements Request:", error);
        }
    };

    useEffect(() => {
        if (user?.role === "member") {
            fetchAgreements();
        }
    }, [user]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        data["userId"] = user?._id;
        setPaymentData(data || []);
        setShowModal((prev) => !prev);
    };

    if (agreements.length === 0) {
        return (
            <div className="text-center flex items-center loading_screen">
                <span className="loading mx-auto text-center loading-ring loading-lg"></span>
            </div>
        );
    }
    return (
        <div>
            <h1 className="text-2xl font-semibold text-center p-2 shadow-lg mb-4 border">
                Pay Rent
            </h1>
            <p className="p-1 text-red-700 text-xs">
                {" "}
                <span className="font-semibold">Note:</span> Please select the
                month for rent payment.
            </p>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-3 border p-4 shadow-lg bg-base-200"
            >
                <div className="flex flex-col">
                    <label className="font-semibold">Email: </label>
                    <input
                        className="border p-2 focus:outline-none border-gray-300 cursor-not-allowed"
                        type="email"
                        name="email"
                        defaultValue={user?.email}
                        readOnly
                    />
                </div>
                <div className="flex flex-col">
                    <label className="font-semibold">Floor: </label>
                    <input
                        className="border p-2 focus:outline-none border-gray-300 cursor-not-allowed"
                        type="text"
                        name="floor"
                        defaultValue={agreements?.floorNo}
                        readOnly
                    />
                </div>
                <div className="flex flex-col">
                    <label className="font-semibold">Block Name: </label>
                    <input
                        className="border p-2 focus:outline-none border-gray-300 cursor-not-allowed"
                        type="text"
                        name="blockName"
                        defaultValue={agreements?.blockName}
                        readOnly
                    />
                </div>
                <div className="flex flex-col">
                    <label className="font-semibold">
                        Apartment No/Room No:{" "}
                    </label>
                    <input
                        className="border p-2 focus:outline-none border-gray-300 cursor-not-allowed"
                        type="text"
                        name="apartmentNo"
                        defaultValue={agreements?.apartmentNo}
                        readOnly
                    />
                </div>
                <div className="flex flex-col">
                    <label className="font-semibold">Rent: </label>
                    <input
                        className="border p-2 focus:outline-none border-gray-300 cursor-not-allowed"
                        type="text"
                        name="rent"
                        defaultValue={agreements?.rent}
                        readOnly
                    />
                </div>
                <div className="flex flex-col">
                    <label className="font-semibold">Month: </label>
                    <select
                        className="border p-2 focus:outline-none border-gray-300 cursor-pointer"
                        name="month"
                        defaultValue={new Date().toLocaleString("default", {
                            month: "long",
                        })}
                        required
                    >
                        <option value="">Select Month</option>
                        <option value="January">January</option>
                        <option value="February">February</option>
                        <option value="March">March</option>
                        <option value="April">April</option>
                        <option value="May">May</option>
                        <option value="June">June</option>
                        <option value="July">July</option>
                        <option value="August">August</option>
                        <option value="September">September</option>
                        <option value="October">October</option>
                        <option value="November">November</option>
                        <option value="December">December</option>
                    </select>
                </div>
                <button
                    type="submit"
                    className="bg-[#002] text-white btn-wide p-2 mt-4 btn rounded-none hover:bg-[#004]"
                >
                    Pay
                </button>
            </form>
            {/* Payment Modal */}
            <dialog
                id="my_modal_3"
                className={`modal ${showModal ? "modal-open" : ""}`}
            >
                <div className="modal-box rounded-none">
                    <form onSubmit={(e) => e.preventDefault()} method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button
                            onClick={() => setShowModal((prev) => !prev)}
                            className="btn text-red-600 btn-sm btn-circle btn-ghost absolute right-2 top-2"
                        >
                            ✕
                        </button>
                    </form>
                    <div className="py-4">
                        <Elements stripe={stripePromise}>
                            <CheckOutForm
                                paymentData={paymentData}
                                setShowModal={setShowModal}
                            />
                        </Elements>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default MakePayment;

import { useEffect, useState } from "react";
import useAxios from "../../../Hooks/useAxios";
import { format, formatISO } from "date-fns";
import { Slide, toast } from "react-toastify";

const AgreementRequests = () => {
    const [agreements, setAgreements] = useState([]);
    const axiosFetch = useAxios();

    const fetchAgreements = async () => {
        try {
            const token = localStorage.getItem("token");
            const { data } = await axiosFetch.post("/pending/agreements", {
                token,
            });
            setAgreements(data || []);
        } catch (error) {
            console.error("Failed to fetch Agreements Request:", error);
        }
    };

    const acceptAgreement = async (a) => {
        try {
            const token = localStorage.getItem("token");
            const { data } = await axiosFetch.post("/accept/agreements", {
                token,
                tenant_id: a?.tenant_id,
                agreement_id: a?._id,
                agreementCheckedDate: formatISO(new Date()),
            });
            if (data?.status === 200) {
                toast.success("Agreement Checked", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Slide,
                });
            }
            fetchAgreements();
        } catch (err) {
            toast.error("Internal Server Error!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Slide,
            });
            console.error("Failed to fetch coupons:", err);
        }
    };
    const rejectAgreement = async (a) => {
        try {
            const token = localStorage.getItem("token");
            const { data } = await axiosFetch.post("/reject/agreements", {
                token,
                agreement_id: a?._id,
                agreementCheckedDate: formatISO(new Date()),
            });
            if (data?.status === 200) {
                toast.success("Agreement rejected!", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Slide,
                });
            }
            fetchAgreements();
        } catch (err) {
            toast.error("Internal Server Error!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Slide,
            });
            console.error("Failed to fetch coupons:", err);
        }
    };

    useEffect(() => {
        fetchAgreements();
    }, [axiosFetch]);

    return (
        <div className="space-y-4">
            {agreements.length > 0 ? (
                agreements.map((a) => (
                    <div
                        key={a?._id}
                        className="bg-base-200 shadow-md p-2 border border-gray-300 space-y-1"
                    >
                        <p>
                            <span className="font-semibold">Tenant:</span>{" "}
                            {a?.tenant}
                        </p>
                        <p>
                            <span className="font-semibold">Tenant Email:</span>{" "}
                            {a?.tenantEmail}
                        </p>
                        <div className="flex flex-wrap flex-grow gap-x-3.5">
                            <p>
                                <span className="font-semibold">
                                    Apartment:
                                </span>{" "}
                                {a?.apartmentDetails?.apartmentNo}
                            </p>
                            <p>
                                <span className="font-semibold">Floor:</span>{" "}
                                {a?.apartmentDetails?.floorNo}
                            </p>
                            <p>
                                <span className="font-semibold">Block:</span>{" "}
                                {a?.apartmentDetails?.blockName}
                            </p>
                            <p>
                                <span className="font-semibold">Rent:</span>{" "}
                                {a?.apartmentDetails?.rent}
                            </p>
                        </div>
                        <p>
                            <span className="font-semibold">Tenant type:</span>{" "}
                            {a?.type}
                        </p>
                        <p>
                            <span className="font-semibold">
                                Agreement Requested:
                            </span>{" "}
                            {format(
                                new Date(a?.agreementSigningDate),
                                "dd MMM, yyyy"
                            )}
                        </p>
                        <p>
                            <span className="font-semibold">Status:</span>{" "}
                            {a?.status}
                        </p>
                        <div className="flex gap-4 flex-wrap pt-4">
                            <button
                                onClick={() => acceptAgreement(a)}
                                className="btn btn-sm font-normal rounded-none bg-[#002] hover:bg-[#004] text-white"
                            >
                                Accept
                            </button>
                            <button
                                onClick={() => rejectAgreement(a)}
                                className="btn btn-sm font-normal rounded-none bg-[#b00] hover:bg-[#f00] text-white"
                            >
                                Reject
                            </button>
                        </div>
                    </div>
                ))
            ) : (
                <div className="text-center bg-base-200 p-2 shadow-md">
                    No Pending Agreements.
                </div>
            )}
        </div>
    );
};

export default AgreementRequests;

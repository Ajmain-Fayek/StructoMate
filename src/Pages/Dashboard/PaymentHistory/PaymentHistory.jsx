import { useEffect, useState } from "react";
import useAuthContext from "../../../Hooks/useAuthContext";
import useAxios from "../../../Hooks/useAxios";
import { format } from "date-fns";

const PaymentHistory = () => {
    const { user } = useAuthContext();
    const axiosFetch = useAxios();
    const [paymentHistory, setPaymentHistory] = useState([]);

    const fetchPaymentHistory = async () => {
        try {
            const token = localStorage.getItem("token");
            const { data } = await axiosFetch.post("/get/transactions", {
                token: token,
                email: user?.email,
                userId: user?._id,
            });
            setPaymentHistory(data || []);
        } catch (error) {
            console.log("Failed to fetch Payment History Request:", error);
        }
    };

    useEffect(() => {
        fetchPaymentHistory();
    }, [user, axiosFetch]);

    return (
        <div>
            <h1 className="text-2xl font-semibold text-center p-2 shadow-lg mb-4 border">
                Payment History
            </h1>
            {/* Coupon List */}
            <section className="border border-gray-300 shadow-lg">
                <div className="overflow-auto">
                    <table className="w-full bg-white">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="py-2 px-4 border-r border-gray-300">Time/Date </th>
                                <th className="py-2 px-4 border-r border-gray-300">Amount</th>
                                <th className="py-2 px-4">TRX ID </th>
                            </tr>
                        </thead>
                        <tbody>
                            {paymentHistory.length > 0 ? (
                                paymentHistory.map((payment, index) => (
                                    <tr
                                        key={payment?._id}
                                        className={`hover:bg-gray-300 text-center ${
                                            index % 2 === 1 ? "bg-gray-200" : ""
                                        }`}
                                    >
                                        <td className="py-2 px-4 border-r border-gray-300">
                                            {format(
                                                new Date(payment.date),
                                                "hh:mm aa, dd MMM, yyyy"
                                            )}
                                        </td>
                                        <td className="py-2 px-4 border-r border-gray-300">
                                            {payment.rent + " BDT"}
                                        </td>
                                        <td className="py-2 px-4 text-center">
                                            {" "}
                                            {payment.transactionId}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan={3}
                                        className="text-center py-4 text-gray-500"
                                    >
                                        No payment History available.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
};

export default PaymentHistory;

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxios from "../../../../Hooks/useAxios";
import useAuthContext from "../../../../Hooks/useAuthContext";
import { Slide, toast } from "react-toastify";
import { formatISO } from "date-fns";

const CheckOutForm = ({ paymentData, setShowModal }) => {
    const { user } = useAuthContext();
    const axiosFetch = useAxios();
    const stripe = useStripe();
    const elements = useElements();
    const [errorMessage, setErrorMessage] = useState(null);
    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        const token = localStorage.getItem("token");

        const rentAmount = paymentData?.rent;
        if (!rentAmount || isNaN(rentAmount)) {
            console.log("Invalid rent value on client side:", rentAmount);
            return;
        }

        axiosFetch
            .post("/create-payment-intent", {
                ...paymentData,
                token,
                currency: "usd",
            })
            .then((res) => {
                setClientSecret(res?.data?.clientSecret);
            })
            .catch((error) => {
                console.error(
                    "Error creating payment intent:",
                    error.response.data
                );
            });
    }, [paymentData, axiosFetch]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setErrorMessage(null);

        if (!elements || !stripe || !paymentData) {
            return;
        }

        const cardElement = elements.getElement(CardElement);

        if (!cardElement) {
            return;
        }

        const { error } = await stripe.createPaymentMethod({
            type: "card",
            card: cardElement,
        });

        if (error) {
            console.log(error);
            setErrorMessage(error.message);
            return;
        } else {
            setErrorMessage(null);
        }

        // confirm payment
        const { paymentIntent, error: paymentError } =
            await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: cardElement,
                    billing_details: {
                        name: user?.displayName,
                        email: user?.email,
                    },
                },
            });

        if (paymentError) {
            console.error("[Payment Error]", paymentError);
            setErrorMessage(paymentError.message);
        } else {
            if (paymentIntent.status === "succeeded") {
                // save payment to database
                const token = localStorage.getItem("token");

                const transaction = {
                    ...paymentData,
                    transactionId: paymentIntent?.id,
                    userId: user?._id,
                    date: formatISO(paymentIntent?.created * 1000),
                };

                const { data } = await axiosFetch.post("/save/transaction", {
                    token: token,
                    transaction: transaction,
                });
                setShowModal((prev) => !prev);
                if (data?.insertedId) {
                    toast.success("Payment Succeeded", {
                        pposition: "top-right",
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
            }
        }
    };

    return (
        <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
                <span>
                    Payment of {paymentData?.month} {paymentData?.rent}
                    {" BDT "}
                </span>
            </div>
            <span className="p-1 bg-red-50 block border border-red-300 text-red-700 text-xs">
                Ex. Card No: 4242424242424242 <br /> cvc - any 3 digit number{" "}
                <br /> date: any future date <br /> zip code: any 5 digit number
            </span>
            <input
                type="text"
                className="border w-full p-2 focus:outline-none"
                placeholder="Coupon (Optional)"
            />
            <CardElement className="p-2 border border-gray-300" />
            {errorMessage && (
                <div className="text-red-600 text-xs">{errorMessage}</div>
            )}
            <button
                className="bg-[#002] text-white px-8 p-2 mt-4 btn-sm btn rounded-none hover:bg-[#004]"
                type="submit"
                disabled={!stripe || !elements || !paymentData}
            >
                Pay
            </button>
        </form>
    );
};

export default CheckOutForm;

import { formatISO, getMonth, getYear } from "date-fns";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Slide, toast } from "react-toastify";
import useAxios from "../../../Hooks/useAxios";

const ManageCoupons = () => {
    const [coupons, setCoupons] = useState([]);
    const [startDate, setStartDate] = useState(new Date());
    const axiosFetch = useAxios();

    const fetchCoupons = async () => {
        try {
            const token = localStorage.getItem("token");
            const { data } = await axiosFetch.post("/get/coupons", { token });
            setCoupons(data || []);
        } catch (error) {
            console.error("Failed to fetch coupons:", error);
        }
    };

    useEffect(() => {
        fetchCoupons();
    }, [axiosFetch]);

    const handleRemove = async ({ _id }) => {
        try {
            const token = localStorage.getItem("token");
            const res = await axiosFetch.post("/delete/coupons", {
                token,
                id: _id,
            });

            if (res.status === 200) {
                fetchCoupons();
                toast.success("Coupon removed successfully", {
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
        } catch (error) {
            console.error("Failed to remove coupon:", error);
            toast.error("Failed to remove coupon", {
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
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const newCoupon = {
            heading: formData.get("heading"),
            description: formData.get("description"),
            code: formData.get("couponCode"),
            validity: formatISO(startDate),
            createDate: formatISO(new Date()),
        };

        try {
            const token = localStorage.getItem("token");
            const res = await axiosFetch.post("/create/coupons", {
                newCoupon,
                token,
            });

            if (res.status === 201) {
                fetchCoupons();
                toast.success("Coupon created successfully", {
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
                e.target.reset();
            }
        } catch (error) {
            console.error("Failed to create coupon:", error);
            toast.error("Failed to create coupon", {
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
    };

    const years = Array.from(
        { length: getYear(new Date()) - 2023 },
        (_, i) => 2024 + i
    );
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    return (
        <div className="space-y-4">
            {/* Coupon Creation Form */}
            <section className="border border-gray-300 p-4 shadow-lg">
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <input
                        className="border p-2"
                        placeholder="Headline (Max - 2 words)"
                        name="heading"
                        maxLength={50}
                        required
                    />
                    <input
                        className="border p-2"
                        placeholder="Description (Max - 30 characters)"
                        name="description"
                        maxLength={30}
                        required
                    />
                    <input
                        className="border p-2"
                        placeholder="Coupon Code (Max - 10 characters)"
                        name="couponCode"
                        maxLength={10}
                        required
                    />
                    <DatePicker
                        renderCustomHeader={({
                            date,
                            changeYear,
                            changeMonth,
                            decreaseMonth,
                            increaseMonth,
                            prevMonthButtonDisabled,
                            nextMonthButtonDisabled,
                        }) => (
                            <div className="flex justify-center gap-2">
                                <button
                                    onClick={decreaseMonth}
                                    disabled={prevMonthButtonDisabled}
                                    className="p-1 border"
                                >
                                    {"<"}
                                </button>
                                <select
                                    value={getYear(date)}
                                    onChange={({ target: { value } }) =>
                                        changeYear(Number(value))
                                    }
                                    className="p-1 border"
                                >
                                    {years.map((year) => (
                                        <option key={year} value={year}>
                                            {year}
                                        </option>
                                    ))}
                                </select>
                                <select
                                    value={months[getMonth(date)]}
                                    onChange={({ target: { value } }) =>
                                        changeMonth(months.indexOf(value))
                                    }
                                    className="p-1 border"
                                >
                                    {months.map((month) => (
                                        <option key={month} value={month}>
                                            {month}
                                        </option>
                                    ))}
                                </select>
                                <button
                                    onClick={increaseMonth}
                                    disabled={nextMonthButtonDisabled}
                                    className="p-1 border"
                                >
                                    {">"}
                                </button>
                            </div>
                        )}
                        selected={startDate}
                        onChange={setStartDate}
                        className="border p-2"
                        dateFormat="MMMM d, yyyy"
                    />
                    <button
                        type="submit"
                        className="bg-[#002] text-white p-2 mt-4 btn rounded-none hover:bg-[#004]"
                    >
                        Submit Coupon
                    </button>
                </form>
            </section>

            {/* Coupon List */}
            <section className="border border-gray-300 shadow-lg">
                <div className="overflow-auto">
                    <table className="w-full bg-white">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="py-2 px-4">Heading</th>
                                <th className="py-2 px-4">Coupon Code</th>
                                <th className="py-2 px-4">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {coupons.length > 0 ? (
                                coupons.map((coupon, index) => (
                                    <tr
                                        key={coupon?._id}
                                        className={`hover:bg-gray-300 ${
                                            index % 2 === 1 ? "bg-gray-200" : ""
                                        }`}
                                    >
                                        <td className="py-2 px-4">
                                            {coupon?.heading}
                                        </td>
                                        <td className="py-2 px-4">
                                            {coupon?.code}
                                        </td>
                                        <td className="py-2 px-4 text-center">
                                            <button
                                                onClick={() =>
                                                    handleRemove(coupon)
                                                }
                                                className="bg-red-500 active:scale-95 transition-all ease-linear hover:scale-105 text-white p-2 rounded hover:bg-red-600"
                                            >
                                                Remove
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan={3}
                                        className="text-center py-4 text-gray-500"
                                    >
                                        No coupons available.
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

export default ManageCoupons;

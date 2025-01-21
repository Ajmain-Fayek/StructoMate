import { useEffect, useState } from "react";
import useAxios from "../../../../Hooks/useAxios";
import useAuthContext from "../../../../Hooks/useAuthContext";
import { format } from "date-fns";

const UserAnnouncements = () => {
    const axiosFetch = useAxios();
    const { user } = useAuthContext();
    const [data, setData] = useState({});
    const [data2, setData2] = useState();

    const fetchData = async () => {
        const token = localStorage.getItem("token");
        const response2 = await axiosFetch.post("/get/userAnnouncement", {
            token,
        });
        setData2(response2?.data);

        const { data } = await axiosFetch.post(`/users/agreements/`, {
            token,
            tenantEmail: user?.email,
            tenant_id: user?._id,
        });
        setData({ ...data });
    };

    useEffect(() => {
        fetchData();
    }, [axiosFetch, user?.email]);

    return (
        <div className="space-y-2">
            {data?.result && (
                <div className="space-y-2 p-2 border border-gray-300 shadow-md mb-4">
                    <p className="text-yellow-600">
                        <span className="font-semibold text-black">
                            Status:
                        </span>{" "}
                        {data?.result?.status || "N/A"}
                    </p>
                    <p className="">
                        <span className="font-semibold text-black">
                            Agreement Signing Date:
                        </span>{" "}
                        {format(
                            new Date(data?.result?.agreementSigningDate),
                            "dd MMM, yyyy"
                        ) || "N/A"}
                    </p>
                    <p className="">
                        <span className="font-semibold text-black">
                            Agreement Checked Date:
                        </span>{" "}
                        {(data?.result?.agreementCheckedDate &&
                            format(
                                new Date(data?.result?.agreementCheckedDate),
                                "dd MMM, yyyy"
                            )) ||
                            "N/A"}
                    </p>
                </div>
            )}
            {/* Annoucement sections */}
            <div className="space-y-2">
                {data2 && data2.length > 0 ? (
                    data2.map((a) => (
                        <div
                            key={a._id}
                            className="bg-base-200 p-2 space-y-2 border border-gray-300"
                        >
                            <div className="relative shadow-md gap-2 bg-base-200">
                                <h3 className="font-medium p-2 w-full bg-white">
                                    {a?.title}
                                </h3>
                            </div>
                            <div className="pt-8 relative">
                                <div className="top-0 absolute">
                                    <span className="text-xs border mr-2 border-gray-300  p-1 bg-base-300">
                                        Type: {a?.type}
                                    </span>
                                    <span className="text-xs border border-gray-300  p-1 bg-base-300">
                                        {format(
                                            new Date(a?.date),
                                            "hh:mm a - dd MMM, yyyy"
                                        ) || "No Date"}
                                    </span>
                                </div>
                                <p className="p-2 w-full bg-white whitespace-pre-line">
                                    {a?.details}
                                </p>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center bg-base-200 p-2 shadow-md">
                        There is no Announcements yet.
                    </div>
                )}
            </div>
        </div>
    );
};

export default UserAnnouncements;

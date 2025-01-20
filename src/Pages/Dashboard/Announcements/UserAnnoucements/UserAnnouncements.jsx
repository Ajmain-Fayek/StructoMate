import { useEffect, useState } from "react";
import useAxios from "../../../../Hooks/useAxios";
import useAuthContext from "../../../../Hooks/useAuthContext";
import { format } from "date-fns";

const UserAnnouncements = () => {
    const axiosFetch = useAxios();
    const { user } = useAuthContext();
    const [data, setData] = useState({});
    const [data2, setData2] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem("token");
            const response = await axiosFetch.post(`/users/agreements/`, {
                token,
                tenantEmail: user?.email,
            });
            setData({ ...response?.data });
            const response2 = await axiosFetch.post("/get/userAnnouncement", {
                token,
            });
            setData2(response2?.data);
        };
        fetchData();
    }, [axiosFetch, user?.email]);
    return (
        <div className="space-y-2">
            <div className="space-y-2">
                <h3>
                    <span className="font-semibold">Agreements:</span>{" "}
                    {data?.agreementFound || "N/A"}
                </h3>
                <p className="font-semibold">
                    Status:{" "}
                    <span className="text-yellow-600 font-normal">
                        {(data?.agreementFound && "Pending...") || "N/A"}
                    </span>
                </p>
                {data?.agreementFound && (
                    <p className="font-semibold">
                        Tips:{" "}
                        <span className="text-green-700 font-normal">
                            The fruits of patience are sweet.
                        </span>
                    </p>
                )}
            </div>
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

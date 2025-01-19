import { useEffect, useState } from "react";
import useAxios from "../../../../Hooks/useAxios";
import useAuthContext from "../../../../Hooks/useAuthContext";
import { format } from "date-fns";

const UserAnnouncements = () => {
    const axiosFetch = useAxios();
    const { user } = useAuthContext();
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem("token");
            const response = await axiosFetch.post(`/users/agreements/`, {
                token,
                tenantEmail: user?.email,
            });
            console.log(response?.data);
            setData({ ...response?.data });
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
            <div className="bg-base-200 p-2 space-y-2">
                <div className="relative shadow-md gap-2 bg-base-200">
                    <h3 className="font-medium p-2 pr-24 w-full bg-white">
                        title
                    </h3>
                    <span className="text-xs absolute w-30 bg-white p-2 top-1 right-0">
                        {format(new Date(), "dd MMM, yyyy")}
                    </span>
                </div>
                <p className="p-2 w-full bg-white">Details....</p>
            </div>
        </div>
    );
};

export default UserAnnouncements;

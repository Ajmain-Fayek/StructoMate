import { useEffect, useState } from "react";
import useAxios from "../../../../Hooks/useAxios";
import useAuthContext from "../../../../Hooks/useAuthContext";

const UserAnnouncements = () => {
    const axiosFetch = useAxios();
    const { user } = useAuthContext();
    const [data, setData] = useState();

    useEffect(() => {
        const res = async () => {
            const token = localStorage.getItem("token");
            const response = await axiosFetch.post(`/users/agreements/`, {
                token,
                tenantEmail: user?.email,
            });
            // console.log(response?.data);
            return setData(response?.data);
        };
        return res;
    }, []);
    return (
        <div>
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
            <div className="bg-base-200">
                <div className="flex shadow-md gap-2 bg-base-200 p-2 justify-between">
                    <h3 className="font-semibold">Announcemenet Title</h3>
                    <span>Date..</span>
                </div>
                <p className="p-2">Details,...</p>
            </div>
        </div>
    );
};

export default UserAnnouncements;

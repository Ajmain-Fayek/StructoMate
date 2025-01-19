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
                        Pending...
                    </span>
                </p>
                <p className="font-semibold">
                    Tips:{" "}
                    <span className="text-green-700 font-normal">
                        The fruits of patience are sweet.
                    </span>
                </p>
            </div>
        </div>
    );
};

export default UserAnnouncements;

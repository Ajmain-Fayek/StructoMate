import { useEffect, useState } from "react";
import useAuthContext from "../../../../Hooks/useAuthContext";
import useAxios from "../../../../Hooks/useAxios";
import { format } from "date-fns";

const MemberAndUserProfile = () => {
    const { user } = useAuthContext();
    const axiosFetch = useAxios();
    const [agreements, setAgreements] = useState([]);

    const fetchAgreements = async () => {
        try {
            const token = localStorage.getItem("token");
            const { data } = await axiosFetch.post("/member/agreements", {
                token,
                tenantEmail: user?.email,
                tenant_id: user?._id,
            });
            setAgreements(data || []);
        } catch (error) {
            console.error("Failed to fetch Agreements Request:", error);
        }
    };

    useEffect(() => {
        if (user?.role === "member") {
            fetchAgreements();
        }
    }, [user]);

    return (
        <div className="space-y-4">
            <img
                src={user?.photoURL}
                className="h-40 max-w-64"
                title={"Photo of " + user?.displayName}
                alt={"Photo of " + user?.displayName}
            />
            <h3 className="text-2xl font-semibold">
                {user?.displayName || "Name: N/A"}
            </h3>
            <label htmlFor="a" className="flex gap-2">
                <span className="font-medium">Email: </span>
                <a
                    className="hover:underline text-blue-800"
                    href={`mailto:${user?.email}`}
                >
                    {user?.email || "N/A"}
                </a>
            </label>
            <label htmlFor="p" className="flex gap-2">
                <span className="font-medium">Type: </span>
                <p>{user?.role || "N/A"}</p>
            </label>
            <label htmlFor="p" className="flex gap-2">
                <span className="font-medium">Agreement Signed Date: </span>
                <p>
                    {(agreements &&
                        agreements?.result?.agreementSigningDate &&
                        format(
                            new Date(agreements?.result?.agreementSigningDate),
                            "dd MMM, yyyy"
                        )) ||
                        "N/A"}
                </p>
            </label>
            <label htmlFor="p" className="flex gap-2">
                <span className="font-medium">
                    Agreement Acceptation Date:{" "}
                </span>
                <p>
                    {(agreements &&
                        agreements?.result?.agreementCheckedDate &&
                        format(
                            new Date(agreements?.result?.agreementCheckedDate),
                            "dd MMM, yyyy"
                        )) ||
                        "N/A"}
                </p>
            </label>

            <label htmlFor="ul" className="flex gap-2">
                <span className="font-medium">Apartment Details:</span>
                <ul className="flex gap-1 flex-wrap flex-grow">
                    <li>
                        Floor:{" "}
                        {(agreements &&
                            agreements?.result?.apartmentDetails?.floorNo) ||
                            "N/A"}
                        ,
                    </li>
                    <li>
                        Block:{" "}
                        {(agreements &&
                            agreements?.result?.apartmentDetails?.blockName) ||
                            "N/A"}
                        ,
                    </li>
                    <li>
                        Room:{" "}
                        {(agreements &&
                            agreements?.result?.apartmentDetails
                                ?.apartmentNo) ||
                            "N/A"}
                    </li>
                </ul>
            </label>
            <label htmlFor="p" className="flex gap-2">
                <span className="font-medium">Rent/Month:</span>
                <p>
                    {(agreements &&
                        agreements?.result?.apartmentDetails?.rent + " BDT") ||
                        "N/A"}
                </p>
            </label>
        </div>
    );
};

export default MemberAndUserProfile;

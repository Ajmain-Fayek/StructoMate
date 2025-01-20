import { useEffect, useState } from "react";
import useAxios from "../../../../Hooks/useAxios";
import { format } from "date-fns";

const MemberAnnouncements = () => {
    const axiosFetch = useAxios();
    const [data, setData] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem("token");
            const { data } = await axiosFetch.post("/get/memberAnnouncement", {
                token,
            });
            setData(data);
        };
        fetchData();
    }, [axiosFetch]);
    return (
        <div className="space-y-2">
            {data && data.length > 0 ? (
                data.map((a) => (
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
    );
};

export default MemberAnnouncements;

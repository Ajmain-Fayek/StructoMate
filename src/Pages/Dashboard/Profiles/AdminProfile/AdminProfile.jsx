import { useEffect, useState } from "react";
import useAuthContext from "../../../../Hooks/useAuthContext";
import useAxios from "../../../../Hooks/useAxios";

const AdminProfile = () => {
    const { user } = useAuthContext();
    const axiosFetch = useAxios();
    const [data, setData] = useState();

    useEffect(() => {
        const data = async () => {
            const { data } = await axiosFetch.get("/admin");
            setData(data);
        };
        return data;
    }, []);
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
                <span className="font-medium">Total Rooms: </span>
                <p>{data?.totalRooms || "N/A"}</p>
            </label>

            <label htmlFor="p" className="flex gap-2">
                <span className="font-medium">Available Rooms:</span>
                <p>{data?.availableRooms + "%" || "N/A"}</p>
            </label>
            <label htmlFor="p" className="flex gap-2">
                <span className="font-medium">Occupied Rooms:</span>
                <p>{data?.occupiedRooms + "%" || "N/A"}</p>
            </label>
            <label htmlFor="p" className="flex gap-2">
                <span className="font-medium">Total Users: </span>
                <p>{data?.users || "N/A"}</p>
            </label>
            <label htmlFor="p" className="flex gap-2">
                <span className="font-medium">Total Members:</span>
                <p>{data?.members || "N/A"}</p>
            </label>
        </div>
    );
};

export default AdminProfile;

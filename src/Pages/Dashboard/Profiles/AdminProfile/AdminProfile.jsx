import useAuthContext from "../../../../Hooks/useAuthContext";

const AdminProfile = () => {
    const { user } = useAuthContext();
    // const user = {
    //     name: "Ajmain Fayek",
    //     image: "https://i.ibb.co.com/S6Py5nS/Logo.webp",
    //     email: "ajmainfayek733@gmail.com",
    //     role: "admin",
    //     totalRooms: 24,
    //     roomAvailablePercentage: "40%",
    //     roomOccupaidePercentage: "60%",
    //     totalUsers: 80,
    //     totalMembers: 14,
    // };

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
                <p>{user?.totalRooms || "N/A"}</p>
            </label>

            <label htmlFor="p" className="flex gap-2">
                <span className="font-medium">Available Rooms:</span>
                <p>{user?.roomAvailablePercentage || "N/A"}</p>
            </label>
            <label htmlFor="p" className="flex gap-2">
                <span className="font-medium">Occupied Rooms:</span>
                <p>{user?.roomOccupaidePercentage || "N/A"}</p>
            </label>
            <label htmlFor="p" className="flex gap-2">
                <span className="font-medium">Total Users: </span>
                <p>{user?.totalUsers || "N/A"}</p>
            </label>
            <label htmlFor="p" className="flex gap-2">
                <span className="font-medium">Total Members:</span>
                <p>{user?.totalMembers || "N/A"}</p>
            </label>
        </div>
    );
};

export default AdminProfile;

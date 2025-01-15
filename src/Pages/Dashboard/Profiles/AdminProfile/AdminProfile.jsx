const AdminProfile = () => {
    const user = {
        name: "Ajmain Fayek",
        image: "https://i.ibb.co.com/S6Py5nS/Logo.webp",
        email: "ajmainfayek733@gmail.com",
        role: "admin",
        totalRooms: 24,
        roomAvailablePercentage: "40%",
        roomOccupaidePercentage: "60%",
        totalUsers: 80,
        totalMembers: 14,
    };

    return (
        <div className="space-y-4">
            <img
                src={user?.image}
                className="h-40 max-w-64"
                title={"Photo of " + user?.name}
                alt={"Photo of " + user?.name}
            />
            <h3 className="text-2xl font-semibold">{user?.name}</h3>
            <label htmlFor="a" className="flex gap-2">
                <span className="font-medium">Email: </span>
                <a
                    className="hover:underline text-blue-800"
                    href={`mailto:${user?.email}`}
                >
                    {user?.email}
                </a>
            </label>
            <label htmlFor="p" className="flex gap-2">
                <span className="font-medium">Total Rooms: </span>
                <p>{user?.totalRooms}</p>
            </label>

            <label htmlFor="p" className="flex gap-2">
                <span className="font-medium">Available Rooms:</span>
                <p>{user?.roomAvailablePercentage}</p>
            </label>
            <label htmlFor="p" className="flex gap-2">
                <span className="font-medium">Occupied Rooms:</span>
                <p>{user?.roomOccupaidePercentage}</p>
            </label>
            <label htmlFor="p" className="flex gap-2">
                <span className="font-medium">Total Users: </span>
                <p>{user?.totalUsers}</p>
            </label>
            <label htmlFor="p" className="flex gap-2">
                <span className="font-medium">Total Members:</span>
                <p>{user?.totalMembers}</p>
            </label>
        </div>
    );
};

export default AdminProfile;

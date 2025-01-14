import { NavLink } from "react-router";

const UserAside = () => {
    return (
        <div className="flex flex-col user-aside border-gray-400 shadow-md space-y-4 border p-4">
            <NavLink className="border-b border-gray-400 p-2" to={"myProfile"}>
                My Profile
            </NavLink>
            <NavLink
                className="border-b border-gray-400 p-2"
                to={"user-announcements"}
            >
                Announcements
            </NavLink>
        </div>
    );
};

export default UserAside;

import { NavLink } from "react-router";

const UserAside = () => {
    return (
        <div className="flex flex-col space-y-4 border w-fit p-4">
            <NavLink
                className="border-b border-gray-400 p-2"
                to={"dashboard/myProfile"}
            >
                My Profile
            </NavLink>
            <NavLink className="p-2" to={"dashboard/announcements"}>
                Announcements
            </NavLink>
        </div>
    );
};

export default UserAside;

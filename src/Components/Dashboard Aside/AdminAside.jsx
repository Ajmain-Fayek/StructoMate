import { NavLink } from "react-router";

const AdminAside = () => {
    return (
        <div className="flex flex-col space-y-4 border w-fit p-4">
            <NavLink
                className="border-b border-gray-400 p-2"
                to={"adminProfile"}
            >
                Profile(Admin)
            </NavLink>
            <NavLink
                className="border-b border-gray-400 p-2"
                to={"adminProfile"}
            >
                Manage Members
            </NavLink>
            <NavLink
                className="border-b border-gray-400 p-2"
                to={"adminProfile"}
            >
                Make Announcements
            </NavLink>
            <NavLink
                className="border-b border-gray-400 p-2"
                to={"adminProfile"}
            >
                Agreement requests
            </NavLink>
            <NavLink className="p-2" to={"adminProfile"}>
                Manage Coupons
            </NavLink>
        </div>
    );
};

export default AdminAside;

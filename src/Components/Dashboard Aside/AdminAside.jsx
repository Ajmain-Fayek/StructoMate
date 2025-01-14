import { NavLink } from "react-router";

const AdminAside = () => {
    return (
        <div className="grid admin-aside space-y-4 border border-gray-400 shadow-md p-4">
            <NavLink
                className="border-b border-gray-400 p-2"
                to={"adminProfile"}
            >
                Profile(Admin)
            </NavLink>
            <NavLink
                className="border-b border-gray-400 p-2"
                to={"manage-members"}
            >
                Manage Members
            </NavLink>
            <NavLink
                className="border-b border-gray-400 p-2"
                to={"makeAnnouncements"}
            >
                Make Announcements
            </NavLink>
            <NavLink
                className="border-b border-gray-400 p-2"
                to={"agreement-requests"}
            >
                Agreement requests
            </NavLink>
            <NavLink
                className="border-b border-gray-400 p-2"
                to={"manage-coupons"}
            >
                Manage Coupons
            </NavLink>
        </div>
    );
};

export default AdminAside;

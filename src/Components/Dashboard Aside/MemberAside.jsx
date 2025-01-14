import { NavLink } from "react-router";

const MemberAside = () => {
    return (
        <div className="flex flex-col member-aside border-gray-400 shadow-md space-y-4 border p-4">
            <NavLink className="border-b border-gray-400 p-2" to={"myProfile"}>
                My Profile
            </NavLink>
            <NavLink className="border-b border-gray-400 p-2" to={"payments"}>
                Make Payment
            </NavLink>
            <NavLink
                className="border-b border-gray-400 p-2"
                to={"paymentHistory"}
            >
                Payment History
            </NavLink>
            <NavLink
                className="border-b border-gray-400 p-2"
                to={"member-announcements"}
            >
                Announcements
            </NavLink>
        </div>
    );
};

export default MemberAside;

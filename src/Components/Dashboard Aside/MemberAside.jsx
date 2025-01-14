import { NavLink } from "react-router";

const MemberAside = () => {
    return (
        <div className="flex flex-col space-y-4 border w-fit p-4">
            <NavLink
                className="border-b border-gray-400 p-2"
                to={"myProfile"}
            >
                My Profile
            </NavLink>
            <NavLink
                className="border-b border-gray-400 p-2"
                to={"adminProfile"}
            >
                Make Payment
            </NavLink>
            <NavLink
                className="border-b border-gray-400 p-2"
                to={"adminProfile"}
            >
                Payment History
            </NavLink>
            <NavLink className="p-2" to={"adminProfile"}>
                Announcements
            </NavLink>
        </div>
    );
};

export default MemberAside;

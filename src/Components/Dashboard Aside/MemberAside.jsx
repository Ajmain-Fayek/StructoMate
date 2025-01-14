import { NavLink } from "react-router";

const MemberAside = () => {
    return (
        <div className="flex flex-col space-y-4 border w-fit p-4">
            <NavLink className='border-b border-gray-400 p-2' to={"dashboard/myProfile"}>My Profile</NavLink>
            <NavLink className='border-b border-gray-400 p-2' to={"dashboard/adminProfile"}>Make Payment</NavLink>
            <NavLink className='border-b border-gray-400 p-2' to={"dashboard/adminProfile"}>Payment History</NavLink>
            <NavLink className='p-2' to={"dashboard/adminProfile"}>Announcements</NavLink>
        </div>
    );
};

export default MemberAside;

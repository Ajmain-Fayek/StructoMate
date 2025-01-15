import { Outlet } from "react-router";
import UserAside from "../../../Components/Dashboard Aside/UserAside";
import MemberAside from "../../../Components/Dashboard Aside/MemberAside";
import AdminAside from "../../../Components/Dashboard Aside/AdminAside";

const Dashboard = () => {
    const user = {
        role: "admin",
    };

    return (
        <>
            <div className="grid grid-cols-12 max-w-screen-2xl p-2 sm:p-4 mx-auto gap-8">
                <div className="md:col-span-4 sm:col-span-5 col-span-12">
                    {user?.role === "user" && <UserAside />}
                    {user?.role === "member" && <MemberAside />}
                    {user?.role === "admin" && <AdminAside />}
                </div>
                <div className="border border-gray-400 shadow-md min-h-20 md:col-span-8 sm:col-span-7 col-span-12 p-2 sm:p-4">
                    <Outlet />
                </div>
            </div>
        </>
    ); 
};

export default Dashboard;

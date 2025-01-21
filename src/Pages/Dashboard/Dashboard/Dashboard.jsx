import { Outlet } from "react-router";
import UserAside from "../../../Components/Dashboard Aside/UserAside";
import MemberAside from "../../../Components/Dashboard Aside/MemberAside";
import AdminAside from "../../../Components/Dashboard Aside/AdminAside";
import useAuthContext from "../../../Hooks/useAuthContext";

const Dashboard = () => {
    const { user } = useAuthContext();

    return (
        <>
            <div className="grid bg-base-200 grid-cols-12 max-w-screen-2xl p-2 sm:p-4 mx-auto gap-8">
                <div className="md:col-span-4  sm:col-span-5 col-span-12">
                    {user?.role === "user" && <UserAside />}
                    {user?.role === "member" && <MemberAside />}
                    {user?.role === "admin" && <AdminAside />}
                </div>
                <div className="border bg-white border-gray-400 shadow-md md:col-span-8 sm:col-span-7 col-span-12 p-2 sm:p-4">
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default Dashboard;

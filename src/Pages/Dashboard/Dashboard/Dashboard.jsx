import { Outlet } from "react-router";
import Footer from "../../Shared/Footer/Footer";
import NavBar from "../../Shared/NavBar/Navbar";
import UserAside from "../../../Components/Dashboard Aside/UserAside";
import MemberAside from "../../../Components/Dashboard Aside/MemberAside";
import AdminAside from "../../../Components/Dashboard Aside/AdminAside";

const Dashboard = () => {
    const user = {
        role: "admin",
    };

    return (
        <>
            <NavBar />
            <div className="flex flex-col sm:flex-row max-w-screen-2xl p-2 mx-auto gap-8">
                <div className="flex justify-end">
                    {user?.role === "user" && <UserAside />}
                    {user?.role === "member" && <MemberAside />}
                    {user?.role === "admin" && <AdminAside />}
                </div>
                <div className="border">
                    <Outlet />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Dashboard;

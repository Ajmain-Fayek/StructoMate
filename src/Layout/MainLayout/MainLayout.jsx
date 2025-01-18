import { Outlet } from "react-router";
import NavBar from "../../Pages/Shared/NavBar/Navbar";
import Footer from "../../Pages/Shared/Footer/Footer";

const MainLayout = () => {
    return (
        <>
            <NavBar />
            <div className="mainlayout bg-base-200">
                <Outlet />
            </div>
            <Footer />
        </>
    );
};

export default MainLayout;

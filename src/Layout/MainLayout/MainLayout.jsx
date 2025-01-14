import { Outlet } from "react-router";
import NavBar from "../../Pages/Shared/NavBar/Navbar";
import Footer from "../../Pages/Shared/Footer/Footer";

const MainLayout = () => {
    return (
        <>
            <NavBar />
            <Outlet />
            <Footer />
        </>
    );
};

export default MainLayout;

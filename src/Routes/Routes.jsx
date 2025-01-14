import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home/Home";
import Appartment from "../Pages/Appartment/Appartment/Appartment";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import MemberAndUserProfile from "../Pages/Dashboard/Profiles/UserAndMemberProfile/MemberAndUserProfile";
import AdminProfile from "../Pages/Dashboard/Profiles/AdminProfile/AdminProfile";
import MainLayout from "../Layout/MainLayout/MainLayout";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "dashboard",
                element: <Dashboard />,
                children: [
                    {
                        path: "myProfile",
                        element: <MemberAndUserProfile />,
                    },
                    {
                        path: "adminProfile",
                        element: <AdminProfile />,
                    },
                ],
            },
            {
                path: "apartment",
                element: <Appartment />,
            },
        ],
    },
]);

export default routes;

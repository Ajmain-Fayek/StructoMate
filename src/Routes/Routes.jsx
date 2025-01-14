import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home/Home";
import Appartment from "../Pages/Appartment/Appartment/Appartment";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import MemberAndUserProfile from "../Pages/Dashboard/Profiles/UserAndMemberProfile/MemberAndUserProfile";
import AdminProfile from "../Pages/Dashboard/Profiles/AdminProfile/AdminProfile";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "apartment",
        element: <Appartment />,
    },
    {
        path: "dashboard",
        element: <Dashboard />,
        children: [
            {
                path: "dashboard/myProfile",
                element: <MemberAndUserProfile />,
            },
            {
                path: "dashboard/adminProfile",
                element: <AdminProfile />,
            },
        ],
    },
]);

export default routes;

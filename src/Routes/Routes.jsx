import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home/Home";
import Appartment from "../Pages/Appartment/Appartment/Appartment";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import MemberAndUserProfile from "../Pages/Dashboard/Profiles/UserAndMemberProfile/MemberAndUserProfile";
import AdminProfile from "../Pages/Dashboard/Profiles/AdminProfile/AdminProfile";
import MainLayout from "../Layout/MainLayout/MainLayout";
import MakePayment from "../Pages/Dashboard/MakePayments/MakePayment";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import UserAnnouncements from "../Pages/Dashboard/Announcements/UserAnnoucements/UserAnnouncements";
import AdminAnnouncements from "../Pages/Dashboard/Announcements/AdminAnnouncements/AdminAnnouncements";
import MemberAnnouncements from "../Pages/Dashboard/Announcements/MemberAnnouncements/MemberAnnouncements";
import ManageMembers from "../Pages/Dashboard/ManageMembers/ManageMembers";
import AgreementRequests from "../Pages/Dashboard/AgreementRequests/AgreementRequests";
import ManageCoupons from "../Pages/Dashboard/ManageCoupons/ManageCoupons";
import Authentication from "../Pages/Authentication/Authentication/Authentication";
import Login from "../Pages/Authentication/Login/Login";
import Register from "../Pages/Authentication/Register/Register";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            // Home layout
            {
                path: "/",
                element: <Home />,
            },
            // Dashboard layout
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
                    {
                        path: "payments",
                        element: <MakePayment />,
                    },
                    {
                        path: "paymentHistory",
                        element: <PaymentHistory />,
                    },
                    {
                        path: "user-announcements",
                        element: <UserAnnouncements />,
                    },
                    {
                        path: "Member-announcements",
                        element: <MemberAnnouncements />,
                    },
                    {
                        path: "makeAnnouncements",
                        element: <AdminAnnouncements />,
                    },
                    {
                        path: "manage-members",
                        element: <ManageMembers />,
                    },
                    {
                        path: "agreement-requests",
                        element: <AgreementRequests />,
                    },
                    {
                        path: "manage-coupons",
                        element: <ManageCoupons />,
                    },
                ],
            },
            // Apartment Layout
            {
                path: "apartment",
                element: <Appartment />,
            },
            // Login and Registration
            {
                path: "authentiction",
                element: <Authentication />,
                children: [
                    {
                        path: "",
                        element: <Login />,
                    },
                    {
                        path: "registration",
                        element: <Register />,
                    },
                ],
            },
        ],
    },
]);

export default routes;

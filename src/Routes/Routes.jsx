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
import PrivateRoute from "./PrivateRoutes";
import AdminRoutes from "./AdminRoutes";
import MemberRoutes from "./MemberRoutes";

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
                element: (
                    <PrivateRoute>
                        <Dashboard />
                    </PrivateRoute>
                ),
                children: [
                    {
                        path: "myProfile",
                        element: <MemberAndUserProfile />,
                    },
                    {
                        path: "adminProfile",
                        element: (
                            <AdminRoutes>
                                <AdminProfile />
                            </AdminRoutes>
                        ),
                    },
                    {
                        path: "payments",
                        element: (
                            <MemberRoutes>
                                <MakePayment />
                            </MemberRoutes>
                        ),
                    },
                    {
                        path: "paymentHistory",
                        element: (
                            <MemberRoutes>
                                <PaymentHistory />
                            </MemberRoutes>
                        ),
                    },
                    {
                        path: "user-announcements",
                        element: <UserAnnouncements />,
                    },
                    {
                        path: "member-announcements",
                        element: (
                            <MemberRoutes>
                                <MemberAnnouncements />
                            </MemberRoutes>
                        ),
                    },
                    {
                        path: "makeAnnouncements",
                        element: (
                            <AdminRoutes>
                                <AdminAnnouncements />
                            </AdminRoutes>
                        ),
                    },
                    {
                        path: "manage-members",
                        element: (
                            <AdminRoutes>
                                <ManageMembers />
                            </AdminRoutes>
                        ),
                    },
                    {
                        path: "agreement-requests",
                        element: (
                            <AdminRoutes>
                                <AgreementRequests />
                            </AdminRoutes>
                        ),
                    },
                    {
                        path: "manage-coupons",
                        element: (
                            <AdminRoutes>
                                <ManageCoupons />
                            </AdminRoutes>
                        ),
                    },
                ],
            },
            // Apartment Layout
            {
                path: "apartment",
                loader: async () => {
                    const respose = await fetch(
                        `${import.meta.env.VITE_baseAPI}/apartments`
                    );
                    const data = await respose.json();

                    if (data?.status === 200) {
                        return data.result;
                    } else {
                        data["result"] = "Not Found";
                        return data;
                    }
                },
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

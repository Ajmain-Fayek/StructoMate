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
import useAxios from "../Hooks/useAxios";
import AgreementSigning from "../Pages/AgreementSigning/AgreementSigning";

const axiosFetch = useAxios();

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
                    // const axiosFetch = useAxios();
                    const response = await axiosFetch.get("/apartments");

                    return response?.data?.result;
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
            {
                path: "apartment/:apartment_id",
                loader: async ({ params }) => {
                    // const axiosFetch = useAxios();
                    const response = await axiosFetch.get(
                        `/apartments/${params?.apartment_id}`
                    );
                    return response?.data?.result;
                },
                element: <AgreementSigning />,
            },
        ],
    },
]);

export default routes;

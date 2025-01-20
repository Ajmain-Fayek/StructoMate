import useAuthContext from "../Hooks/useAuthContext";

const UserRoutes = ({ children }) => {
    const { user } = useAuthContext();

    if (user?.role === "user") {
        return children;
    }

    return (
        <div className="p-1 border border-red-700 text-center bg-red-50 text-red-700">
            Access Denied!
        </div>
    );
};

export default UserRoutes;

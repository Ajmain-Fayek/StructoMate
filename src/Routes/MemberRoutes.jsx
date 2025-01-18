import useAuthContext from "../Hooks/useAuthContext";

const MemberRoutes = ({ children }) => {
    const { user } = useAuthContext();
    

    if (user?.role === "member") {
        return children;
    }

    return (
        <div className="p-1 border border-red-700 text-center bg-red-50 text-red-700">
            Access Denied!
        </div>
    );
};

export default MemberRoutes;

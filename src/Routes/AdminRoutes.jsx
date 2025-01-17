const AdminRoutes = ({ children }) => {
    const user = { role: "dmin" };

    if (user.role !== "admin") {
        return (
            <div className="p-1 border border-red-700 text-center bg-red-50 text-red-700">
                Access Denied!
            </div>
        );
    }

    return children;
};

export default AdminRoutes;

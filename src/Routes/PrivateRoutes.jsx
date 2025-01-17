import { useEffect } from "react";
import { useNavigate } from "react-router";

const PrivateRoute = ({ children }) => {
    const navigate = useNavigate();

    const user = true;

    useEffect(() => {
        if (!user) {
            navigate("authentiction");
        }
    }, [user, navigate]);

    if (!user) {
        return null;
    }

    return children;
};

export default PrivateRoute;

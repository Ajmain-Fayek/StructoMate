import { useNavigate } from "react-router";
import useAuthContext from "../Hooks/useAuthContext";

const PrivateRoute = ({ children }) => {
    const navigate = useNavigate();
    const { user, loading } = useAuthContext();

    if (loading) {
        return (
            <div className="text-center flex items-center loading_screen">
                <span className="loading mx-auto text-center loading-ring loading-lg"></span>
            </div>
        );
    }

    if (!user) {
        return navigate("/authentiction");
    }

    return children;
};

export default PrivateRoute;

import { Link } from "react-router";

const Error404 = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-9xl font-bold text-gray-800">404</h1>
                <p className="text-2xl font-semibold text-gray-600 mt-4">
                    Page Not Found
                </p>
                <p className="text-gray-500 mt-2">
                    Sorry, the page you are looking for does not exist.
                </p>
                <Link
                    to={"/"}
                    className="btn mt-4 rounded-none bg-[#002] hover:bg-[#004] text-white"
                >
                    Go to Homepage
                </Link>
            </div>
        </div>
    );
};

export default Error404;

import { useState } from "react";
import buiding1 from "../../../assets/Building/Building (1).webp";
import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import useAuthContext from "../../../Hooks/useAuthContext";
import { Slide, toast } from "react-toastify";
import useAxios from "../../../Hooks/useAxios";
const Login = () => {
    const { signInUser, signInWithGoogle, logOutUser } = useAuthContext();
    const [toggle, setToggle] = useState(true);
    const handleToggle = () => {
        setToggle(!toggle);
    };
    const navigate = useNavigate();
    const axiosFetch = useAxios();

    // Handle Email & Pass login
    const handleLogin = async (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const password = form.get("password");
        const email = form.get("email");
        try {
            const signIn = await signInUser(email, password);
            if (signIn?.user) {
                toast.success(`Welcome Back ${signIn?.user?.displayName}`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Slide,
                });
                return navigate("/");
            }
        } catch (err) {
            toast.error("Invalid email/password", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Slide,
            });
            console.log(err);
        }
    };

    // Handle Goodle login
    const handleGoogleSignup = async () => {
        const data = {};
        try {
            const { user } = await signInWithGoogle();
            data["email"] = user?.email;
            data["displayName"] = user?.displayName;
            data["photoURL"] = user?.photoURL;

            const checkUser = await axiosFetch.get(
                `/users/exists/${user?.email}`
            );

            if (checkUser?.status === 200) {
                toast.success(`Welcome Back ${user?.displayName}`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Slide,
                });
                navigate("/");
            }

            console.log(user, checkUser);
        } catch (err) {
            if (err?.status === 400) {
                try {
                    const addUser = await axiosFetch.post("/users", data);
                    if (addUser?.data?.insertedId) {
                        toast.success(`Welcome ${data?.displayName}`, {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                            transition: Slide,
                        });
                        navigate("/");
                    }
                } catch (err) {
                    toast.error("Can't login usign Google", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        transition: Slide,
                    });
                    console.log(err);
                }
            }
        }
    };
    return (
        <div>
            <div className="hero login bg-base-200 py-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-screen-md px-1">
                    <div className="text-center place-content-center lg:text-left">
                        <h1 className="text-2xl mb-4 font-bold font-Source-Code-Pro">
                            Log in to Home
                        </h1>
                        <img className="max-w-92 shadow-2xl" src={buiding1} />
                    </div>
                    <div className="card rounded-none bg-base-100 w-full shrink-0 shadow-2xl">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="email"
                                    autoComplete="email"
                                    className="input input-bordered rounded-none"
                                    required
                                />
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type={toggle ? "password" : "text"}
                                    name="password"
                                    placeholder="password"
                                    autoComplete="password"
                                    className="input input-bordered rounded-none"
                                    required
                                />
                                {toggle ? (
                                    <span
                                        onClick={handleToggle}
                                        className="absolute right-1 cursor-pointer p-1 top-12"
                                    >
                                        <FaRegEyeSlash />
                                    </span>
                                ) : (
                                    <span
                                        onClick={handleToggle}
                                        className="absolute right-1 cursor-pointer p-1 top-12"
                                    >
                                        <IoEyeOutline />
                                    </span>
                                )}
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn rounded-none bg-[#001] text-white hover:bg-[#003]">
                                    Login
                                </button>
                            </div>
                        </form>
                        <div className="divider -mt-2">OR</div>
                        <div className="form-control px-8">
                            <button
                                onClick={handleGoogleSignup}
                                className="btn rounded-none bg-[#001] text-white hover:bg-[#003]"
                            >
                                <FcGoogle size={"1.5rem"} />
                            </button>
                        </div>
                        <div className="text-center p-4">
                            New to{" "}
                            <span className="font-Source-Code-Pro font-medium">
                                StructoMate,{" "}
                            </span>
                            <Link
                                to={"registration"}
                                className="text-blue-800 hover:underline font-semibold"
                            >
                                Register
                            </Link>{" "}
                            now.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

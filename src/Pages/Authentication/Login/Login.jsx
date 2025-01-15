import { useState } from "react";
import buiding1 from "../../../assets/Building/Building (1).webp";
import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { Link } from "react-router";
import { FcGoogle } from "react-icons/fc";
const Login = () => {
    const [toggle, setToggle] = useState(true);
    const handleToggle = () => {
        setToggle(!toggle);
    };
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen py-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-screen-md px-1">
                    <div className="text-center place-content-center lg:text-left">
                        <h1 className="text-2xl mb-4 font-bold font-Source-Code-Pro">
                            Log in to Home
                        </h1>
                        <img className="max-w-92 shadow-2xl" src={buiding1} />
                    </div>
                    <div className="card rounded-none bg-base-100 w-full shrink-0 shadow-2xl">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="email"
                                    className="input input-bordered"
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
                                    className="input input-bordered"
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
                                <button className="btn bg-[#001] text-white hover:bg-[#003]">
                                    Login
                                </button>
                            </div>
                        </form>
                        <div className="divider -mt-2">OR</div>
                        <div className="form-control px-8">
                            <button className="btn bg-[#001] text-white hover:bg-[#003]">
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

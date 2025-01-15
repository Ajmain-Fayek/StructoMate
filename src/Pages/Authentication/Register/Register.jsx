import { useState } from "react";
import buiding1 from "../../../assets/Building/Building (1).webp";
import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { Link } from "react-router";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
    const [toggle, setToggle] = useState(true);

    const handleToggle = () => {
        setToggle(!toggle);
    };

    const handleRegister = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        console.log(form.get("image"));
    };
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen py-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-screen-md px-1">
                    <div className="place-content-center text-center sm:order-2 lg:text-left">
                        <h1 className="text-2xl mb-4 font-bold font-Source-Code-Pro">
                            Make yourself way to Home
                        </h1>
                        <img className="max-w-92 shadow-2xl" src={buiding1} />
                    </div>
                    <div className="card rounded-none sm:order-1 bg-base-100 w-full shrink-0 shadow-2xl">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    autoComplete="name"
                                    name="name"
                                    placeholder="Full Name"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    autoComplete="email"
                                    name="email"
                                    placeholder="Email"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image</span>
                                </label>
                                <input
                                    type="file"
                                    autoComplete="iamge"
                                    name="image"
                                    placeholder="image"
                                    className="file-input file-input-bordered"
                                    required
                                />
                                <span className="text-red-700 text-xs mt-2 font-medium">
                                    File types: .jpg .jpeg .png .webp
                                </span>
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type={toggle ? "password" : "text"}
                                    name="password"
                                    autoComplete="new-password"
                                    placeholder="New password"
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
                                    Register
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
                            A member of{" "}
                            <span className="font-Source-Code-Pro font-medium">
                                StructoMate,{" "}
                            </span>
                            <Link
                                to={"/authentiction"}
                                className="text-blue-800 hover:underline font-semibold"
                            >
                                Login
                            </Link>{" "}
                            now.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;

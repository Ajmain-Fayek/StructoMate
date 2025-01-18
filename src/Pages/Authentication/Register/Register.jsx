import { useState } from "react";
import buiding1 from "../../../assets/Building/Building (1).webp";
import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { Slide, toast } from "react-toastify";
import useAxios from "../../../Hooks/useAxios";
import useAuthContext from "../../../Hooks/useAuthContext";

const Register = () => {
    const { signUpWithEmailAndPassword, updateUserInfo, logOutUser, setUser } =
        useAuthContext();
    const [toggle, setToggle] = useState(true);
    const axiosFetch = useAxios();
    const navigate = useNavigate();

    const handleToggle = () => {
        setToggle(!toggle);
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get("name");
        const email = form.get("email");
        const image = form.get("image");
        const password = form.get("password");

        // Image file type validation
        const validImageTypes = [
            "image/jpeg",
            "image/png",
            "image/jpg",
            "image/webp",
        ];
        if (!validImageTypes.includes(image.type)) {
            toast.error("Invalid image type!", {
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
            return;
        }

        // Password Validation
        if (!/[a-z]/.test(password)) {
            toast.error("Password: at least 1 lowercase letter.", {
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

            return;
        }
        if (!/[A-Z]/.test(password)) {
            toast.error("Password: at least 1 uppercase letter.", {
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
            return;
        }
        if (password.length < 6) {
            toast.error("Password: at least 6 characters long.", {
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
            return;
        }

        // Image Upload to imageBB
        try {
            const formData = new FormData();
            formData.append("image", image);
            const newImage = { image: "" };

            const response = await fetch(
                `https://api.imgbb.com/1/upload?key=${
                    import.meta.env.VITE_imagebbKey
                }`,
                {
                    method: "POST",
                    body: formData,
                }
            );

            const result = await response.json();
            if (result.success) {
                newImage["image"] = result.data.url;
                try {
                    const register = await signUpWithEmailAndPassword(
                        email,
                        password
                    );
                    if (register?.user) {
                        const obj = {
                            displayName: name,
                            photoURL: newImage?.image,
                        };
                        try {
                            await updateUserInfo(obj);
                            const addUser = await axiosFetch.post("/users", {
                                ...obj,
                                email: email,
                                password: password,
                            });
                            if (addUser?.data?.insertedId) {
                                await logOutUser();
                                toast.success("Register Success", {
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
                                navigate("/authentiction");
                                await new Promise((resolve) =>
                                    setTimeout(resolve, 2500)
                                );
                                location.reload();
                            }
                        } catch (err) {
                            toast.error("Error Can't Register", {
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
                } catch (err) {
                    toast.error("Error Can't Register", {
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
                    return;
                }
            } else {
                toast.error("Error uploading image", {
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
                return;
            }
        } catch (error) {
            toast.error("Error uploading image", {
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
            console.error("Error:", error);
            return;
        }
    };
    return (
        <div>
            <div className="hero bg-base-200 register py-5">
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
                                    className="input input-bordered rounded-none"
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
                                    className="input input-bordered rounded-none"
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
                                    className="file-input file-input-bordered rounded-none"
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
                                    Register
                                </button>
                            </div>
                        </form>
                        <div className="divider -mt-2">OR</div>
                        <div className="form-control px-8">
                            <button className="btn rounded-none bg-[#001] text-white hover:bg-[#003]">
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

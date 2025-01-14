import { Link, NavLink } from "react-router";

const NavBar = () => {
    return (
        <div className=" bg-overlay text-white sticky top-0 z-[999999]">
            <div className="navbar max-w-screen-2xl mx-auto">
                <div className="navbar-start">
                    <Link
                        to={"/"}
                        className="btn btn-ghost text-xl font-Cinzel"
                    >
                        StructoMate
                    </Link>
                </div>
                <div className="navbar-center hidden sm:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <NavLink to={"/"}>Home</NavLink>
                        </li>

                        <li>
                            <NavLink to={"/apartment"}>Apartment</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="flex items-center">
                        <div className="dropdown text-black dropdown-end">
                            <div
                                tabIndex={0}
                                role="button"
                                className="btn btn-ghost btn-circle avatar"
                            >
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="Tailwind CSS Navbar component"
                                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                    />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu space-y-4 menu-sm border dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                            >
                                <li className="text-center">User Name</li>
                                <li>
                                    <NavLink to={"/dashboard"}>
                                        Dashboard
                                    </NavLink>
                                </li>
                                <li>
                                    <a>Logout</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;

import useAuthContext from "../../../../Hooks/useAuthContext";

const MemberAndUserProfile = () => {
    const { user } = useAuthContext();
    // {
    //     name: "Ajmain Fayek",
    //     image: "https://i.ibb.co.com/S6Py5nS/Logo.webp",
    //     email: "ajmainfayek733@gmail.com",
    //     role: "member",
    //     agreementAcceptanceDate: "15/01/2025",
    //     rentedApartment: {
    //         floore: "3rd",
    //         block: "3f",
    //         roomNo: 305,
    //     },
    //     rent: 3500,
    // };
    return (
        <div className="space-y-4">
            <img
                src={user?.photoURL}
                className="h-40 max-w-64"
                title={"Photo of " + user?.displayName}
                alt={"Photo of " + user?.displayName}
            />
            <h3 className="text-2xl font-semibold">
                {user?.displayName || "Name: N/A"}
            </h3>
            <label htmlFor="a" className="flex gap-2">
                <span className="font-medium">Email: </span>
                <a
                    className="hover:underline text-blue-800"
                    href={`mailto:${user?.email}`}
                >
                    {user?.email || "N/A"}
                </a>
            </label>
            <label htmlFor="p" className="flex gap-2">
                <span className="font-medium">Type: </span>
                <p>{user?.role || "N/A"}</p>
            </label>
            <label htmlFor="p" className="flex gap-2">
                <span className="font-medium">Agreement Date: </span>
                <p>
                    {(user?.role === "member" &&
                        user?.agreementAcceptanceDate) ||
                        "N/A"}
                </p>
            </label>

            <label htmlFor="ul" className="flex gap-2">
                <span className="font-medium">Apartment Details:</span>
                <ul className="flex gap-1 flex-wrap">
                    <li>
                        Floor:{" "}
                        {(user?.role === "member" &&
                            user?.rentedApartment?.floore) ||
                            "N/A"}
                        ,
                    </li>
                    <li>
                        Block:{" "}
                        {(user?.role === "member" &&
                            user?.rentedApartment?.block) ||
                            "N/A"}
                        ,
                    </li>
                    <li>
                        Room:{" "}
                        {(user?.role === "member" &&
                            user?.rentedApartment?.roomNo) ||
                            "N/A"}
                    </li>
                </ul>
            </label>
            <label htmlFor="p" className="flex gap-2">
                <span className="font-medium">Rent/Month:</span>
                <p>
                    {(user?.role === "member" &&
                        user?.rent &&
                        user?.rent + " BDT") ||
                        "N/A"}
                </p>
            </label>
        </div>
    );
};

export default MemberAndUserProfile;

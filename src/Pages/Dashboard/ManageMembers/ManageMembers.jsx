import { useEffect, useState } from "react";
import useAxios from "../../../Hooks/useAxios";
import { Slide, toast } from "react-toastify";

const ManageMembers = () => {
    const [data, setData] = useState();
    const axiosFetch = useAxios();

    useEffect(() => {
        const a = async () => {
            const token = localStorage.getItem("token");
            const { data } = await axiosFetch.post("/manageMembers", { token });
            setData(data);
        };

        a();
    }, [axiosFetch]);

    const handleRemove = async (member) => {
        const { _id, displayName } = member;
        const token = localStorage.getItem("token");
        const res = await axiosFetch.post("/change/role", {
            token: token,
            id: _id,
        });
        if (res.status === 200) {
            setData(data.filter((member) => member._id !== _id));
            toast.success(`${displayName} removed`, {
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
        }
        return res;
    };
    return (
        <div className="overflow-auto">
            <table className="w-full bg-white">
                <thead>
                    <tr className="bg-base-200 shadow-md">
                        <th className="py-2 px-4 w-2/5">Name</th>
                        <th className="py-2 px-4 w-2/5">Email</th>
                        <th className="py-2 px-4 w-1/5">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data &&
                        data.map((member, index) => (
                            <tr
                                key={index}
                                className={`hover:bg-gray-300 ${
                                    index % 2 === 1 ? "bg-base-200" : ""
                                }`}
                            >
                                <td className="py-2 border-r border-gray-300 px-4">
                                    {member.displayName}
                                </td>
                                <td className="py-2 border-r border-gray-300 px-4">
                                    {member.email}
                                </td>
                                <td className="py-2 px-4 flex items-center justify-center">
                                    <button
                                        onClick={() => handleRemove(member)}
                                        className="bg-red-500 btn-sm text-white rounded-none hover:bg-red-700"
                                    >
                                        Remove
                                    </button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
};

export default ManageMembers;

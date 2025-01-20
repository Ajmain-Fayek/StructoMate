import { format, formatISO } from "date-fns";
import useAxios from "../../../../Hooks/useAxios";
import { Slide, toast } from "react-toastify";

const AdminAnnouncements = () => {
    const axiosFetch = useAxios();
    const handleAnnouncements = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const newAnnouncement = {
            title: formData.get("title"),
            details: formData.get("details"),
            date: formatISO(new Date()),
            type: formData.get("type"),
        };
        const token = localStorage.getItem("token");
        const result = await axiosFetch.post("/makeAnnouncement", {
            newAnnouncement,
            token,
        });

        if (result?.data?.insertedId) {
            toast.success(`Announcement Posted to ${newAnnouncement?.type}`, {
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
            e.target.reset();
        } else {
            toast.error("Couldn't post announcemnet.", {
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
    };
    return (
        <div>
            <div className="bg-base-200 p-2 space-y-2">
                <form onSubmit={handleAnnouncements}>
                    <div className="relative shadow-md gap-2 bg-base-200">
                        <input
                            placeholder="Announcement Title"
                            name="title"
                            required
                            className="font-medium p-2 pr-24 w-full focus:border-none focus:ring-0 focus:outline-none"
                        />
                        <span className="text-xs absolute w-30 bg-white p-2 top-1 right-0">
                            {format(new Date(), "dd MMM, yyyy")}
                        </span>
                    </div>
                    <div className="">
                        <select
                            name="type"
                            defaultValue={""}
                            required
                            className="w-full p-2 shadow-md rounded-none focus:outline-none border-b border-gray-300"
                        >
                            <option value="" disabled>
                                Select User Type
                            </option>
                            <option value={"user"}>User</option>
                            <option value={"member"}>Member</option>
                            <option value={"all"}>All</option>
                        </select>
                    </div>
                    <textarea
                        name="details"
                        required
                        placeholder="Announcement details..."
                        className="p-2 min-h-40 w-full focus:border-none focus:ring-0 focus:outline-none"
                    />
                    <button
                        type="submit"
                        className="btn mt-3 bg-[#002] rounded-none btn-sm text-white font-normal hover:bg-[#003]"
                    >
                        Make Announcement
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminAnnouncements;

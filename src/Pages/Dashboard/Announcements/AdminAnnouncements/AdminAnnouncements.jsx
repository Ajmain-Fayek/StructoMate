import { format, formatISO } from "date-fns";

const AdminAnnouncements = () => {
    const handleAnnouncements = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = {
            title: formData.get("title"),
            details: formData.get("details"),
            date: formatISO(new Date()),
        };
        console.log(data);
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

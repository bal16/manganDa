import moment from "moment";
import { memo, useState } from "react";
import { Icon } from "@iconify/react";
import axios from "axios";
import { Link } from "@inertiajs/react";
import { Head, useForm } from "@inertiajs/react";


function Post({ auth, content }) {
    // console.log(content)

    const [bookmarked, setBookmarked] = useState(content.isBookmark);

    // console.log(content)

    const isOwner = false
    if(auth.user){
        const isOwner = auth.user.id  === content.user_id;
    }

    const handleBookmark = async () => {
        if (!auth || !auth.user) {
            window.location = "/login";
            return;
        }

        try {
            if (bookmarked) {
                await axios.delete(`/bookmark/${content.id}`);
            } else {
                await axios.post(`/bookmarks/${content.id}`);
            }
            setBookmarked(!bookmarked);
        } catch (error) {
            console.error("Error:", error);
            alert("Terjadi kesalahan saat mengubah status bookmark");
        }
    };

    const { data, setData, post, processing, errors, reset } = useForm({
        body: "",
        post: content.id
    });

    const handleReportSubmit = async (e) => {
        e.preventDefault();
        post(route('report.store'));
        reset('body','post');
        document.getElementById('my_modal_3').close(); // Close the modal
    };

    return (
        <div className="block border-b-[0.1px] px-4 md:px-10 py-3 border-marshland-950 min-h-full">
            <div className="flex">
                <div className="w-12 h-12 overflow-hidden rounded-full bg-dark me-2">
                    <img
                        src="https://source.unsplash.com/50x50?photo-profile"
                        alt="Profile"
                    />
                </div>
                <div className="flex w-2/3 ps-1">
                    <p className="text-sm font-light">
                        <a href={`/profile/${content.user.id}`} className="font-semibold"> 
                            {content.user.name}
                        </a >{" "}
                        @{content.user.username} -{" "}
                        {moment(content.updated_at).fromNow()}
                    </p>
                    {content.user.is_store ? (
                        <div className="px-4 py-1 mb-6 -mt-1 text-sm rounded-full ms-2 bg-green-yellow-500">
                            Toko
                        </div>
                    ):null}
                </div>
            </div>

            <a href="#" className="-mt-5 font-light ms-[3.75rem] text-start">
                <p>{content.body}</p>
                {content.image && (
                    <div className="overflow-hidden bg-slate-700 rounded-xl">
                        <img
                            className="w-full"
                            src={`/storage/${content.image}`}
                            alt={`postimage-${content.id}`}
                        />
                    </div>
                )}
            </a>

            <div className="flex justify-end mt-2 space-x-4">
                <button
                    className="text-gray-600 hover:text-gray-800"
                    onClick={()=>document.getElementById('my_modal_3').showModal()}
                >
                    <Icon
                        icon="ic:round-report-problem"
                        style={{color: '#4B5563', display: isOwner? 'none' : 'block'}}
                        width="2rem"
                        height="2rem"
                    />
                </button>
                <button
                    className="text-gray-600 hover:text-gray-800"
                    onClick={handleBookmark}
                >
                    <Icon
                        icon="material-symbols:bookmark"
                        style={{ color: bookmarked ? "#ff0000" : "" }}
                        width="2rem"
                        height="2rem"
                    />
                </button>
                <Link className="text-gray-600 hover:text-gray-800" href={"/post/"+content.id}>
                    <Icon
                        icon="material-symbols:comment"
                        width="2rem"
                        height="2rem"
                    />
                </Link>
            </div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box max-w-64">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <form onSubmit={handleReportSubmit}>
                        <h3 className="font-bold text-lg">Report Post</h3>
                        <textarea 
                            name="body"
                            className="textarea textarea-bordered" 
                            placeholder="Detail your report here"
                            value={data.body}
                            onChange={(e) => 
                                setData("body", e.target.value)
                            }
                            required
                            >
                        </textarea><br />
                        {/* <input type="hidden" value={setData("post_id", content.id)} /> */}
                        <button type="submit" className="btn btn-error">Send</button>
                    </form>
                </div>
            </dialog>
        </div>
    );
}

export default memo(Post);

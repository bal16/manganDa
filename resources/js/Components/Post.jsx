import moment from "moment";
import { memo, useState } from "react";
import { Icon } from "@iconify/react";
import axios from "axios";
import { Link } from "@inertiajs/react";
import { Head, useForm } from "@inertiajs/react";

function Post({ auth, content }) {
    const [bookmarked, setBookmarked] = useState(content.isBookmark);

    const isOwner = auth.user && auth.user.id === content.user_id;
    // console.log(isOwner)

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
        post: content.id,
    });

    const handleReportSubmit = async (e) => {
        e.preventDefault();
        post(route("report.store"));
        reset("body", "post");
        document.getElementById("my_modal_3").close(); // Close the modal
    };

    const handleDelete = async () =>{
        if(isOwner){
            const confirmDelete = window.confirm("apakah anda yakin menghapus postingan ini?")
            if(confirmDelete){
                try {
                    await axios.delete(`/post/${content.id}`);
                    alert('post berhasil dihapus')
                    window.location.reload()
                } catch (error) {
                    console.error(error)
                    alert('gagal menghapus post!')
                }
            }       
        }else{
            alert("anda tidak diperkenankan menghapus postingan ini!");
        }
    }

    return (
        <div className="block border-b-[0.1px] px-4 md:px-10 py-3 border-marshland-950 min-h-full">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <div className="w-12 h-12 overflow-hidden rounded-full bg-dark me-2">
                        <img src="https://source.unsplash.com/50x50?photo-profile" alt="Profile" />
                    </div>
                    <div className="ps-1">
                        <p className="text-sm font-light">
                            <a href={`/profile/${content.user.id}`} className="font-semibold">
                                {content.user.name}
                            </a>{" "}
                            @{content.user.username} -{" "}
                            {moment(content.updated_at).fromNow()}
                        </p>
                        <div style={{ display: content.user.is_store? "block":  "none" }} className="px-4 py-1 mb-6 -mt-1 text-sm rounded-full ms-2 bg-green-yellow-500">
                            Toko
                        </div>
                    </div>
                </div>
                <div id="more" className="mb-5 dropdown ">
                    <button tabIndex={0} className="m-1 bg-transparent">
                        <Icon 
                            icon="ep:more-filled" 
                            style={{ color: "#4B5563" }}
                            width="2rem" height="2rem" 
                        />
                    </button>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li style={{ display: isOwner ?  "block" : "none" }}>
                            <button onClick={handleDelete}>
                                <Icon icon="material-symbols:delete" style={{ color: "#ff0000" }} width="2rem" height="2rem"/>
                                <p className="text-xl">delete</p> 
                            </button>
                        </li>
                        <li style={{ display: isOwner ? "none" : "block" }}>
                            <button onClick={() => document.getElementById("my_modal_3").showModal()}>
                                <Icon icon="ic:round-report-problem" style={{ color: "#4B5563" }} width="2rem" height="2rem" />
                                <p className="text-xl">report</p> 
                            </button>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="-mt-5 font-light ms-[3.75rem] text-start">
                <p>{content.body}</p>
                {content.image && (
                    <div className="overflow-hidden bg-slate-700 rounded-xl">
                        <img className="w-full" src={`/storage/${content.image}`} alt={`postimage-${content.id}`} />
                    </div>
                )}
            </div>

            <div className="flex justify-end mt-2 space-x-4">
                <button className="text-gray-600 hover:text-gray-800" onClick={handleBookmark}>
                    <Icon icon="material-symbols:bookmark" style={{ color: bookmarked ? "#ff0000" : "" }} width="2rem" height="2rem" />
                </button>
                <Link className="text-gray-600 hover:text-gray-800" href={"/post/" + content.id}>
                    <Icon icon="material-symbols:comment" width="2rem" height="2rem" />
                </Link>
            </div>

            <dialog id="my_modal_3" className="modal">
                <div className="modal-box max-w-64">
                    <form method="dialog">
                        <button className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2">✕</button>
                    </form>
                    <form onSubmit={handleReportSubmit}>
                        <h3 className="text-lg font-bold">Report Post</h3>
                        <textarea
                            name="body"
                            className="textarea textarea-bordered"
                            placeholder="Detail your report here"
                            value={data.body}
                            onChange={(e) => setData("body", e.target.value)}
                            required
                        ></textarea>
                        <br />
                        <button type="submit" className="btn btn-error">Send</button>
                    </form>
                </div>
            </dialog>
        </div>
    );
}

export default memo(Post);

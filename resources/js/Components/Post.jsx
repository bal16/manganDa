import moment from "moment";
import { memo, useState } from "react";
import { Icon } from "@iconify/react";
import axios from "axios";
import { Link } from "@inertiajs/react";
import { Head, useForm } from "@inertiajs/react";

function Post({ auth, content }) {
    const [bookmarked, setBookmarked] = useState(content.isBookmark);
    // console.log(content)
    const isOwner = auth.user && auth.user.id === content.user_id;
    // console.log(content.id)

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

    // const { data, setData, post, processing, errors, reset } = useForm({
    //     body: "",
    //     postss: null,
    // });

    // console.log(content)

    const [body, setBody] = useState()
    const [post_id, setPost_id] = useState()

    const handleReportSubmit = async (id, body, e) => {
        try {
            e.preventDefault();
            // console.log(post_id)
            await axios.post(`/report/${id}`, {body})
            alert('laporan berhasil dikirim');
        } catch (error) {
            console.error(error)
        }

        document.getElementById("modal_"+content.id).close(); // Close the modal
    };

    const handleDelete = async () => {
        if (isOwner) {
            const confirmDelete = window.confirm("apakah anda yakin menghapus postingan ini?");
            if (confirmDelete) {
                try {
                    await axios.delete(`/post/${content.id}`);
                    alert('post berhasil dihapus');
                    window.location.reload();
                } catch (error) {
                    console.error(error);
                    alert('gagal menghapus post!');
                }
            }
        } else {
            alert("anda tidak diperkenankan menghapus postingan ini!");
        }
    }

    return (
        <div className="block border-b-[0.1px] px-4 md:px-10 py-3 border-marshland-950 min-h-full max-w-screen flex-wrap overflow-x-hidden">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    {/* <div className="w-12 h-12 overflow-hidden rounded-full bg-dark me-2">
                        <img src="https://source.unsplash.com/50x50?photo-profile" alt="Profile" />
                    </div> */}
                    <div className="avatar placeholder">
                        <div className="w-12 rounded-full bg-neutral text-neutral-content">
                            <span className="text-3xl">{Array.from(content.user.username)[0].toUpperCase()}</span>
                        </div>
                    </div>
                    <div className="-mt-4 ps-2">
                        <p className="text-sm font-light text-start">
                            <a href={`/profile/${content.user.id}`} className={content.user.role_id == 3 ?
                                "px-4 py-1 text-sm rounded-full bg-green-yellow-500 w-16"
                                :
                                ""
                            }>
                                {content.user.name}
                            </a>{" "}
                            @{content.user.username} -{" "}
                            {moment(content.updated_at).fromNow()}
                        </p>
                        {/* <div style={{ display: content.user.is_store ? "block" : "none" }} className="w-16 px-4 py-1 mb-6 -mt-1 text-sm rounded-full ms-2 bg-green-yellow-500">
                            Toko
                        </div> */}
                    </div>
                </div>
                <div id="more" className="mb-5 dropdown dropdown-bottom dropdown-end">
                    <button disabled={auth.user.role_id == 2} tabIndex={0} className="m-1 bg-transparent">
                        <Icon
                            icon="ep:more-filled"
                            style={{ color: "#4B5563" }}
                            width="2rem" height="2rem"
                        />
                    </button>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-30">
                        <li style={{ display: isOwner ? "block" : "none" }}>
                            <button disabled={auth.user.role_id == 2} onClick={handleDelete}>
                                <Icon icon="material-symbols:delete" style={{ color: "#ff0000" }} width="2rem" height="2rem" />
                                <p className="text-m">delete</p>
                            </button>
                        </li>
                        <li style={{ display: isOwner ? "none" : "block" }}>
                            <button disabled={auth.user.role_id == 2} onClick={() => document.getElementById("modal_"+content.id).showModal()}>
                                <Icon icon="ic:round-report-problem" style={{ color: "#4B5563" }} width="2rem" height="2rem" />
                                <p className="text-m">report</p>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="-mt-1 font-normal ms-[3.75rem] text-start" style={{ wordBreak: "break-word", whiteSpace: "pre-wrap" }}>
                <p>{content.body}</p>
                {content.store_id != null ?(
                    <Link href={`/profile/${content.store.user_id}`} className="px-1 bg-green-yellow-500 w-max">
                        <Icon icon="material-symbols-light:store" className="inline-flex" /> {content.store?.name}
                    </Link>
                    ):''}
                {content.image && (
                    <div className="overflow-hidden bg-slate-700 rounded-xl">
                        <img className="w-full" src={`/storage/${content.image}`} alt={`postimage-${content.id}`} />
                    </div>
                )}
            </div>

            <div className="flex justify-end mt-2 space-x-4">
                <button className="text-gray-600 hover:text-gray-800" disabled={auth.user.role_id == 2} onClick={handleBookmark}>
                    <Icon icon="material-symbols:bookmark" style={{ color: bookmarked ? "#ff0000" : "" }} width="2rem" height="2rem" />
                </button>
                <Link className="text-gray-600 hover:text-gray-800" href={"/post/" + content.id}>
                    <Icon icon="material-symbols:comment" width="2rem" height="2rem" />
                </Link>
            </div>

            <dialog id={"modal_"+content.id} className="modal">
                <div className="modal-box max-w-64">
                    <form method="dialog">
                        <button className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2">✕</button>
                    </form>
                    <form onSubmit={(e)=>handleReportSubmit(content.id, body, e)} id={content.id}>
                        <h3 className="text-lg font-bold">Report Post</h3>
                        <textarea
                            name="body"
                            className="textarea textarea-bordered"
                            placeholder="Detail your report here"
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                            required
                        ></textarea>
                        <br />
                        <button type="submit" className="btn btn-error">Send</button>
                    </form>
                </div>
            </dialog>
            {/* nambah */}
        </div>
    );
}

export default memo(Post);

import moment from "moment";
import { memo } from "react";
import { Icon } from "@iconify/react";
import { useState } from "react";
import axios from "axios";

export default memo(function Post({auth, content }) {

    console.log(content)


    const handleBookmark = async () => {
        try {
            if(!auth || !auth.user){
                window.location = '/login';
                return;
            }
            if (content.isBookmark) {
                await axios.delete(`/bookmark/${content.bookmark_id}`);
            } else {
                const response = await axios.post(`/bookmarks/${content.id}`);
                console.log("Bookmark berhasil ditambahkan:", response.data);
            }
            window.location.reload();
        } catch (error) {
            console.error("Error:", error);
            alert("Terjadi kesalahan saat menambahkan bookmark");
        }
    };
    return (
        <div
            className="block border-b-[0.1px] px-4 md:px-10 py-3 border-marshland-950 min-h-full "
            // key={index}
        >
            {/* ? Ini header post*/}
            <div className="flex">
                <div className="w-12 h-12 overflow-hidden rounded-full bg-dark me-2">
                    <img
                        src="https://source.unsplash.com/50x50?photo-profile"
                        alt=""
                    />
                </div>
                <div className="flex w-2/3 ps-1">
                    <p className="text-sm font-light">
                        <span className="font-semibold">
                            {content.user.name}
                        </span>{" "}
                        @{content.user.username} - {}
                        {moment(content.updated_at).fromNow()}
                    </p>
                    {content.is_store ? (
                        <div className="px-4 py-1 mb-6 -mt-1 text-sm rounded-full ms-2 bg-green-yellow-500">
                            Toko
                        </div>
                    ) : (
                        ""
                    )}
                </div>

                {/* </input> */}
            </div>
            {/* ? Ini body post*/}
            <a href="#" className="-mt-5 font-light ms-[3.75rem] text-start">
                <p>{content.body}</p>
                <div className="overflow-hidden bg-slate-700 rounded-xl">
                    {/* ? Ini image post*/}

                    {/* row-span-full + h-full */}
                    {(content.image)?
                        (<img
                            className="w-full"
                            src={"/storage/" + content.image}
                            alt={"postimage-"+content.id}
                        />):""
                    }
                </div>
            </a>
            <div className="flex justify-end mt-2 space-x-4">
                <button
                    className="text-gray-600 hover:text-gray-800"
                    onClick={handleBookmark}
                >
                    {/* <i className="fas fa-bookmark">bookmark</i> */}
                    <Icon
                        icon="material-symbols:bookmark"
                        style={{ color: content.isBookmark ? "#ff0000" : "#fffff" }}
                        width="2rem"
                        height="2rem"
                    />
                </button>
                <button className="text-gray-600 hover:text-gray-800">
                    {/* <i className="fas fa-comment">comment</i> */}
                    <Icon
                        icon="material-symbols:comment"
                        width="2rem"
                        height="2rem"
                    />
                </button>
            </div>
        </div>
    );
});

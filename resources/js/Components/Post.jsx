import moment from "moment";
import { memo } from "react";
import { Icon } from "@iconify/react";
import { useState } from "react";
import axios from "axios";

export default memo(function Post({auth, content, bookmark}) {


    console.log(bookmark)
    // console.log(content)

    const cek_user = auth
    console.log(cek_user)

    const handleBookmark = async () => {
        try {
            if (!auth || !auth.user) {
                window.location.href = '/login';
                return;
            }

            if (bookmark.bookmarked) {
                await axios.delete(`/bookmark/${bookmark.bookmark_id}`);
            } else {
                const response = await axios.post(`/bookmarks/${content.id}`);
                console.log('Bookmark berhasil ditambahkan:', response.data);
            }
            window.location.reload();
        } catch (error) {
            console.error('Error:', error);
            alert('Terjadi kesalahan saat menambahkan bookmark');
        }
    };

    return (
        <div
            className="block border-b-[0.1px] px-4 md:px-10 py-3 border-marshland-950 min-h-[15rem] "
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
            <a 
            href="#"
            className="-mt-5 font-light ms-[3.75rem] text-start">
                <p>{content.body}</p>
                <div className="overflow-hidden bg-slate-700 rounded-xl">
                    {/* ? Ini image post*/}

                    {/* row-span-full + h-full */}
                    <img
                        className="w-full"
                        src="https://source.unsplash.com/400x300?post"
                        alt="post"
                    />
                </div>
            </a>
            <div className="flex justify-end mt-2 space-x-4">
                <button className="text-gray-600 hover:text-gray-800"
                    onClick={handleBookmark}
                >
                    {/* <i className="fas fa-bookmark">bookmark</i> */}
                    <Icon icon="material-symbols:bookmark" 
                        style={{ color: bookmark.bookmarked ? '#FF0000' : '#808080' }}
                        width="2rem" height="2rem" 
                    />
                </button>
                <button className="text-gray-600 hover:text-gray-800">
                    {/* <i className="fas fa-comment">comment</i> */}
                    <Icon icon="material-symbols:comment" width="2rem" height="2rem" />
                </button>
            </div>
        </div>
    );
});

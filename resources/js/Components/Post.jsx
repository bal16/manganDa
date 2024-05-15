import moment from "moment";
import { memo } from "react";
import { Icon } from "@iconify/react";
import { useState } from "react";

export default memo(function Post({ content }) {

    // console.log(content);
    const [isBookmarked, setIsBookmarked] = useState(false);

    const handleBookmark = async () => {
        try {
            const response = await axios.post(`/bookmark/${content.id}`, {
                // Jika Anda perlu mengirim data tambahan, Anda bisa tambahkan di sini
            });

            if (response.status === 200) {
                setIsBookmarked(true);
                // Tambahkan logika lain jika bookmark berhasil
            } else {
                // Tambahkan logika untuk menangani kasus ketika bookmark gagal
                console.error('Failed to bookmark post');
            }
        } catch (error) {
            console.error('Error bookmarking post:', error);
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
                    disabled={isBookmarked}
                >
                    {/* <i className="fas fa-bookmark">bookmark</i> */}
                    <Icon icon="material-symbols:bookmark" width="2rem" height="2rem" />
                </button>
                <button className="text-gray-600 hover:text-gray-800">
                    {/* <i className="fas fa-comment">comment</i> */}
                    <Icon icon="material-symbols:comment" width="2rem" height="2rem" />
                </button>
            </div>
        </div>
    );
});

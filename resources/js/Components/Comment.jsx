import moment from "moment";
import { memo, useState } from "react";
import { Icon } from "@iconify/react";
import axios from "axios";
import { Link } from "@inertiajs/react";

function Comment({ auth, content=''}) {

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
                        <span className="font-semibold">
                            {/* {content.user.name} */}Bal
                        </span>{" "}
                        {/* @{content.user.username} -{" "} */} - Kemarin
                        {/* {moment(content.updated_at).fromNow()} */}
                    </p>
                    {/* {content.is_store ? (
                        <div className="px-4 py-1 mb-6 -mt-1 text-sm rounded-full ms-2 bg-green-yellow-500">
                            Toko
                        </div>
                    ):null} */}
                </div>
            </div>

            <a href="#" className="-mt-5 font-light ms-[3.75rem] text-start">
                {/* <p>{content.body}</p> */}
                {/* {content.image && (
                    <div className="overflow-hidden bg-slate-700 rounded-xl">
                        <img
                            className="w-full"
                            src={`/storage/${content.image}`}
                            alt={`postimage-${content.id}`}
                        />
                    </div>
                )} */}
                akhvfjasn
            </a>

            {/* <div className="flex justify-end mt-2 space-x-4">
                <button
                    className="text-gray-600 hover:text-gray-800"
                    // onClick={'/'}
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
            </div> */}
        </div>
    );
}

export default memo(Comment);

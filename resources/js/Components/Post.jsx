import moment from "moment";
import { memo } from "react";

export default memo(function Post({ content }) {
    return (
        <a
            href="#"
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
                    {content.is_store &&
                    (<div className="px-4 py-1 mb-6 -mt-1 text-sm rounded-full ms-2 bg-green-yellow-500">
                        Toko
                    </div>)
}
                </div>

                {/* </input> */}
            </div>
            {/* ? Ini body post*/}
            <div className="-mt-5 font-light ms-[3.75rem] text-start">
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
            </div>
        </a>
    );
});

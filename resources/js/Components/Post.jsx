import { memo } from "react";

export default memo(function Post({}) {
    return (
        <a
            href="#"
            className="block border-b-[0.1px] px-4 md:px-10 py-3 border-marshland-950 min-h-[15rem] "
        >
            {/* ? Ini header post*/}
            <div className="flex">
                <div className="w-12 h-12 overflow-hidden rounded-full bg-dark me-2">
                    <img
                        src="https://source.unsplash.com/50x50?photo-profile"
                        alt=""
                    />
                </div>
                <div className="ps-1">
                    <p className="text-sm font-light">
                        <span className="font-semibold">Nazih</span> @nazihjkt24
                        - 2 Hours
                    </p>
                </div>

                {/* </input> */}
            </div>
            {/* ? Ini body post*/}
            <div className="-mt-5 font-light ms-[3.75rem] text-start">
                <p>INI ADALAH POSTINGAN</p>
                <div className="object-cover overflow-hidden bg-slate-700 rounded-xl">
                    {/* ? Ini image post*/}
                    <div className="grid grid-cols-2 grid-rows-2 grid-flow-dense">
                        {/* row-span-full + h-full */}
                        <img
                            className="h-full row-span-full"
                            src="https://source.unsplash.com/400x300?post"
                            alt="post"
                        />
                        <img
                            className="h-full"
                            src="https://source.unsplash.com/400x300?post"
                            alt="post"
                        />
                        <img
                            className="h-full"
                            src="https://source.unsplash.com/400x300?post"
                            alt="post"
                        />



                    </div>

                </div>
            </div>
        </a>
    );
});

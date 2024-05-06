import { memo } from "react";

export default memo(function Sidebar({ children }) {
    return (
        <aside className="hidden w-3/5 p-2 -mb-1 text-center border-l-[0.1px] border-marshland-950 md:flex text-marshland-950 bg-ecru-white-100 ">
            <div className=" h-full w-full px-3 text-start   py-4">
                <div className="">
                    <h2 className="text-marshland-950 font-bold text-2xl mb-5">
                        Sidebar
                    </h2>
                </div>
                <div className="border border-marshland-950 w-full rounded-md  text-start">
                    {children}
                </div>
            </div>
        </aside>
    );
});

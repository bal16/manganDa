import { memo } from "react";

export default memo(function Sidebar({children}) {
    return (
        <aside className="hidden w-3/5 p-2 -mb-1 text-center border-l-[0.1px] border-marshland-950 md:flex text-marshland-950 bg-ecru-white-100">
            {children}
        </aside>
    );
})

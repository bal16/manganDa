import { Link } from '@inertiajs/react';
import { memo } from "react";

export default memo(function NavbarLink({ href = "#", children, active = false, linkStyle="", ...props}) {
    const activeStyle = active ? "text-marshland-950 bg-ecru-white-300" : "text-marshland-600 ";
    return (
        <Link
            {...props}
            href={href}
            className={`flex items-center p-2  rounded-lg  hover:text-marshland-950   ${activeStyle} hover:bg-ecru-white-300 w-full ${linkStyle}`}
        >
            {children}
        </Link>
    );
})

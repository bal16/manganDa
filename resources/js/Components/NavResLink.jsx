import { Link } from '@inertiajs/react';
import { memo } from "react";

function NavResLink({ auth, children, active = false, href = "#" })  {
    const activeStyle = active
        ? "text-marshland-950 bg-ecru-white-300"
        : "text-marshland-600";

    return (
        <Link href={href} className={`block mx-auto  rounded-lg  group p-2 ${activeStyle}`}>
            {children}
        </Link>
    );
};
export default memo(NavResLink)

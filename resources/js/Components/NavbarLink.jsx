import { Link } from '@inertiajs/react';

export default function NavbarLink({ href = "#", children, active = false }) {
    const activeStyle = active ? "text-marshland-950 bg-ecru-white-300" : "text-marshland-600 ";
    return (
        <Link
            href={href}
            class={`flex items-center p-2  rounded-lg  hover:text-marshland-950  group ${activeStyle} hover:bg-ecru-white-300 w-full`}
        >
            {children}
        </Link>
    );
}

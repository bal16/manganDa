export default function NavbarLink({ href = "#", children, active = false }) {
    const activeStyle = active ? "text-marshland-950" : "text-marshland-600";
    return (
        <a
            href={href}
            class={`flex items-center p-2  rounded-lg  hover:text-marshland-950  group ${activeStyle} hover:bg-ecru-white-300 w-full`}
        >
            {children}
        </a>
    );
}

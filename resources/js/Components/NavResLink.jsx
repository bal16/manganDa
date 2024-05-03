export const NavResLink = ({ auth, children, active = false, href = "#" }) => {
    const activeStyle = active
        ? "text-marshland-950 bg-ecru-white-300"
        : "text-marshland-600";

    return (
        <a href={href} className={`block mx-auto  rounded-full  ${activeStyle}`}>
            {children}
        </a>
    );
};

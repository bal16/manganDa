import { Icon } from "@iconify/react";
import NavbarLink from "./NavbarLink";
import { memo, useState } from "react";
import { Link } from "@inertiajs/react";
import Logo from "../../images/logo.png";

export default memo(function Navbar({ auth }) {
    const [open, setOpen] = useState(false);
    return (
        <nav className="top-0 hidden w-2/5 h-screen  p-2 border-r-[0.4px] border-marshland-950 md:sticky sm:flex  text-marshland-950 bg-ecru-white-100">
            <div className="w-full h-full px-3 py-4 ">
                <div className="-mt-10">
                    <img className="w-25 border-1" src={Logo} />
                </div>
                <ul className="space-y-2 font-medium ">
                    <li>
                        <NavbarLink
                            active={route().current("home")}
                            href={route("home")}
                        >
                            <Icon icon="ion:home" width="2rem" height="2rem" />
                            <span className="flex-1 ms-3 whitespace-nowrap">
                                Home
                            </span>
                        </NavbarLink>
                    </li>
                    <li>
                        <NavbarLink
                            active={route().current("explore")}
                            href={route("explore")}
                        >
                            <Icon
                                icon="mdi:compass-outline"
                                width="2rem"
                                height="2rem"
                            />

                            <span className="flex-1 ms-3 whitespace-nowrap">
                                Explore
                            </span>
                        </NavbarLink>
                    </li>
                    <li>
                        <NavbarLink
                            active={route().current("stores")}
                            href={route("stores")}
                        >
                            <Icon
                                icon="material-symbols:store"
                                width="2rem"
                                height="2rem"
                            />
                            <span className="flex-1 ms-3 whitespace-nowrap">
                                Stores
                            </span>
                        </NavbarLink>
                    </li>
                    <li>
                        <NavbarLink
                            active={route().current("bookmark")}
                            href={route("bookmark")}
                        >
                            <Icon
                                icon="majesticons:bookmark-line"
                                width="2rem"
                                height="2rem"
                            />
                            <span className="flex-1 ms-3 whitespace-nowrap">
                                Bookmark
                            </span>
                        </NavbarLink>
                    </li>
                    <li>
                        <NavbarLink
                            active={route().current("profile")}
                            href={route("profile")}
                        >
                            <Icon
                                icon="healthicons:ui-user-profile"
                                width="2rem"
                                height="2rem"
                            />
                            <span className="flex-1 ms-3 whitespace-nowrap">
                                Profile
                            </span>
                        </NavbarLink>
                    </li>
                </ul>
                {/* <div className="fixed bottom-24">
                    <a
                        href=""
                        className={
                            " block w-full p-2 px-14 text-center rounded-full  bg-green-yellow-600 " +
                            (!open ? " top-[35rem]" : "top-[25.5rem]")
                        }
                    >
                        Posting
                    </a>
                </div> */}

                <div className="fixed bottom-10 ">
                    <NavbarLink
                        href={route("logout")}
                        method="post"
                        as="button"
                    >
                        <Icon
                            icon="material-symbols:logout"
                            // style={{ color: "#595952" }}
                            width="2rem"
                            height="2rem"
                        />
                        <span className="flex-1 me-24 text-start ms-3 whitespace-nowrap">
                            Log-out
                        </span>
                    </NavbarLink>
                </div>
            </div>
        </nav>
    );
});

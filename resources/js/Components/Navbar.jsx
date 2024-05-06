import { Icon } from "@iconify/react";
import NavbarLink from "./NavbarLink";
import { memo, useState } from "react";
import { Link } from "@inertiajs/react";

export default memo(function Navbar({ auth }) {
    const [open, setOpen] = useState(false);
    return (
        <nav className="top-0 hidden w-2/5 h-screen -mb-1  p-2 border-r-[0.4px] border-marshland-950 md:sticky sm:flex  text-marshland-950 bg-ecru-white-100">
            <div className="w-full h-full px-3 py-4">
                <div className="h-15">
                    <h1 className="text-marshland-950 font-bold text-2xl mb-5">Navbar</h1>
                </div>
                <ul className="space-y-2 font-medium ">
                    <li>
                        <NavbarLink
                            active={route().current("test")}
                            href={route("test")}
                        >
                            <Icon icon="ion:home" width="2rem" height="2rem" />
                            <span className="flex-1 ms-3 whitespace-nowrap">
                                Home
                            </span>
                        </NavbarLink>
                    </li>
                    <li>
                        <NavbarLink active={route().current("explore")}>
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
                        <NavbarLink active={route().current("stores")}>
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
                    <li className={open&&"bg-ecru-white-200 rounded-xl"}>
                        <button
                            className={"flex items-center w-full p-2 rounded-lg hover:text-marshland-950 hover:bg-ecru-white-300 text-marshland-600 "+ (open&&" text-marshland-950") }
                            onClick={() => setOpen(!open)}
                        >
                            <Icon
                                icon="ph:dots-three-circle-light"
                                width="2rem"
                                height="2rem"
                                rotate="90deg"
                            />
                            <span className="flex-1 w-full text-start ms-3 whitespace-nowrap ">
                                Others
                            </span>
                            <Icon icon="uit:direction" />
                        </button>
                        <ul
                            id="dropdown"
                            className={
                                "py-2 space-y-2 ps-7  " + (!open && " hidden ")
                            }
                        >
                            <li>
                                <NavbarLink
                                    href="#"
                                    linkStyle="  transition duration-150 "
                                >
                                    <span className="">Bookmark</span>
                                </NavbarLink>
                            </li>
                            <li>
                                <NavbarLink
                                    href="#"
                                    linkStyle="  transition duration-150 "
                                >
                                    <span className="">Mode</span>
                                </NavbarLink>
                            </li>
                            <li>
                                <NavbarLink
                                    href="#"
                                    linkStyle="  transition duration-150 "
                                >
                                    <span className="">Settings</span>
                                </NavbarLink>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    );
});

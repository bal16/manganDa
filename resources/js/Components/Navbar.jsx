// import { } from "@inertiajs/react";

import { Icon } from "@iconify/react";
import NavbarLink from "./NavbarLink";

export default function Navbar({ auth }) {
    return (
        <nav className="top-0 hidden w-2/5 h-screen -mb-1  p-2 border-r-[0.4px] border-marshland-950 md:sticky md:flex  text-marshland-950 bg-ecru-white-100">
            <div class="h-full px-3 py-4  w-full">
                <div className="h-10">
                    <h1 className="">Navbar</h1>
                </div>
                <ul class="space-y-2 font-medium ">
                    <li>
                        <NavbarLink active={route().current("home")}>
                            <Icon icon="ion:home" width="2rem" height="2rem" />
                            <span class="flex-1 ms-3 whitespace-nowrap">
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

                            <span class="flex-1 ms-3 whitespace-nowrap">
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
                            <span class="flex-1 ms-3 whitespace-nowrap">
                                Stores
                            </span>
                        </NavbarLink>
                    </li>
                    <li>
                        <NavbarLink active={route().current("myprofile")} href="/myprofile">
                            <Icon
                                icon="healthicons:ui-user-profile"
                                width="2rem"
                                height="2rem"
                            />
                            <span class="flex-1 ms-3 whitespace-nowrap">
                                Profile
                            </span>
                        </NavbarLink>
                    </li>
                    <li>
                        <NavbarLink active={route().current("test")} href="/test">
                            <Icon
                                icon="ph:dots-three-circle-light"
                                width="2rem"
                                height="2rem"
                                rotate="90deg"
                            />
                            <span class="flex-1 ms-3 whitespace-nowrap">
                                Others
                            </span>
                        </NavbarLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

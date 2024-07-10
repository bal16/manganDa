import { Icon } from "@iconify/react";
import  NavResLink from "./NavResLink";
import { memo } from "react";

export default memo(function NavbarResponsive({ auth }) {
    return (
        <nav className="sticky bottom-0 w-full h-16 p-1 pb-2 text-center border-t-[0.1px] sm:hidden border-marshland-950  bg-ecru-white-100 grid grid-cols-5 ">
            <NavResLink active={route().current("home")} href={route('home')}>
                <span className="items-center block w-8  align-middle ps-[0.1rem]">
                    <Icon icon="ion:home" width="1.7rem" height="2rem" />
                </span>
            </NavResLink>
            <NavResLink active={route().current("explore")} href="/explore">
                <Icon icon="mdi:compass-outline" width="2rem" height="2rem" />
            </NavResLink>

            <NavResLink active={route().current("stores")} href="/stores">
                <Icon
                    icon="material-symbols:store"
                    width="2rem"
                    height="2rem"
                />
            </NavResLink>
            <NavResLink active={route().current("bookmark")} href="/bookmark">
                {/*  href={`#${auth.user.id}`}> */}
                <Icon
                    icon="majesticons:bookmark-line"
                    width="2rem"
                    height="2rem"
                />
            </NavResLink>
            <NavResLink active={route().current("profile")} href="/profile">
                <Icon
                    icon="healthicons:ui-user-profile"
                    width="2rem"
                    height="2rem"
                />
            </NavResLink>
        </nav>
    );
})

// import { } from "@inertiajs/react";
import { Icon } from "@iconify/react";
import { NavResLink } from "./NavResLink";

export default function NavbarResponsive({ auth }) {
    return (
        <nav className="sticky bottom-0 w-full h-14 p-2 text-center border-t-[0.1px] md:hidden border-marshland-950  bg-ecru-white-100 grid grid-cols-5 items-center justify-center">
            <NavResLink active={route().current("home")}>
                <Icon icon="ion:home" width="1.7rem" height="1.7rem" />
            </NavResLink>
            <NavResLink active={route().current("explore")}>
                <Icon icon="mdi:compass-outline" width="2rem" height="2rem" />
            </NavResLink>

            <NavResLink active={route().current("stores")}>
                <Icon
                    icon="material-symbols:store"
                    width="2rem"
                    height="2rem"
                />
            </NavResLink>
            <NavResLink active={route().current("myprofile")}>
                {/*  href={`#${auth.user.id}`}> */}
                <Icon
                    icon="healthicons:ui-user-profile"
                    width="2rem"
                    height="2rem"
                />
            </NavResLink>
            <NavResLink>
                <Icon
                    icon="ph:dots-three-circle-light"
                    width="2rem"
                    height="2rem"
                    rotate="90deg"
                />
            </NavResLink>
        </nav>
    );
}

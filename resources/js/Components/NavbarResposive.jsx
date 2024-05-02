// import { } from "@inertiajs/react";
import { Icon } from "@iconify/react";

export default function NavbarResponsive(auth, title) {
    return (
        <nav className="sticky bottom-0 w-full h-14 p-2 text-center border-t-[0.1px] md:hidden border-marshland-950 text-marshland-950 bg-ecru-white-100 grid grid-cols-5 items-center justify-center">
            <a href="#" className="block mx-auto">
                <Icon icon="ion:home" width="1.7rem" height="1.7rem" />
            </a>
            <a href="#" className="block mx-auto">
                <Icon icon="mdi:compass-outline" width="2rem" height="2rem" />
            </a>
            <a href="#" className="block mx-auto">
                <Icon
                    icon="material-symbols:store"
                    width="2rem"
                    height="2rem"
                />
            </a>
            <a href="#" className="block mx-auto">
                <Icon
                    icon="healthicons:ui-user-profile"
                    width="2rem"
                    height="2rem"
                />
            </a>
            <a href="#" className="block mx-auto">
                <Icon
                    icon="ph:dots-three-circle-light"
                    width="2rem"
                    height="2rem"
                    rotate="90deg"
                />
            </a>
        </nav>
    );
}

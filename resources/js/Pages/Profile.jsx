import Header from "@/Components/Header";
import MainContent from "@/Components/MainContent";
import Navbar from "@/Components/Navbar";
import NavbarLink from "@/Components/NavbarLink";
import NavbarResponsive from "@/Components/NavbarResposive";
import Post from "@/Components/Post";
import RatingButton from "@/Components/RatingButton";
import Sidebar from "@/Components/Sidebar";
import DefaultLayout from "@/Layouts/DefaultLayout";
import { Head, Link } from "@inertiajs/react";
import { Icon } from "@iconify/react";
import { useState } from "react";

export default function Profile({
    auth,
    post,
    stores,
    user,
    rating,
    userRating,
}) {
    // console.log(stores);

    const [isOpen, setIsOpen] = useState(stores[0]?.is_open);

    const mobileButton = () => (
        <div className="dropdown dropdown-bottom dropdown-end sm:hidden">
            <div tabIndex={0} role="button" className="m-1">
                <Icon
                    icon="ep:more-filled"
                    style={{ color: "#4B5563" }}
                    width="2rem"
                    height="2rem"
                />
            </div>
            <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
                <li
                    className={
                        auth.user.is_store ? "hidden sm:hidden" : "sm:hidden"
                    }
                >
                    <NavbarLink href={route("store.create")}>
                        <div className="sm:hidden">daftar toko</div>
                    </NavbarLink>
                </li>
                <li className="sm:hidden">
                    <NavbarLink
                        href={route("logout")}
                        method="post"
                        as="button"
                    >
                        <div className="sm:hidden">logout</div>
                    </NavbarLink>
                </li>
            </ul>
        </div>
    );

    const handleToggle = async () => {
        try {
            const response = await axios.patch(
                route("store.updateStatus", stores[0].id),
                {
                    is_open: !isOpen,
                }
            );
            if (response.data.success) {
                setIsOpen(response.data.status);
            }
        } catch (error) {
            console.error("Failed to update store status:", error);
        }
    };

    return (
        <>
            <DefaultLayout>
                <Head title="Profile" />
                <Navbar auth={auth} />
                <MainContent>
                    <Header>
                        {/* <div className="sm:hidden">
                            <NavbarLink
                                href={route("logout")}
                                method="post"
                                as="button"
                                >
                                <div className="sm:hidden">
                                    <Icon
                                        icon="ep:more-filled"
                                        style={{ color: "#4B5563" }}
                                        width="2rem" height="2rem"
                                    />
                                </div>
                            </NavbarLink>
                        </div> */}
                        {auth.user.id != user.id ? "" : <>{mobileButton()}</>}
                    </Header>
                    <section className="p-2 min-h-36 border-b-[0.1px] border-marshland-950 bg-ecru-white-100 relative">
                        {/* <div className="w-20 h-20 overflow-hidden bg-black rounded-full me-2">
                                <img
                                    className="w-full"
                                    src="https://source.unsplash.com/50x50?photo-profile"
                                    alt=""
                                />
                        </div> */}
                        <div className="avatar placeholder">
                            <div className="w-20 rounded-full bg-neutral text-neutral-content">
                                <span className="text-3xl">
                                    {Array.from(user.username)[0].toUpperCase()}
                                </span>
                            </div>
                        </div>
                        <div className="">
                            <p>
                                {user.name}{" "}
                                <span className={user.is_store ? "" : "hidden"}>
                                    |{" "}
                                    <span
                                        className={
                                            isOpen
                                                ? "text-warning"
                                                : "text-error"
                                        }
                                    >
                                        {isOpen ? "OPEN" : "CLOSED"}
                                    </span>
                                </span>
                            </p>
                            {user.is_store ? (
                                <p className="font-light">
                                    {stores[0].description}
                                </p>
                            ) : (
                                ""
                            )}
                        </div>
                        <div className="">
                            {user.is_store ? (
                                <RatingButton
                                    storeRating={rating}
                                    userRating={userRating}
                                    auth={auth}
                                    store={stores[0]}
                                />
                            ) : (
                                ""
                            )}
                        </div>
                        <div
                            className={
                                auth.user.id == user.id && user.is_store
                                    ? "absolute right-5 bottom-5"
                                    : "hidden"
                            }
                        >
                            <input
                                type="checkbox"
                                className="toggle toggle-error"
                                checked={isOpen}
                                onChange={handleToggle}
                            />
                        </div>
                        <button
                            className={
                                auth.user.id != user.id && user.is_store
                                    ? "btn btn-success absolute right-5 bottom-5 h-5"
                                    : "hidden"
                            }
                        >
                            rate store
                        </button>
                    </section>
                    <section className="">
                        {post.map((a, index) => (
                            <Post key={index} content={a} auth={auth} />
                        ))}
                    </section>
                </MainContent>
                <Sidebar stores={stores} auth={auth}>
                    Sidebar
                </Sidebar>
            </DefaultLayout>
            <NavbarResponsive auth={auth} />
        </>
    );
}

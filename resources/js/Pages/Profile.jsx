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
import { useEffect, useState } from "react";

export default function Profile({
    auth,
    post,
    stores,
    user,
    rating,
    userRating,
    userStore
}) {
    console.log(userStore)
    const [isOpen, setIsOpen] = useState(stores[0]?.is_open);

    const [showModal, setShowModal] = useState(false);

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
                        {auth.user.id !== user.id ? "" : <>{mobileButton()}</>}
                    </Header>
                    <section className="p-2 min-h-36 border-b-[0.1px] border-marshland-950 bg-ecru-white-100 relative">
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
                                <span>
                                    <p className="font-bold text-sm">
                                        {userStore.address}
                                    </p>
                                    <p className="font-light">
                                        {userStore.description}
                                    </p>
                                </span>
                            ) : (
                                ""
                            )}
                        </div>
                        <div className="mt-5">
                            {user.is_store ? (
                                <button
                                    className="px-4 py-1 mb-6 -mt-1 text-sm text-white bg-red-500 rounded-full ms-2"
                                >
                                    {rating > 0 ? `${rating} / 5.0` : "belum ada rating"}
                                </button>
                            ) : (
                                ""
                            )}
                        </div>
                        <div
                            className={
                                auth.user.id === user.id && user.is_store
                                    ? "absolute right-5 bottom-5"
                                    : "hidden"
                            }
                        >
                            <input
                                type="checkbox"
                                className="toggle toggle-error "
                                checked={isOpen}
                                onChange={handleToggle}
                            />
                        </div>
                        <button
                            className={
                                    auth.user.id === user.id || auth.user.is_store || auth.user.is_admin
                                    ? "hidden"
                                    : "btn btn-success absolute right-5 bottom-5 px-4 py-1 mb-6 -mt-1 rounded-full ms-2"
                            }
                            onClick={()=>document.getElementById('my_modal_1').showModal()}
                        >
                            rate store
                        </button>
                        {/* <div className={
                                auth.user.id === user.id && user.is_store
                                    ? "absolute right-5 bottom-5"
                                    : "hidden"
                        }>
                        </div> */}
                            <RatingButton
                                auth={auth}
                                store={userStore}
                                storeRating={rating}
                                userRating={userRating}
                            />
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

            {/* {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="p-6 bg-white rounded-lg shadow-lg">
                        <RatingButton
                            auth={auth}
                            store={stores[0]}
                            storeRating={rating}
                            userRating={userRating}
                        />
                    </div>
                </div>
            )} */}
        </>
    );
}

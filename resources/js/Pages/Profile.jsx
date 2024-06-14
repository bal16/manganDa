import Header from "@/Components/Header";
import MainContent from "@/Components/MainContent";
import Navbar from "@/Components/Navbar";
import NavbarLink from "@/Components/NavbarLink";
import NavbarResponsive from "@/Components/NavbarResposive";
import Post from "@/Components/Post";
import RatingButton from "@/Components/RatingButton";
import Sidebar from "@/Components/Sidebar";
import DefaultLayout from "@/Layouts/DefaultLayout";
import { Head } from "@inertiajs/react";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { useForm } from "@inertiajs/react";
import axios from "axios";

export default function Profile({
    auth,
    post,
    stores,
    user,
    userRating,
    userStore,
}) {
    const [isOpen, setIsOpen] = useState(stores[0]?.is_open);
    const [tab, setTab] = useState(1)
    const {
        data,
        setData,
        post: submitPost,
        processing,
        errors,
        reset,
    } = useForm({
        name: "",
        price: 0,
        image: null,
        store_id: stores[0].id,
    });

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
                        auth.user.role_id === 3
                            ? "hidden sm:hidden"
                            : " sm:hidden"
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

    const handleChange = (e) => {
        const key = e.target.name;
        const value =
            e.target.type === "file" ? e.target.files[0] : e.target.value;
        setData(key, value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // submitPost(route("menu.store"), {
        //     onSuccess: () => reset(),
        // });
        console.log(data);
    };

    const postTab = () => (
        <section className="justify-center">
            {post.map((a, index) => (
                <Post key={index} content={a} auth={auth} />
            ))}
        </section>
    );

    const ulasanTab = () => {
        return (
            <section className="justify-center">
                {post.map((a, index) => (
                    <Post key={index} content={a} auth={auth} />
                ))}
            </section>
        );
    };

    const menuTab = () => (
        <section className="">
            <button
                onClick={() =>
                    document.getElementById(`modal+${user.id}`).showModal()
                }
                className="justify-end btn btn-success"
            >
                {" "}
                + menu
            </button>
            <div>
                <div className="w-56 shadow-xl card bg-base-100">
                    <figure className="px-10 pt-10">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                            alt="Shoes"
                            className="rounded-xl"
                        />
                    </figure>
                    <div className="items-center text-center card-body">
                        <h2 className="card-title">tempe orek</h2>
                        <p>Rp.5.000</p>
                    </div>
                </div>
            </div>
        </section>
    );

    const showTab = () => {
        if (user.role_id == 3) {
            return (
                <div>
                    <div role="tablist" className="tabs tabs-bordered">
                        <input
                            type="radio"
                            name="my_tabs_1"
                            className=" tab"
                            onChange={()=>setTab(1)}
                            aria-label="postingan"
                            checked
                        />

                        <input
                            type="radio"
                            name="my_tabs_1"
                            className=" tab"
                            onChange={()=>setTab(2)}
                            aria-label="menu"
                        />

                        <input
                            type="radio"
                            name="my_tabs_1"
                            className=" tab"
                            onChange={()=>setTab(3)}
                            aria-label="ulasan"
                        />
                    </div>
                    {(tab == 1)?(
                        <div className="p-0 ">{postTab()}</div>
                    ):(tab == 2)?(
                        <div className="p-0 ">{menuTab()}</div>
                    ):(tab == 3)?(
                        <div className="p-0 ">{ulasanTab()}</div>
                    ):""}

                </div>
            );
        } else {
            return (
                <section className="justify-center">
                    {post.map((a, index) => (
                        <Post key={index} content={a} auth={auth} />
                    ))}
                </section>
            );
        }
    };

    return (
        <>
            <DefaultLayout>
                <Head title="Profile" />
                <Navbar auth={auth} />
                <MainContent>
                    <Header>
                        {auth.user.id != user.id ? "" : <>{mobileButton()}</>}
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
                                <span
                                    className={
                                        user.role_id == 3 ? "" : "hidden"
                                    }
                                >
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
                            {user.role_id == 3 ? (
                                <span>
                                    <p className="text-sm font-bold">
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
                            {user.role_id == 3 ? (
                                <button className="px-4 py-1 mb-6 -mt-1 text-sm text-white bg-red-500 rounded-full ms-2">
                                    {userStore.ratings > 0
                                        ? `${userStore.ratings.toFixed(
                                              1
                                          )} / 5.0`
                                        : "belum ada rating"}
                                </button>
                            ) : (
                                ""
                            )}
                        </div>
                        <div
                            className={
                                auth.user.id === user.id && user.role_id == 3
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
                                auth.user.id == user.id ||
                                auth.user.role_id == 3 ||
                                auth.user.role_id == 2
                                    ? "hidden"
                                    : "btn btn-success absolute right-5 bottom-5 px-4 py-1 mb-6 -mt-1 rounded-full ms-2"
                            }
                            onClick={() =>
                                document
                                    .getElementById("my_modal_1")
                                    .showModal()
                            }
                        >
                            rate store
                        </button>
                        {auth.user.id == user.id ||
                        auth.user.role_id == 3 ||
                        auth.user.role_id == 2 ? null : (
                            <RatingButton
                                auth={auth}
                                store={userStore}
                                storeRating={userStore.rating}
                                userRating={userRating}
                            />
                        )}
                    </section>
                    <div className="">{showTab()}</div>
                </MainContent>
                <Sidebar stores={stores} auth={auth}>
                    Sidebar
                </Sidebar>
            </DefaultLayout>
            <NavbarResponsive auth={auth} />

            <dialog id={`modal+${user.id}`} className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2">
                            ✕
                        </button>
                    </form>
                    <form onSubmit={handleSubmit}>
                        <h3 className="text-lg font-bold">Tambah Menu</h3>
                        <div className="mt-4 form-control">
                            <label className="label" htmlFor="name">
                                Nama Menu:
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={data.name}
                                onChange={handleChange}
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="mt-4 form-control">
                            <label className="label" htmlFor="price">
                                Harga:
                            </label>
                            <input
                                type="number"
                                id="price"
                                name="price"
                                value={data.price}
                                onChange={handleChange}
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="mt-4 form-control">
                            <label className="label" htmlFor="image">
                                Gambar:
                            </label>
                            <input
                                type="file"
                                id="image"
                                name="image"
                                onChange={handleChange}
                                className="input input-bordered"
                                accept="image/*"
                                required
                            />
                        </div>
                        <div className="modal-action">
                            <button type="submit" className="btn btn-success">
                                Tambah
                            </button>
                        </div>
                    </form>
                </div>
            </dialog>
        </>
    );
}

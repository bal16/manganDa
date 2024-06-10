import Header from "@/Components/Header";
import MainContent from "@/Components/MainContent";
import Navbar from "@/Components/Navbar";
import NavbarResponsive from "@/Components/NavbarResposive";
import Post from "@/Components/Post";
import Sidebar from "@/Components/Sidebar";
import DefaultLayout from "@/Layouts/DefaultLayout";
import { Head } from "@inertiajs/react";
import { useState } from "react";

export default function Bookmark({ auth, posts, bookmark, stores }) {
    // console.log(posts);
    const [postModal, setPostModal] = useState(false);
    return (
        <>
            <div
                className={
                    "fixed w-full h-full z-[99] backdrop-blur-sm items-center " +
                    (!postModal ? " hidden" : " flex")
                }
            >
                <div className="mx-auto bg-slate-200 shadow-md w-[80%] sm:w-[70%] md:w-[50%] rounded-2xl min-h-[50%] text-end">
                    <button
                        className="text-8xl"
                        onClick={() => setPostModal(!postModal)}
                    >
                        X
                    </button>
                </div>
            </div>
            <DefaultLayout>
                <Head title="Bookmark" />
                <Navbar auth={auth} />
                <MainContent>
                    {!bookmark ? "" : <p className="place-content-center">Belum Ada Bookmark</p>}
                    <section className="">
                        {posts.map((a, index) => (
                            <Post
                                key={index}
                                content={a}
                                auth={auth}
                                Bookmark={bookmark}
                            />
                        ))}
                    </section>
                </MainContent>
                <Sidebar stores={stores} auth={auth} />
            </DefaultLayout>
            <NavbarResponsive auth={auth} />
        </>
    );
}

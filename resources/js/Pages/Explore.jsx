import Header from "@/Components/Header";
import MainContent from "@/Components/MainContent";
import Navbar from "@/Components/Navbar";
import NavbarResponsive from "@/Components/NavbarResposive";
import Post from "@/Components/Post";
import Sidebar from "@/Components/Sidebar";
import DefaultLayout from "@/Layouts/DefaultLayout";
import { Head } from "@inertiajs/react";
import { useState } from "react";

export default function Explore({ auth, posts, stores }) {
    console.log(posts);
    console.log(stores);
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
                <Head title="explore" />
                <Navbar auth={auth} />
                <MainContent>
                    <Header></Header>
                    <section className="pt-5 px-4 md:px-10 h-36 border-b-[0.1px]  border-marshland-950 bg-ecru-white-100  ">
                        {/* Made a Post{auth&&","} {auth?.user?.name}? */}
                        <div className="flex">
                            <div className="w-12 h-12 overflow-hidden bg-black rounded-full me-2">
                                <img
                                    className="object-cover"
                                    src="https://source.unsplash.com/50x50?photo-profile"
                                    alt=""
                                />
                            </div>

                            <textarea
                                className="w-4/5 h-12 px-5 py-3 font-light bg-transparent border-none resize-none overscroll-none focus:ring-0"
                                placeholder="Ada Rekomendasi Makanan?!"
                            />
                            {/* </input> */}
                        </div>
                        <div className="flex mt-3">
                            <div className="flex w-5/6 mt-3 ">
                                <span className="block w-5 h-5 bg-green-yellow-600 me-2"></span>
                                <span className="block w-5 h-5 bg-green-yellow-600 me-2"></span>
                                <span className="block w-5 h-5 bg-green-yellow-600 me-2"></span>
                                <span className="block w-5 h-5 bg-green-yellow-600 me-2"></span>
                                <span className="block w-5 h-5 bg-green-yellow-600 me-2"></span>
                                <span className="block w-5 h-5 bg-green-yellow-600 me-2"></span>
                            </div>
                            <button
                                onClick={() => setPostModal(!postModal)}
                                className="py-2 mt-1 rounded-full px-7 bg-green-yellow-600"
                            >
                                Post
                            </button>
                        </div>
                    </section>
                    <section className="">
                        {/* {post.map((post, index) => (
                            <Post />
                        ))} */}
                        INI HALAMAN EXPLORE
                    </section>
                </MainContent>
                <Sidebar auth={auth} stores={stores} />
            </DefaultLayout>
            <NavbarResponsive auth={auth} stores={stores} />
        </>
    );
}

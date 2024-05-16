import Header from "@/Components/Header";
import MainContent from "@/Components/MainContent";
import Navbar from "@/Components/Navbar";
import NavbarResponsive from "@/Components/NavbarResposive";
import Post from "@/Components/Post";
import Sidebar from "@/Components/Sidebar";
import DefaultLayout from "@/Layouts/DefaultLayout";
import { Icon } from "@iconify/react";
import { Head, useForm } from "@inertiajs/react";
import { useState } from "react";

export default function Home({ auth, posts, store, bookmark }) {

    const [postModal, setPostModal] = useState(false);
    const { data, setData, post, processing, errors, reset } = useForm({
        body: "",
    });

    // Check if bookmark data is available
    const bookmarkMap = bookmark ? {} : null;

    if (bookmark) {
        bookmark.forEach((b) => {
            bookmarkMap[b.post_id] = {
                bookmark_id: b.id,
                bookmarked: true
            };
        });
    }

    const getBookmarkStatus = (postId) => {
        if (bookmarkMap && bookmarkMap[postId]) {
            return {
                bookmark_id: bookmarkMap[postId].bookmark_id,
                bookmarked: true
            };
        } else {
            return {
                bookmark_id: null,
                bookmarked: false
            };
        }
    };

    const submit = (e) => {
        e.preventDefault();
        post(route("home"));
    };

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
                <Head title="Test" />
                <Navbar auth={auth} />
                <MainContent>
                    <Header />
                    <form
                        onSubmit={submit}
                        className="pt-5 px-4 md:px-10 h-36 border-b-[0.1px] border-marshland-950 bg-ecru-white-100"
                    >
                        <div className="flex">
                            <div className="w-12 h-12 overflow-hidden bg-black rounded-full me-2">
                                <img
                                    className="w-full"
                                    src="https://source.unsplash.com/50x50?photo-profile"
                                    alt=""
                                />
                            </div>
                            <textarea
                                className="w-4/5 h-12 px-5 py-3 font-light bg-transparent border-none resize-none overscroll-none focus:ring-0"
                                name="body"
                                value={data.body}
                                onChange={(e) =>
                                    setData("body", e.target.value)
                                }
                                placeholder="Ada Rekomendasi Makanan?!"
                            />
                        </div>
                        <div className="flex mt-3">
                            <div className="flex w-5/6 mt-3">
                                <input
                                    type="file"
                                    name="uploadFile"
                                    id="uploadFile"
                                    className="hidden"
                                />
                                <label
                                    htmlFor="uploadFile"
                                    className="w-6 h-6 me-2"
                                >
                                    <Icon
                                        icon="bxs:image-add"
                                        width="1.25em"
                                        height="1.25em"
                                    />
                                </label>
                                <span className="block w-6 h-6 bg-green-yellow-600 me-2"></span>
                                <span className="block w-6 h-6 bg-green-yellow-600 me-2"></span>
                                <span className="block w-6 h-6 bg-green-yellow-600 me-2"></span>
                                <span className="block w-6 h-6 bg-green-yellow-600 me-2"></span>
                                <span className="block w-6 h-6 bg-green-yellow-600 me-2"></span>
                            </div>
                            <button
                                disabled={processing}
                                className="py-2 mt-1 rounded-full px-7 bg-green-yellow-600"
                            >
                                Post
                            </button>
                        </div>
                    </form>
                    <section>
                        {posts.map((a, index) => {
                            const bookmarkStatus = getBookmarkStatus(a.id);
                            return (
                                <Post 
                                    key={index} 
                                    content={a}
                                    bookmark={bookmarkStatus}
                                    auth={auth}
                                />
                            );
                        })}
                    </section>
                </MainContent>
                <Sidebar />
            </DefaultLayout>
            <NavbarResponsive auth={auth} />
        </>
    );
}

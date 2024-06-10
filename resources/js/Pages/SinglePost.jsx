import Header from "@/Components/Header";
import MainContent from "@/Components/MainContent";
import Navbar from "@/Components/Navbar";
import NavbarResponsive from "@/Components/NavbarResposive";
import Post from "@/Components/Post";
import Sidebar from "@/Components/Sidebar";
import DefaultLayout from "@/Layouts/DefaultLayout";
import { Head, useForm } from "@inertiajs/react";
import { useState } from "react";

export default function SinglePost({ auth, posts, stores, comments }) {
    // console.log(comments);

    const { data, setData, post, processing, errors, reset } = useForm({
        body: "",
    });

    const submitComment = (e) => {
        e.preventDefault();
        post(route("comment.store", { id: posts.id }));
        reset('body');
    };

    return (
        <>
            <DefaultLayout>
                <Head title="Test" />
                <Navbar auth={auth} />
                <MainContent>
                    <Header></Header>
                    <section className="">
                        <Post content={posts} auth={auth}/>
                        {/* taruh form dibawah */}
                        <form
                            onSubmit={submitComment}
                            className="pt-5 px-4 md:px-10 h-36 border-b-[0.1px]  border-marshland-950 bg-ecru-white-100 flex flex-col-reverse"
                        >
                            <div>
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="py-2 mt-1 rounded-full px-7 bg-green-yellow-600 float-right"
                                >
                                    Kirim
                                </button>
                            </div>
                            <div className="flex w-4/5">
                                <textarea
                                    className="w-full h-12 px-5 py-3 font-light bg-transparent border-none resize-none overscroll-none focus:ring-0"
                                    name="body"
                                    value={data.body}
                                    onChange={(e) => setData("body",e.target.value)}
                                    placeholder="Tulis komentar..."
                                />
                            </div>
                        </form>



                        {comments.map((comment, i) => {
                            return (
                                <div key={comment.id} className="border-b border-gray-200 py-4">
                                    <div className="font-semibold text-left">
                                        <a href={`/profile/${comment.user.id}`}>
                                            {comment.user.name}
                                        </a>
                                    </div>
                                    <div className="mt-2 text-left">{comment.body}</div>
                                </div>
                            );
                        })}
                    </section>
                    <section>
                    </section>
                </MainContent>
                <Sidebar auth={auth} stores={stores} />
            </DefaultLayout>
            <NavbarResponsive auth={auth} />
        </>
    );
}

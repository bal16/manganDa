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
        reset("body");
    };

    return (
        <>
            <DefaultLayout>
                <Head title="Test" />
                <Navbar auth={auth} />
                <MainContent>
                    <Header></Header>
                    <section className="">
                        <Post content={posts} auth={auth} />
                        {/* taruh form dibawah */}
                        <form
                            onSubmit={submitComment}
                            className="pt-5 px-4 md:px-10 h-36 border-b-[0.1px]  border-marshland-950 bg-ecru-white-100 flex flex-col-reverse pb-3"
                        >
                            <div>
                                <button
                                    type="submit"
                                    disabled={processing || auth.user.is_admin}
                                    className="float-right py-2 mt-1 rounded-full px-7 bg-green-yellow-600"
                                >
                                    Kirim
                                </button>
                            </div>

                            <div className="relative w-full min-w-[200px]">
                                <textarea
                                    className="peer h-10 min-h-[40px] w-full resize-none border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
                                    placeholder=" "
                                    name="body"
                                    value={data.body}
                                    required
                                    onChange={(e) =>
                                        setData("body", e.target.value)
                                    }
                                ></textarea>
                                <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-0 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-900 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                Tulis komentar...
                                </label>
                            </div>
                        </form>
                        <div className="min-h-96 ">
                            {comments.map((comment, i) => {
                                return (
                                    <div
                                        key={comment.id}
                                        className="py-4 mx-10 border-b border-slate-950"
                                    >
                                        <div className="text-left">
                                            <a
                                                href={`/profile/${comment.user.id}`}
                                                className="text-sm font-light"
                                            >
                                                <span className="font-normal tr">
                                                    {comment.user.name}
                                                </span>{" "}
                                                @{comment.user.username}
                                            </a>
                                        </div>
                                        <div className="mt-2 text-sm font-light text-left">
                                            {comment.body}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </section>
                </MainContent>
                <Sidebar auth={auth} stores={stores} />
            </DefaultLayout>
            <NavbarResponsive auth={auth} />
        </>
    );
}

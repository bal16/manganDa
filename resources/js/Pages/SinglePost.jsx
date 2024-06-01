import Header from "@/Components/Header";
import MainContent from "@/Components/MainContent";
import Navbar from "@/Components/Navbar";
import NavbarResponsive from "@/Components/NavbarResposive";
import Post from "@/Components/Post";
import Sidebar from "@/Components/Sidebar";
import DefaultLayout from "@/Layouts/DefaultLayout";
import { Head, useForm } from "@inertiajs/react";
import { useState } from "react";

export default function SinglePost({ auth, post, stores, bookmark }) {
    const comments = [
        { id: '1', content: "naufal" },
        { id: '2', content: "naufal" }
    ];

    const [comment, setComment] = useState();

    // console.log(stores)

    const submitComment = (e) => {
        e.preventDefault();
        post(route("home"));
    };

    return (
        <>
            <DefaultLayout>
                <Head title="Test" />
                <Navbar auth={auth} />
                <MainContent>
                    <Header></Header>
                    <section className="">
                        <Post content={post} auth={auth}/>
                        {/* taruh form dibawah */}
                        <form
                            // onSubmit={submitComment}
                            className="pt-5 px-4 md:px-10 h-36 border-b-[0.1px]  border-marshland-950 bg-ecru-white-100 flex flex-col-reverse"
                        >
                            <div>
                                <button
                                    type="submit"
                                    // disabled={processing}
                                    className="py-2 mt-1 rounded-full px-7 bg-green-yellow-600 float-right"
                                >
                                    Kirim
                                </button>
                            </div>
                            <div className="flex w-4/5">
                                <textarea
                                    className="w-full h-12 px-5 py-3 font-light bg-transparent border-none resize-none overscroll-none focus:ring-0"
                                    name="body"
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                    placeholder="Tulis komentar..."
                                />
                            </div>
                        </form>



                        {comments.map((comment, i) => {
                            return (
                                // <Comment key={comment.id} content={comment.content} />
                                <p>{comment.content}</p>
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

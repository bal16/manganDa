import Comment from "@/Components/Comment";
import Header from "@/Components/Header";
import InputError from "@/Components/InputError";
import MainContent from "@/Components/MainContent";
import Navbar from "@/Components/Navbar";
import NavbarResponsive from "@/Components/NavbarResposive";
import Post from "@/Components/Post";
import Sidebar from "@/Components/Sidebar";
import DefaultLayout from "@/Layouts/DefaultLayout";
import { Icon } from "@iconify/react";
import { Head, useForm } from "@inertiajs/react";
import { useState } from "react";

export default function SinglePost({ auth, post, stores, bookmark }) {
    const comments = [
        { id: '1', content: "naufal" },
        { id: '2', content: "naufal" }
    ];

    console.log(stores)

    return (
        <>
            <DefaultLayout>
                <Head title="Test" />
                <Navbar auth={auth} />
                <MainContent>
                    <Header></Header>
                    <section className="">
                        <Post content={post} auth={auth}/>
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

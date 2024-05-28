import Header from "@/Components/Header";
import MainContent from "@/Components/MainContent";
import Navbar from "@/Components/Navbar";
import NavbarResponsive from "@/Components/NavbarResposive";
import Post from "@/Components/Post";
import RatingButton from "@/Components/RatingButton";
import Sidebar from "@/Components/Sidebar";
import DefaultLayout from "@/Layouts/DefaultLayout";
import { Head } from "@inertiajs/react";

export default function Profile({ auth, post, stores, user }) {
    console.log(user);

    return (
        <>
            <DefaultLayout>
                <Head title="Profile" />
                <Navbar auth={auth} />
                <MainContent>
                    <Header> a </Header>
                    <section className="p-2 h-36 border-b-[0.1px]  border-marshland-950 bg-ecru-white-100">
                        Ini Profile {user.name}
                    </section>
                    <RatingButton />
                    <section className="">
                        {post.map((a, index) => (
                            <Post
                            key={index}
                            content={a}
                            auth={auth}
                            />
                        ))}
                    </section>
                </MainContent>
                <Sidebar stores={stores} auth={auth}>Sidebar</Sidebar>
            </DefaultLayout>
            <NavbarResponsive auth={auth} />
        </>
    );
}

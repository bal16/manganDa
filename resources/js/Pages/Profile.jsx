import Header from "@/Components/Header";
import MainContent from "@/Components/MainContent";
import Navbar from "@/Components/Navbar";
import NavbarResponsive from "@/Components/NavbarResposive";
import Post from "@/Components/Post";
import Sidebar from "@/Components/Sidebar";
import DefaultLayout from "@/Layouts/DefaultLayout";
import { Head } from "@inertiajs/react";

export default function Profile({ auth }) {
    return (
        <>
            <DefaultLayout>
                <Head title="Profile" />
                <Navbar auth={auth} />
                <MainContent>
                    <Header> a </Header>
                    <section className="p-2 h-36 border-b-[0.1px]  border-marshland-950 bg-ecru-white-100">
                        Ini Profile {auth?.user?.name}
                    </section>
                    <section className="">
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                    </section>
                </MainContent>
                <Sidebar>Sidebar</Sidebar>
            </DefaultLayout>
            <NavbarResponsive auth={auth} />
        </>
    );
}

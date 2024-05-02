import Header from "@/Components/Header";
import MainContent from "@/Components/MainContent";
import Navbar from "@/Components/Navbar";
import NavbarResponsive from "@/Components/NavbarResposive";
import Post from "@/Components/Post";
import Sidebar from "@/Components/Sidebar";
import DefaultLayout from "@/Layouts/DefaultLayout";
import { Head } from "@inertiajs/react";

export default function Test({ auth }) {
    return (
        <>
            <DefaultLayout>
                <Head title="Test" />
                <Navbar auth={auth} />
                <MainContent>
                    <Header>Header</Header>
                    <section className="p-2 h-36 border-b-[0.1px]  border-marshland-950 bg-ecru-white-100">
                        Made a Post?
                    </section>
                    <section className="">
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

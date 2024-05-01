import MainContent from "@/Components/MainContent";
import Navbar from "@/Components/Navbar";
import NavbarResponsive from "@/Components/NavbarResposive";
import Sidebar from "@/Components/Sidebar";
import DefaultLayout from "@/Layouts/DefaultLayout";
import { Head } from "@inertiajs/react";

export default function Test({auth}) {
    return (
        <>
            <DefaultLayout>
                <Head title="Test" />
                <Navbar auth={auth} />
                <MainContent>
                    <section className="border-y h-36 bg-slate-400">
                        Made a Post?
                    </section>
                    <section className="">
                        <a href="#" className="block border-y min-h-[30rem] ">
                            Post
                        </a>
                        <a href="#" className="block border-y min-h-[30rem] ">
                            Post
                        </a>
                        <a href="#" className="block border-y min-h-[30rem] ">
                            Post
                        </a>
                    </section>
                </MainContent>
                <Sidebar>Sidebar</Sidebar>
            </DefaultLayout>
            <NavbarResponsive auth={auth} />
        </>
    );
}

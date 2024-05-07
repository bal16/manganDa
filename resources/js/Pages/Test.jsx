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
                    <Header></Header>
                    <section className="pt-5 px-10 h-36 border-b-[0.1px]  border-marshland-950 bg-ecru-white-100  ">
                        {/* Made a Post{auth&&","} {auth?.user?.name}? */}
                        <div className="flex">
                            <div className="w-12 h-12 overflow-hidden rounded-full bg-dark">
                                <img
                                    src="https://source.unsplash.com/50x50?photo-profile"
                                    alt=""
                                />
                            </div>
                            <p className="px-5 py-3 font-light">
                                Ada Rekomendasi Makanan?!
                            </p>
                        </div>
                        <div className="flex">
                            <div className="flex w-5/6 mt-8 ">
                                <span className="block w-5 h-5 bg-green-yellow-600 me-2"></span>
                                <span className="block w-5 h-5 bg-green-yellow-600 me-2"></span>
                                <span className="block w-5 h-5 bg-green-yellow-600 me-2"></span>
                                <span className="block w-5 h-5 bg-green-yellow-600 me-2"></span>
                                <span className="block w-5 h-5 bg-green-yellow-600 me-2"></span>
                                <span className="block w-5 h-5 bg-green-yellow-600 me-2"></span>
                            </div>
                            <button className="py-2 mt-6 rounded-full px-7 bg-green-yellow-600">
                                Post
                            </button>
                        </div>
                    </section>
                    <section className="">
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                    </section>
                </MainContent>
                <Sidebar />
            </DefaultLayout>
            <NavbarResponsive auth={auth} />
        </>
    );
}

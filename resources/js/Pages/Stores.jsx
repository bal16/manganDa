import Header from "@/Components/Header";
import MainContent from "@/Components/MainContent";
import Navbar from "@/Components/Navbar";
import NavbarResponsive from "@/Components/NavbarResposive";
import Sidebar from "@/Components/Sidebar";
import StoreCard from "@/Components/StoreCard";
import DefaultLayout from "@/Layouts/DefaultLayout";
import { Head } from "@inertiajs/react";
import { useState } from "react";

export default function Stores({ auth, stores }) {
    const [postModal, setPostModal] = useState(false);
    return (
        <>

            <DefaultLayout>
                <Head title="Stores" />
                <Navbar auth={auth} />
                <MainContent>
                    <Header></Header>
                    <section className="grid grid-cols-1 gap-2 px-10 mt-5 sm:px-3 md:grid-cols-2 xl:grid-cols-3 justify-items-center place-items-center">
                        {stores.map((store, index) => (
                            <StoreCard key={index} store={store} />
                        ))}
                        {/* INI HALAMAN STORES */}
                    </section>
                </MainContent>
                <Sidebar auth={auth} stores={stores}  />
            </DefaultLayout>
            <NavbarResponsive />
        </>
    );
}

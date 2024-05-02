import MainContent from "@/Components/MainContent";
import Navbar from "@/Components/Navbar";
import NavbarResponsive from "@/Components/NavbarResposive";
import Sidebar from "@/Components/Sidebar";
import DefaultLayout from "@/Layouts/DefaultLayout";
import { Head } from "@inertiajs/react";

export default function Profile({auth}) {
  return (
    <>
        <DefaultLayout >
            <Head title="User" />
            <Navbar auth={auth} />
            <MainContent>
                <>
                    
                </>
            </MainContent>
            <Sidebar>Sidebar</Sidebar>
        </DefaultLayout>
        <NavbarResponsive auth={auth} />
    </>
  )
}

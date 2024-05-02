import MainContent from "@/Components/MainContent";
import Navbar from "@/Components/Navbar";
import Sidebar from "@/Components/Sidebar";
import { Head } from "@inertiajs/react";

export default function DefaultLayout( {children}) {
    return (
        <div className=" bg-ecru-white-100">
            <div className="container flex w-full h-full mx-auto max-w-7xl">

            {children}
            </div>
        </div>
    );
}

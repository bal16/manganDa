import { Head } from "@inertiajs/react";

export default function Test() {
    return (
        <div className=" bg-slate-400">
            <Head title="Test" /> {/* masih layout doang bg*/}
            <div className="container flex w-full h-screen mx-auto max-w-7xl">
                <nav className="hidden w-2/5 mx-auto text-center border-r md:flex bg-slate-400">
                    Navbar
                </nav>
                <div className="w-full mx-auto overflow-y-auto text-center border bg-slate-700 scroll-smooth">
                    <header className="h-14 bg-slate-300" id="atas">Header</header>
                    <section className="border-y h-36 bg-slate-400">Made a Post?</section>
                    {/* <main className="h-[100rem]"> */}
                    <main className="">
                        <a href="#atas" className="block border-y min-h-[30rem] ">Post</a>
                        <a href="#atas" className="block border-y min-h-[30rem] ">Post</a>
                        <a href="#atas" className="block border-y min-h-[30rem] ">Post</a>
                    </main>
                </div>
                <aside className="hidden w-3/5 mx-auto text-center border-l md:flex bg-slate-400">
                    Sidebar
                </aside>
            </div>
            <nav className="absolute bottom-0 w-full h-20 text-center text-white bg-slate-950 md:hidden">
                NavbarResponsive
            </nav>
        </div>
    );
}

// import { } from "@inertiajs/react";

export default function MainContent({children}) {
    // const children = (
    //     <>
    //         <header className="h-14 bg-slate-300">Header</header>
    //         <section className="border-y h-36 bg-slate-400">
    //             Made a Post?
    //         </section>
    //         <section className="">
    //             <a href="#" className="block border-y min-h-[30rem] ">
    //                 Post
    //             </a>
    //             <a href="#" className="block border-y min-h-[30rem] ">
    //                 Post
    //             </a>
    //             <a href="#" className="block border-y min-h-[30rem] ">
    //                 Post
    //             </a>
    //         </section>
    //     </>
    // );
    return (
        <main className="w-full mx-auto text-center border bg-slate-700 ">
            {children}
        </main>
    );
}

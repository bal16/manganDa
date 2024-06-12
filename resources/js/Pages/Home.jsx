import Header from "@/Components/Header";
import InputError from "@/Components/InputError";
import MainContent from "@/Components/MainContent";
import Navbar from "@/Components/Navbar";
import NavbarResponsive from "@/Components/NavbarResposive";
import Post from "@/Components/Post";
import Sidebar from "@/Components/Sidebar";
import DefaultLayout from "@/Layouts/DefaultLayout";
import { Icon } from "@iconify/react";
import { Head, useForm } from "@inertiajs/react";
import { useState } from "react";

export default function Home({ auth, posts, stores, bookmark }) {
    // console.log(auth)
    posts.sort((a, b) => {
        if (a.created_at > b.created_at) {
            return -1;
        } else if (a.created_at < b.created_at) {
            return 1;
        } else {
            return 0;
        }
    });

    const [postModal, setPostModal] = useState(false);
    const { data, setData, post, processing, errors, reset } = useForm({
        body: "",
    });
    const submit = (e) => {
        e.preventDefault();
        post(route("home"));
        reset("body", "image");
    };

    // console.log(posts)

    return (
        <>
            <div
                className={
                    "fixed w-full h-full z-[99] backdrop-blur-sm items-center " +
                    (!postModal ? " hidden" : " flex")
                }
            >
                <div className="mx-auto bg-slate-200 shadow-md w-[80%] sm:w-[70%] md:w-[50%] rounded-2xl min-h-[50%] text-end">
                    <button
                        className="text-8xl"
                        onClick={() => setPostModal(!postModal)}
                    >
                        X
                    </button>
                </div>
            </div>
            <DefaultLayout>
                <Head title="Home" />
                <Navbar auth={auth} />
                <MainContent>
                    <Header></Header>
                    <form
                        onSubmit={submit}
                        // action=""
                        className="pt-5 px-4 md:px-10 h-36 border-b-[0.1px]  border-marshland-950 bg-ecru-white-100  "
                    >
                        {/* Made a Post{auth&&","} {auth?.user?.name}? */}
                        <div className="flex">
                            {/* <div className="w-12 h-12 overflow-hidden bg-black rounded-full me-2">
                                <img
                                    className="w-full"
                                    src="https://source.unsplash.com/50x50?photo-profile"
                                    alt=""
                                />
                            </div> */}
                            <div className="avatar placeholder">
                                <div className="w-12 rounded-full bg-neutral text-neutral-content">
                                    <span className="text-3xl">
                                        {Array.from(
                                            auth.user.username
                                        )[0].toUpperCase()}
                                    </span>
                                </div>
                            </div>

                            <textarea
                                className="w-4/5 h-12 px-5 py-3 font-light bg-transparent border-none resize-none overscroll-none focus:ring-0"
                                name="body"
                                value={data.body}
                                required
                                onChange={(e) =>
                                    setData("body", e.target.value)
                                }
                                placeholder="Ada Rekomendasi Makanan?!"
                            />
                            {/* </input> */}
                        </div>
                        <div className="flex mt-3">
                            <div className="flex w-5/6 mt-3">
                                <input
                                    type="file"
                                    name="image"
                                    id="image"
                                    onChange={(e) =>
                                        setData("image", e.target.files[0])
                                    }
                                    className="hidden"
                                />
                                <label htmlFor="image" className="w-6 h-6 me-2">
                                    <Icon
                                        icon="bxs:image-add"
                                        width="1,25em"
                                        height="1,25em"
                                    />
                                </label>
                                {/* store */}
                                {/* */}
                                {/* <span className="block w-6 h-6 bg-green-yellow-600 me-2"></span>
                                <span className="block w-6 h-6 bg-green-yellow-600 me-2"></span>
                                <span className="block w-6 h-6 bg-green-yellow-600 me-2"></span>
                                <span className="block w-6 h-6 bg-green-yellow-600 me-2"></span>
                                <span className="block w-6 h-6 bg-green-yellow-600 me-2"></span> */}
                            </div>
                            <button
                                // type="submit"
                                disabled={processing || auth.user.iadmin}
                                // onClick={() => setPostModal(!postModal)}
                                className="py-2 mt-1 rounded-full px-7 bg-green-yellow-600"
                            >
                                Post
                            </button>
                        </div>
                        <InputError message={errors.image} className="mt-2" />
                    </form>
                    <section className="">
                        {posts.map((a, index) => (
                            <Post key={index} content={a} auth={auth} />
                        ))}
                    </section>
                </MainContent>
                <Sidebar auth={auth} stores={stores} />
            </DefaultLayout>
            <NavbarResponsive auth={auth} />
        </>
    );
}

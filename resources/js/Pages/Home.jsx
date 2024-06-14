import Header from "@/Components/Header";
import InputError from "@/Components/InputError";
import MainContent from "@/Components/MainContent";
import Navbar from "@/Components/Navbar";
import NavbarResponsive from "@/Components/NavbarResposive";
import Post from "@/Components/Post";
import Sidebar from "@/Components/Sidebar";
import DefaultLayout from "@/Layouts/DefaultLayout";
import { Icon } from "@iconify/react";
import { Head, Link, useForm } from "@inertiajs/react";
import { useState } from "react";
import Select from "react-tailwindcss-select";

export default function Home({ auth, posts, stores, bookmark }) {
    const [imageLabel, setImageLabel] = useState(false);
    const [tag, setTag] = useState(null);
    const page = {
        current: posts.current_page,
        last: posts.last_page,
    };
    const options = stores.map((store, index) => ({
        value: store.id,
        label: '@'+store.name
    }));


    // console.log(page);
    posts = posts.data;

    const { data, setData, post, processing, errors, reset } = useForm({
        body: "",
        tag:null
    });
    const submit = (e) => {
        e.preventDefault();
        // console.log(data);
        post(route("home"));
        reset("body", "image", "tag");
    };
    const handleChange = (value) => {
        // console.log("value:", value);
        setTag(value);
        return setData('tag', value.value);
    };
    return (
        <>
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
                        <div className="grid grid-cols-[1fr_8fr] gap-5">
                            {/* <div className="w-12 h-12 overflow-hidden bg-black rounded-full me-2">
                                <img
                                    className="w-full"
                                    src="https://source.unsplash.com/50x50?photo-profile"
                                    alt=""
                                />
                            </div> */}
                            <div className="w-12 h-12 avatar placeholder">
                                <div className="w-12 rounded-full bg-neutral text-neutral-content">
                                    <span className="text-3xl">
                                        {Array.from(
                                            auth.user.username
                                        )[0].toUpperCase()}
                                    </span>
                                </div>
                            </div>

                            {/* <textarea
                                className="w-4/5 h-12 px-5 py-3 font-light bg-transparent border-none resize-none overscroll-none focus:ring-0 focus:border-0"
                                name="body"
                                value={data.body}
                                required
                                onChange={(e) =>
                                    setData("body", e.target.value)
                                }
                                placeholder="Ada Rekomendasi Makanan?!"
                            /> */}

                            <div className="w-full h-5">
                                <div className="relative w-full min-w-[200px]">
                                    <textarea
                                        className="peer h-full min-h-[20px] w-full resize-none rounded-[7px] border-0 border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-0 placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-0 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
                                        placeholder=" "
                                        name="body"
                                        value={data.body}
                                        required
                                        onChange={(e) =>
                                            setData("body", e.target.value)
                                        }
                                    ></textarea>
                                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border-0 before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t-0 before:border-0 before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t-0 after:border-r-0 after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-0 peer-focus:before:border-l-0 peer-focus:before:border-gray-900 peer-focus:after:border-t-0 peer-focus:after:border-r-0 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                        Ada Rekomendasi Makanan?!
                                    </label>
                                </div>
                            </div>
                            {/* </input> */}
                        </div>
                        <div className="flex mt-3">
                            <div className="flex w-5/6 mt-3">
                                <input
                                    type="file"
                                    name="image"
                                    id="image"
                                    onChange={(e) => {
                                        setImageLabel(true);
                                        return setData(
                                            "image",
                                            e.target.files[0]
                                        );
                                    }}
                                    className="hidden"
                                />
                                <label htmlFor="image" className="w-6 h-6 me-2">
                                    {imageLabel == false ? (
                                        <Icon
                                            icon="bxs:image-add"
                                            className="w-6 h-6"
                                        />
                                    ) : (
                                        <Icon
                                            icon="line-md:image"
                                            className="w-6 h-6"
                                        />
                                    )}
                                </label>
                                <div className="h-6 -mt-2 bg-yellow-300 w-36 min-w-6 me-2">
                                    <Select
                                        value={tag}
                                        onChange={handleChange}
                                        options={options}
                                        placeholder="Tag toko"
                                        isSearchable
                                    />
                                </div>
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
                    <section className="min-h-screen">
                        {posts.map((a, index) => (
                            <Post key={index} content={a} auth={auth} />
                        ))}
                    </section>
                    <div className="my-10 join">
                        <Link
                            className={
                                (page.current == 1 ? "btn-disabled" : "") +
                                ` join-item btn`
                            }
                            href={"?page=" + (page.current - 1)}
                        >
                            «
                        </Link>
                        <Link className="join-item btn" href="#">
                            Page {page.current}
                        </Link>
                        <Link
                            className={
                                (page.current == page.last
                                    ? "btn-disabled"
                                    : "") + ` join-item btn`
                            }
                            href={"?page=" + (page.current + 1)}
                        >
                            »
                        </Link>
                    </div>
                </MainContent>
                <Sidebar auth={auth} stores={stores} />
            </DefaultLayout>
            <NavbarResponsive auth={auth} />
        </>
    );
}

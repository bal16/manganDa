import Header from "@/Components/Header";
import MainContent from "@/Components/MainContent";
import Navbar from "@/Components/Navbar";
import NavbarResponsive from "@/Components/NavbarResposive";
import Post from "@/Components/Post";
import SearchBar from "@/Components/SearchBar";
import Sidebar from "@/Components/Sidebar";
import StoreCard from "@/Components/StoreCard";
import DefaultLayout from "@/Layouts/DefaultLayout";
import { Head } from "@inertiajs/react";
import { useEffect, useState } from "react";
import axios from "axios";

const showPost = (posts) => posts.map((post, i) => <Post key={i} />);

export default function Explore({ auth, posts, stores }) {
    const [postsList, setPostsList] = useState(posts);
    const [storeList, setStoreList] = useState(stores);
    const [searchInput, setSearchInput] = useState("");
    const [debouncedInput, setDebouncedInput] = useState(searchInput);

    // console.log(posts);
    // console.log(stores);
    const handleChange = (e) => {
        setSearchInput(e.target.value);
    };

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedInput(searchInput);
        }, 500); // Adjust the debounce delay as needed

        return () => {
            clearTimeout(handler);
        };
    }, [searchInput]);

    useEffect(() => {
        // console.log(searchInput);
        const fecthData = async () => {
            try {
                const response = await axios.post("/search", {
                    query: debouncedInput,
                });
                console.log(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        if (debouncedInput) {
            fecthData();
        }
    }, [handleChange]);
    return (
        <>
            {/* <div
                className={
                    "fixed w-full h-full z-[99] backdrop-blur-sm items-center " +
                    (!postModal ? " hidden" : " flex")
                }
            >
                <div className="mx-auto bg-slate-200 shadow-md w-[80%] sm:w-[70%] md:w-[50%] rounded-2xl min-h-[50%] text-end">
                    <button
                        className="text-8xl"
                        // onClick={() => setPostModal(!postModal)}
                    >
                        X
                    </button>
                </div>
            </div> */}
            <DefaultLayout>
                <Head title="explore" />
                <Navbar auth={auth} />
                <MainContent>
                    <Header></Header>
                    <section className="pt-5 px-4 md:px-10 h-36 border-b-[0.1px]  border-marshland-950 bg-ecru-white-100  ">
                        <SearchBar
                            value={searchInput}
                            handleChange={handleChange}
                        />
                        {/* Made a Post{auth&&","} {auth?.user?.name}? */}
                    </section>
                    <section className="">
                        {/* {post.map((post, index) => (
                            <Post />
                        ))} */}
                        INI HALAMAN EXPLORE
                    </section>
                </MainContent>
                <Sidebar auth={auth} stores={stores} />
            </DefaultLayout>
            <NavbarResponsive auth={auth} stores={stores} />
        </>
    );
}

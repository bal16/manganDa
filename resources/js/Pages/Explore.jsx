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
import StoreAccordion from "@/Components/StoreAccordion";

export default function Explore({ auth, posts, stores }) {
    const [postsList, setPostsList] = useState([]);
    const [storesList, setStoresList] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const [debouncedInput, setDebouncedInput] = useState(searchInput);

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

    const handleSearch = async () => {
        try {
            const response = await axios.post("/search", {
                query: debouncedInput,
            });
            setStoresList(response.data.stores);
            setPostsList(response.data.posts);
            // console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="min-h-screen">
            <DefaultLayout>
                <Head title="explore" />
                <Navbar auth={auth} />
                <MainContent>
                    <Header />
                    <section className="pt-5 px-4 md:px-10 h-36 border-b-[0.1px] border-marshland-950 bg-ecru-white-100">
                        <SearchBar
                            value={searchInput}
                            handleChange={handleChange}
                        />
                        <button className="mt-5 btn btn-success" onClick={handleSearch}>
                            Search
                        </button>
                    </section>
                    <section>
                        {(storesList==[])?'':storesList.map((store, index) => (
                            <StoreAccordion store={store} key={index} />
                        ))}
                    </section>
                    <section>
                        {(postsList==[])?'':postsList.map((post, index) => (
                            <Post content={post} auth={auth} key={index} />
                        ))}
                    </section>
                </MainContent>
                <Sidebar auth={auth} stores={stores} />
            </DefaultLayout>
            <NavbarResponsive auth={auth} stores={stores} />
        </div>
    );
}

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
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import StoreAccordion from "@/Components/StoreAccordion";

export default function Explore({ auth, posts, stores }) {
    const [postsList, setPostsList] = useState([]);
    const [storesList, setStoresList] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const [debouncedInput, setDebouncedInput] = useState(searchInput);
    const searchInputRef = useRef(null);

    const isEmpty = () => (
        <article className="px-5 pt-5 text-center">
            Kolom pencarian masih kosong coba <kbd className="kbd kbd-sm">ctrl</kbd> + <kbd className="kbd kbd-sm">k</kbd> untuk otomatis terfokus ke search bar
        </article>
    );

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
        const handleKeyDown = (event) => {
            if (event.ctrlKey && event.key === 'k') {
                event.preventDefault();
                if (searchInputRef.current) {
                    searchInputRef.current.focus();
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

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

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            // console.log('Enter')
            handleSearch();
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
                            ref={searchInputRef}
                            handleKeyPress={handleKeyPress}
                        />
                        <button className="mt-5 btn btn-success" onClick={handleSearch}>
                            Search
                        </button>
                    </section>
                    <section>
                        {storesList.length > 0 && storesList.map((store, index) => (
                            <StoreAccordion store={store} key={index} />
                        ))}
                    </section>
                    <section>
                        {postsList.length > 0 && postsList.map((post, index) => (
                            <Post content={post} auth={auth} key={index} />
                        ))}
                    </section>
                    {postsList.length === 0 && storesList.length === 0 && isEmpty()}
                </MainContent>
                <Sidebar auth={auth} stores={stores} />
            </DefaultLayout>
            <NavbarResponsive auth={auth} stores={stores} />
        </div>
    );
}

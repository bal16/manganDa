import Header from "@/Components/Header";
import MainContent from "@/Components/MainContent";
import Navbar from "@/Components/Navbar";
import NavbarResponsive from "@/Components/NavbarResposive";
import Post from "@/Components/Post";
import RatingButton from "@/Components/RatingButton";
import Sidebar from "@/Components/Sidebar";
import DefaultLayout from "@/Layouts/DefaultLayout";
import { Head } from "@inertiajs/react";

export default function Profile({ auth, post, stores, user, rating, userRating }) {
    // console.log(stores);
    return (
        <>
            <DefaultLayout>
                <Head title="Profile" />
                <Navbar auth={auth} />
                <MainContent>
                    <Header> a </Header>
                    <section className="relative p-2 h-36 border-b-[0.1px] border-marshland-950 bg-ecru-white-100">
                        <div className="w-20 h-20 overflow-hidden bg-black rounded-full me-2">
                                <img
                                    className="w-full"
                                    src="https://source.unsplash.com/50x50?photo-profile"
                                    alt=""
                                />
                        </div>
                        <div className="absolute left-5 mt-3 text-left mb-3">
                            <p>{user.name}</p>
                            {user.is_store ? 
                                <p className="font-light">{stores[0].description}</p>
                            : ''}
                        </div>
                        <div className="absolute right-5 top-5">
                            {user.is_store ? <RatingButton storeRating={rating} userRating={userRating} auth={auth} store={stores[0]} /> : ''}
                        </div>
                        
                    </section>
                    <section className="">
                        {post.map((a, index) => (
                            <Post
                                key={index}
                                content={a}
                                auth={auth}
                            />
                        ))}
                    </section>
                </MainContent>
                <Sidebar stores={stores} auth={auth}>Sidebar</Sidebar>
            </DefaultLayout>
            <NavbarResponsive auth={auth} />
        </>
    );
}

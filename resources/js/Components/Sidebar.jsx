import { memo } from "react";
import SearchBar from "./SearchBar";

export default memo(function Sidebar({ auth, stores }) {
    const number = "12345"; //?? ISI NOMER WA
    const message =
        "Halo,Admin%0aSaya%20ingin%20tanya%20makanan%20di%20sini%3F";

    // console.log(stores);

    return (
        <aside className="hidden w-3/5 p-2  text-center border-l-[0.1px] border-marshland-950 md:flex text-marshland-950 bg-ecru-white-100 sticky top-0 h-screen">
            <div className="w-full h-full px-3 py-0 text-start">
                <div className="w-full px-4 pt-3 pb-6 mb-4 border rounded-2xl border-marshland-950 text-start">
                    <h3 className="text-xl font-bold">
                        Hubungi <br />
                        Kontak Kami
                    </h3>
                    <p className="py-2 mb-2 font-light">
                    Jika Anda memiliki pertanyaan atau membutuhkan bantuan, jangan ragu untuk menghubungi kami. Tim kami siap membantu Anda dengan informasi dan dukungan yang Anda butuhkan.
                    </p>
                    <a
                        href={`https://wa.me/${number}?text=${message}`}
                        target="_blank"
                        className="px-4 py-2 rounded-full bg-green-yellow-600"
                    >
                        Hubungi Kami
                    </a>
                    {
                        auth.user.is_store  || auth.user.is_admin ?
                            ''
                        : <a
                        href={route("store.create")}
                        // target="_blank" q
                        className="px-4 py-2 rounded-full bg-green-yellow-600"
                        >
                            Daftar Toko
                        </a>
                    }
                </div>
                <div className="w-full px-4 pt-3 pb-10 border rounded-2xl border-marshland-950 text-start">
                    <h3 className="text-xl font-bold">
                        Rekomendasi <br />
                        Toko Untukmu
                    </h3>
                    {/* Section Makanan Populer */}
                    <section className="">
                        {stores
                            .filter(store =>store.is_validate)
                            .map((store, i) => (
                                <div key={i} className="py-2">
                                    <h4 className="font-semibold">
                                        <a href={`/profile/${store.user_id}`}>
                                            {store.name}
                                        </a>
                                    </h4>
                                    <p className="font-light">
                                        {store.description}
                                    </p>
                                </div>
                        ))}
                    </section>
                </div>
            </div>
        </aside>
    );
});

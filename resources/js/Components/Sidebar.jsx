import { memo } from "react";
import SearchBar from "./SearchBar";

export default memo(function Sidebar({}) {
    const food = [
        {
            name: "Nama Menu",
            stores: "Nama Toko",
        },
        {
            name: "Nama Menu",
            stores: "Nama Toko",
        },
        {
            name: "Nama Menu",
            stores: "Nama Toko",
        },
    ];
    return (
        <aside className="hidden w-3/5 p-2 -mb-1 text-center border-l-[0.1px] border-marshland-950 md:flex text-marshland-950 bg-ecru-white-100 ">
            <div className="w-full h-full px-3 py-4 text-start">
                {/* <h2 className="mb-5 text-2xl font-bold text-marshland-950">
                    Sidebar
                </h2> */}
                <div className="w-full mb-5 ">
                    <SearchBar />
                </div>
                <div className="w-full px-4 pt-3 pb-10 border rounded-2xl border-marshland-950 text-start">
                    <h3 className="text-xl font-bold">
                        Rekomendasi <br />
                        Makanan Untukmu
                    </h3>
                    {/* Section Makanan Populer */}
                    <section>
                        {food.map((item, i) => (
                            <div key={i} className="py-2">
                                <h4 className="font-semibold">{item.name}</h4>
                                <p className="font-light">{item.stores}</p>
                            </div>
                        ))}
                    </section>
                </div>
            </div>
        </aside>
    );
});

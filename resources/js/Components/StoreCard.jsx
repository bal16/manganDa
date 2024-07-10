import { Link } from "@inertiajs/react";
import { memo } from "react";

function StoreCard({ store }) {
    return (
        <Link
            href={`/profile/${store.user_id}`}
            className="w-full mb-3 shadow-xl card bg-base-100"
        >
            <div className="items-center text-center card-body">
                <h2 className="card-title">{store.name}</h2>
                <p className="break-words">{store.description}</p>
            </div>
        </Link>
    );
}

export default memo(StoreCard);

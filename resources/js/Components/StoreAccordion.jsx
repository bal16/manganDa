import { memo } from "react";
export default memo(function StoreAccordion({ store }) {
    // console.log(store);
    return (
        <a className="mx-auto shadow-xl card w-96 bg-base-100" href={`/profile/${store.user_id}`}>
            <div className=" card-body">
                <h2 className="card-title">{store.name}</h2>
                <p className="text-start">{store.description}</p>
            </div>
        </a>
    );
});

import { memo } from "react";
export default memo(function StoreAccordion({store}) {
    console.log(store)
    return (
        <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="text-xl font-medium collapse-title">
                {store.name}
            </div>
            <div className="collapse-content">
                <p>{store.description}</p>
            </div>
        </div>
    );
});

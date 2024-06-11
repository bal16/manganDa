import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "@inertiajs/react";

function DashboardCard12({ jumlah }) {
    const [reports, setReports] = useState('')
    const [storeRequests, setStoreRequests] = useState('')
    const template = (data,i) => (
        <li className="flex px-2" key={i}>
            <div className="flex items-center py-2 text-sm border-b grow border-slate-100 dark:border-slate-700">
                <div className="flex justify-between grow">
                    <div className="self-center">
                        <Link
                            className="font-medium text-slate-800 hover:text-slate-900 dark:text-slate-100 dark:hover:text-white"
                            href={data.body?"/db/report":"/db/stores/requests"}
                        >
                            <span className="dark:text-blue-300">{data.user.name}</span> | { (data.body) ? data.body : data.description}
                        </Link>
                    </div>
                    <div className="self-end ml-2 shrink-0">
                        <Link
                            className="font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400"
                            href={data.body?"/db/report":"/db/stores/requests"}
                        >
                            View<span className="hidden sm:inline"> -&gt;</span>
                        </Link>
                    </div>
                </div>
            </div>
        </li>
    );
    const fechDatas = async()=>{
        try{
            const response1 = await axios.get('/db/reportList')
            setReports( response1.data.reports)
            const response2 = await axios.get('/db/stores/requestsList')
            setStoreRequests( response2.data.stores)
            console.log(response2.data)
        }catch(error){
            console.error(error)
        }

    }
    useEffect(()=>{
        fechDatas()
    }, [])

    return (
        <div className="bg-white border rounded-sm shadow-lg col-span-full xl:col-span-12 dark:bg-slate-800 border-slate-200 dark:border-slate-700">
            <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
                <h2 className="font-semibold text-slate-800 dark:text-slate-100">
                    Recent Activity
                </h2>
            </header>
            <div className="p-3">
                {/* Card content */}
                {/* "Today" group */}
                <div>
                    <header className="p-2 text-xs font-semibold uppercase rounded-sm text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50">
                        Reported Post
                    </header>
                    <ul className="my-1">
                        {/* Item */}
                        {reports.length?reports.map((report, i)=>template(report, i)):''}
                    </ul>
                </div>
                {/* "Yesterday" group */}
                <div>
                    <header className="p-2 text-xs font-semibold uppercase rounded-sm text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50">
                        Requested Store
                    </header>
                    <ul className="my-1">
                        {storeRequests.length?storeRequests.map((request, i)=>template(request, i)):''}
                        {/* {template()} */}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default DashboardCard12;

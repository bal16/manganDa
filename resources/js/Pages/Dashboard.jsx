import React, { useEffect, useState } from "react";

import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import WelcomeBanner from "../partials/dashboard/WelcomeBanner";
import Datepicker from "../Components/Datepicker";
import DashboardCard05 from "../partials/dashboard/DashboardCard05";
import DashboardCard06 from "../partials/dashboard/DashboardCard06";
import DashboardCard12 from "../partials/dashboard/DashboardCard12";
import { Head } from "@inertiajs/react";
import axios from "axios";

function Dashboard({ auth, jumlah }) {
    // console.log(jumlah)
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [quote, setQuote] = useState();
    const quoteWidget = (quote) => (
        <div className="pt-5 card-body ">
            <h2 className="card-title">Quotes Today! <small>#{quote.tags}</small></h2>
            <p className="pb-2">{quote.content}</p>
            <p className="text-end" >
                ~ {quote?.author}
            </p>
        </div>
    );
    const fetchQuote = async () => {
        try {
            console.log("Attempting to fetch quote...");
            const response = await axios.get(
                "https://api.quotable.io/quotes/random"
            );
            setQuote(response.data[0]); // Set the state with the fetched data
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            await fetchQuote();
        };
        fetchData();
    }, []);

    return (
        <div className="flex h-screen -mb-2 overflow-hidden dark:bg-slate-900">
            {/* Sidebar */}
            <Sidebar
                jumlah={jumlah}
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
            />

            {/* Content area */}
            <div className="relative flex flex-col flex-1 overflow-x-hidden overflow-y-auto">
                {/*  Site header */}
                <Header
                    sidebarOpen={sidebarOpen}
                    setSidebarOpen={setSidebarOpen}
                    auth={auth}
                />
                <Head title="Dashboard" />

                <main>
                    <div className="w-full px-4 py-8 mx-auto sm:px-6 lg:px-8 max-w-9xl">
                        <WelcomeBanner auth={auth} />

                        {/* Dashboard actions */}
                        <div className="gap-10 mb-8 sm:grid sm:grid-cols-[10fr_1fr] grid-cols-1 ">
                            <div className="pb-2 mb-8 border rounded-none shadow-xl sm:mb-0 border-slate-700 card bg-slate-800 text-slate-100">
                                {quote ? quoteWidget(quote):(
                                    <center className="mt-2"> Loading ... </center>
                                )}
                            </div>
                            <Datepicker align="right" />

                            {/* Right: Actions */}
                        </div>

                        {/* Cards */}
                        <div className="grid grid-cols-12 gap-6">
                            <DashboardCard05 />
                            <DashboardCard06 jumlah={jumlah} />
                            <DashboardCard12 jumlah={jumlah} />
                        </div>
                    </div>
                </main>

            </div>
        </div>
    );
}

export default Dashboard;

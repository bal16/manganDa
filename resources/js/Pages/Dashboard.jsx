import React, { useEffect, useState } from "react";

import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import WelcomeBanner from "../partials/dashboard/WelcomeBanner";
import DashboardAvatars from "../partials/dashboard/DashboardAvatars";
import FilterButton from "../Components/DropdownFilter";
import Datepicker from "../Components/Datepicker";
import DashboardCard01 from "../partials/dashboard/DashboardCard01";
import DashboardCard02 from "../partials/dashboard/DashboardCard02";
import DashboardCard03 from "../partials/dashboard/DashboardCard03";
import DashboardCard04 from "../partials/dashboard/DashboardCard04";
import DashboardCard05 from "../partials/dashboard/DashboardCard05";
import DashboardCard06 from "../partials/dashboard/DashboardCard06";
import DashboardCard07 from "../partials/dashboard/DashboardCard07";
import DashboardCard08 from "../partials/dashboard/DashboardCard08";
import DashboardCard09 from "../partials/dashboard/DashboardCard09";
import DashboardCard10 from "../partials/dashboard/DashboardCard10";
import DashboardCard11 from "../partials/dashboard/DashboardCard11";
import DashboardCard12 from "../partials/dashboard/DashboardCard12";
import DashboardCard13 from "../partials/dashboard/DashboardCard13";
import Banner from "../partials/Banner";
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
                {/* ~ {quote?.character} ({quote?.anime}) */}
                ~ {quote?.author}
            </p>
            {/* <p className="text-end tooltip" data-tip={quote?.anime}>~ {quote?.character}</p> */}
        </div>
    );
    const fetchQuote = async () => {
        try {
            console.log("Attempting to fetch quote...");
            const response = await axios.get(
                // "https://katanime.vercel.app/api/getrandom"
                "https://api.quotable.io/quotes/random"
            );
            setQuote(response.data[0]); // Set the state with the fetched data
            // console.log(response.data); // Set the state with the fetched data
            // console.log(response.data.result[0]); // Log the fetched data
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
                        {/* Welcome banner */}
                        {/* <WelcomeBanner auth={auth} /> */}
                        <WelcomeBanner auth={auth} />

                        {/* Dashboard actions */}
                        {/* <div className="mb-8 sm:flex sm:justify-between sm:items-center"> */}
                        <div className="gap-10 mb-8 sm:grid sm:grid-cols-[10fr_1fr] grid-cols-1 ">
                            {/* Left: Avatars */}
                            {/* <DashboardAvatars /> */}
                            {/* <div></div> */}
                            <div className="pb-2 mb-8 sm:mb-0 border rounded-none shadow-xl border-slate-700 card bg-slate-800 text-slate-100">
                                {quote ? quoteWidget(quote):(
                                    <center className="mt-2"> Loading ... </center>
                                )}
                            </div>
                            {/* <Datepicker align='' /> */}
                            <Datepicker align="right" />

                            {/* Right: Actions */}
                            {/* <div className="grid justify-start grid-flow-col gap-2 sm:auto-cols-max sm:justify-end"> */}
                            {/* Filter button */}
                            {/* <FilterButton /> */}
                            {/* Datepicker built with flatpickr */}
                            {/* <Datepicker /> */}
                            {/* Add view button */}
                            {/* <button className="text-white bg-indigo-500 btn hover:bg-indigo-600">
                    <svg className="w-4 h-4 opacity-50 fill-current shrink-0" viewBox="0 0 16 16">
                        <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                    </svg>
                    <span className="hidden ml-2 xs:block">Add view</span>
                </button> */}
                            {/* </div> */}
                        </div>

                        {/* Cards */}
                        <div className="grid grid-cols-12 gap-6">
                            {/* Line chart (Acme Plus) */}
                            {/* <DashboardCard01 /> */}
                            {/* Line chart (Acme Advanced) */}
                            {/* <DashboardCard02 /> */}
                            {/* Line chart (Acme Professional) */}
                            {/* <DashboardCard03 /> */}
                            {/* Bar chart (Direct vs Indirect) */}
                            {/* <DashboardCard04 /> */}
                            {/* Line chart (Real Time Value) */}
                            <DashboardCard05 />
                            {/* <div className="shadow-xl w-80 card bg-base-100" data-theme="dark">
                                <div className="card-body">
                                    <h2 className="card-title">Card title!</h2>
                                    <p>
                                        If a dog chews shoes whose shoes does he
                                        choose?
                                    </p>
                                    <div className="justify-end card-actions">
                                        <button className="btn btn-primary">
                                            Buy Now
                                        </button>
                                    </div>
                                </div>
                            </div> */}
                            {/* Doughnut chart (Top Countries) */}
                            <DashboardCard06 jumlah={jumlah} />
                            {/* Table (Top Channels) */}
                            {/* <DashboardCard07 /> */}
                            {/* Line chart (Sales Over Time) */}
                            {/* <DashboardCard08 /> */}
                            {/* Stacked bar chart (Sales VS Refunds) */}
                            {/* <DashboardCard09 /> */}
                            {/* Card (Customers) */}
                            {/* <DashboardCard10 /> */}
                            {/* Card (Reasons for Refunds) */}
                            {/* <DashboardCard11 /> */}
                            {/* Card (Recent Activity) */}
                            <DashboardCard12 jumlah={jumlah} />
                            {/* Card (Income/Expenses) */}
                            {/* <DashboardCard13 /> */}
                        </div>
                    </div>
                </main>

                {/* <Banner /> */}
            </div>
        </div>
    );
}

export default Dashboard;

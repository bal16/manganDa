import React, { useState, useEffect, useRef } from "react";
import Logo from "../../images/logo.png";
// import { NavLink, useLocation } from 'react-router-dom';

import SidebarLinkGroup from "./SidebarLinkGroup";
import NavLink from "@/Components/NavLink";
import { Icon } from "@iconify/react";

function Sidebar({ sidebarOpen, setSidebarOpen, jumlah }) {
    //   const location = useLocation();
    const { pathname } = window.location;

    const trigger = useRef(null);
    const sidebar = useRef(null);

    const badge = (jumlah) => (
        <div className="flex flex-shrink-0 ml-2">
            <span className="inline-flex items-center justify-center h-5 px-2 text-xs font-medium text-white bg-indigo-500 rounded">
                {jumlah}
            </span>
        </div>
    );

    const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
    // console.log('1',storedSidebarExpanded)
    const [sidebarExpanded, setSidebarExpanded] = useState(
        storedSidebarExpanded == false ? false : storedSidebarExpanded == "true"
    );
    // console.log('1',storedSidebarExpanded)
    // console.log('2',sidebarExpanded)

    // close on click outside
    useEffect(() => {
        const clickHandler = ({ target }) => {
            if (!sidebar.current || !trigger.current) return;
            if (
                !sidebarOpen ||
                sidebar.current.contains(target) ||
                trigger.current.contains(target)
            )
                return;
            setSidebarOpen(false);
        };
        document.addEventListener("click", clickHandler);
        return () => document.removeEventListener("click", clickHandler);
    });

    // close if the esc key is pressed
    useEffect(() => {
        const keyHandler = ({ keyCode }) => {
            if (!sidebarOpen || keyCode !== 27) return;
            setSidebarOpen(false);
        };
        document.addEventListener("keydown", keyHandler);
        return () => document.removeEventListener("keydown", keyHandler);
    });

    useEffect(() => {
        localStorage.setItem("sidebar-expanded", sidebarExpanded);
        if (sidebarExpanded) {
            document.querySelector("body").classList.add("sidebar-expanded");
        } else {
            document.querySelector("body").classList.remove("sidebar-expanded");
        }
    }, [sidebarExpanded]);

    return (
        <div>
            {/* Sidebar backdrop (mobile only) */}
            <div
                className={`fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
                    sidebarOpen
                        ? "opacity-100"
                        : "opacity-0 pointer-events-none"
                }`}
                aria-hidden="true"
            ></div>

            {/* Sidebar */}
            <div
                id="sidebar"
                ref={sidebar}
                className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-slate-800 p-4 transition-all duration-200 ease-in-out ${
                    sidebarOpen ? "translate-x-0" : "-translate-x-64"
                }`}
            >
                {/* Sidebar header */}
                <div className="flex justify-between pr-3 mb-10 sm:px-2">
                    {/* Close button */}
                    <button
                        ref={trigger}
                        className="lg:hidden text-slate-500 hover:text-slate-400"
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        aria-controls="sidebar"
                        aria-expanded={sidebarOpen}
                    >
                        <span className="sr-only">Close sidebar</span>
                        <svg
                            className="w-6 h-6 fill-current"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
                        </svg>
                    </button>
                    {/* Logo */}
                    <NavLink end href="/" className="block">
                        <div className="overflow-hidden rounded-full bg-slate-100 w-14 h-14">
                            <img src={Logo} width={"50"}
                            className="mx-auto" alt="logo" />
                        </div>
                    </NavLink>
                </div>

                {/* Links */}
                <div className="space-y-8">
                    {/* Pages group */}
                    <div>
                        <h3 className="pl-3 text-xs font-semibold uppercase text-slate-500">
                            <span
                                className="hidden w-6 text-center lg:block lg:sidebar-expanded:hidden 2xl:hidden"
                                aria-hidden="true"
                            >
                                •••
                            </span>
                            <span className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                                Pages
                            </span>
                        </h3>
                        <ul className="mt-3">
                            {/* Dashboard */}
                            <li
                                className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                                    pathname.includes("dashboard") &&
                                    "bg-slate-900"
                                }`}
                            >
                                <NavLink
                                    href="/dashboard"
                                    className={`block text-slate-200 truncate transition duration-150 ${
                                        pathname.includes("dashboard")
                                            ? "hover:text-slate-200"
                                            : "hover:text-white"
                                    }`}
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center grow">
                                            <svg
                                                className="w-6 h-6 shrink-0"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    className={`fill-current ${
                                                        pathname === "/" ||
                                                        pathname.includes(
                                                            "dashboard"
                                                        )
                                                            ? "text-indigo-500"
                                                            : "text-slate-400"
                                                    }`}
                                                    d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z"
                                                />
                                                <path
                                                    className={`fill-current ${
                                                        pathname === "/" ||
                                                        pathname.includes(
                                                            "dashboard"
                                                        )
                                                            ? "text-indigo-600"
                                                            : "text-slate-600"
                                                    }`}
                                                    d="M12 3c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z"
                                                />
                                                <path
                                                    className={`fill-current ${
                                                        pathname === "/" ||
                                                        pathname.includes(
                                                            "dashboard"
                                                        )
                                                            ? "text-indigo-200"
                                                            : "text-slate-400"
                                                    }`}
                                                    d="M12 15c-1.654 0-3-1.346-3-3 0-.462.113-.894.3-1.285L6 6l4.714 3.301A2.973 2.973 0 0112 9c1.654 0 3 1.346 3 3s-1.346 3-3 3z"
                                                />
                                            </svg>
                                            <span className="ml-3 text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100">
                                                Dashboard
                                            </span>
                                        </div>
                                    </div>
                                </NavLink>
                            </li>

                            {/* report */}
                            <li
                                className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                                    pathname.includes("report") &&
                                    "bg-slate-900"
                                }`}
                            >
                                <NavLink
                                    href="/db/report"
                                    className={`block text-slate-200 truncate transition duration-150 ${
                                        pathname.includes("report")
                                            ? "hover:text-slate-200"
                                            : "hover:text-white"
                                    }`}
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center grow">
                                            <Icon
                                                icon="line-md:alert-twotone"
                                                className={
                                                    "w-6 h-6 shrink-0" +
                                                    " " +
                                                    `fill-current ${
                                                        pathname.includes(
                                                            "report"
                                                        )
                                                            ? "text-indigo-500"
                                                            : "text-slate-400"
                                                    }`
                                                }
                                            />
                                            {/* <Icon icon="line-md:alert-twotone" /> */}
                                            <span className="ml-3 text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100">
                                                Report List
                                            </span>
                                        </div>
                                        {/* Badge */}
                                        {jumlah.report > 0
                                            ? badge(jumlah.report)
                                            : ""}
                                    </div>
                                </NavLink>
                            </li>
                            {/* users */}
                            <li
                                className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                                    pathname.includes("users") && "bg-slate-900"
                                }`}
                            >
                                <NavLink
                                    href="/db/users"
                                    className={`block text-slate-200 truncate transition duration-150 ${
                                        pathname.includes("users")
                                            ? "hover:text-slate-200"
                                            : "hover:text-white"
                                    }`}
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center grow">
                                            <Icon
                                                icon="solar:user-id-bold-duotone"
                                                className={
                                                    "w-6 h-6 shrink-0" +
                                                    " " +
                                                    `fill-current ${
                                                        pathname.includes(
                                                            "users"
                                                        )
                                                            ? "text-indigo-500"
                                                            : "text-slate-400"
                                                    }`
                                                }
                                            />
                                            <span className="ml-3 text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100">
                                                Users List
                                            </span>
                                        </div>
                                        {/* Badge */}
                                        {jumlah.user > 0
                                            ? badge(jumlah.user)
                                            : ""}
                                    </div>
                                </NavLink>
                            </li>
                            {/* Store */}

                            {/* Settings */}
                            <SidebarLinkGroup
                                activecondition={pathname.includes("stores")}
                            >
                                {(handleClick, open) => {
                                    return (
                                        <React.Fragment>
                                            <a
                                                href="#0"
                                                className={`block text-slate-200 truncate transition duration-150 ${
                                                    pathname.includes("stores")
                                                        ? "hover:text-slate-200"
                                                        : "hover:text-white"
                                                }`}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    sidebarExpanded
                                                        ? handleClick()
                                                        : setSidebarExpanded(
                                                              true
                                                          );
                                                }}
                                            >
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center">
                                                        <Icon
                                                            icon="ri:store-3-fill"
                                                            className={
                                                                "w-6 h-6 shrink-0" +
                                                                " " +
                                                                `fill-current ${
                                                                    pathname.includes(
                                                                        "stores"
                                                                    )
                                                                        ? "text-indigo-500"
                                                                        : "text-slate-400"
                                                                }`
                                                            }
                                                        />
                                                        <span className="ml-3 text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100">
                                                            Stores
                                                        </span>
                                                    </div>
                                                    {/* Icon */}
                                                    <div className="flex ml-2 shrink-0">
                                                        <svg
                                                            className={`w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${
                                                                open &&
                                                                "rotate-180"
                                                            }`}
                                                            viewBox="0 0 12 12"
                                                        >
                                                            <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </a>
                                            <div className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                                                <ul
                                                    className={`pl-9 mt-1 ${
                                                        !open && "hidden"
                                                    }`}
                                                >
                                                    <li className="mb-1 last:mb-0">
                                                        <NavLink
                                                            end
                                                            href="/db/stores"
                                                            className={({
                                                                isActive,
                                                            }) =>
                                                                "block transition duration-150 truncate " +
                                                                (isActive
                                                                    ? "text-indigo-500"
                                                                    : "text-slate-400 hover:text-slate-200")
                                                            }
                                                        >
                                                            <span className="text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100">
                                                                Stores List
                                                            </span>
                                                            {/* Badge */}
                                                            {jumlah.store > 0
                                                                ? badge(
                                                                      jumlah.store
                                                                  )
                                                                : ""}
                                                        </NavLink>
                                                    </li>
                                                    <li className="mb-1 last:mb-0">
                                                        <NavLink
                                                            end
                                                            href="/db/stores/requests"
                                                            className={({
                                                                isActive,
                                                            }) =>
                                                                "block transition duration-150 truncate " +
                                                                (isActive
                                                                    ? "text-indigo-500"
                                                                    : "text-slate-400 hover:text-slate-200")
                                                            }
                                                        >
                                                            <span className="text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100">
                                                                Store Request
                                                            </span>
                                                            {/* Badge */}
                                                            {jumlah.unvalStore >
                                                            0
                                                                ? badge(
                                                                      jumlah.unvalStore
                                                                  )
                                                                : ""}
                                                        </NavLink>
                                                    </li>
                                                </ul>
                                            </div>
                                        </React.Fragment>
                                    );
                                }}
                            </SidebarLinkGroup>
                        </ul>
                    </div>
                </div>

                {/* Expand / collapse button */}
                <div className="justify-end hidden pt-3 mt-auto lg:inline-flex 2xl:hidden">
                    <div className="px-3 py-2">
                        <button
                            onClick={() => setSidebarExpanded(!sidebarExpanded)}
                        >
                            <span className="sr-only">
                                Expand / collapse sidebar
                            </span>
                            <svg
                                className="w-6 h-6 fill-current sidebar-expanded:rotate-180"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    className="text-slate-400"
                                    d="M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z"
                                />
                                <path
                                    className="text-slate-600"
                                    d="M3 23H1V1h2z"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;

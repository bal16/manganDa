import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div className="flex flex-col items-center min-h-screen pt-6 bg-gray-100 sm:justify-center sm:pt-0">
            <div>
                <Link href="/">
                    <ApplicationLogo className="w-20 h-20 text-gray-500 fill-current" />
                </Link>
            </div>

            <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
                {children}
            </div>
        </div>
        // <div className="min-h-screen bg-gray-100">
//         <nav className="bg-white border-b border-gray-100">
//         <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
//             <div className="flex justify-between h-16">
//                 <div className="flex">
//                     <div className="flex items-center shrink-0">
//                         <Link href="/">
//                             <ApplicationLogo className="block w-auto text-gray-800 fill-current h-9" />
//                         </Link>
//                     </div>

//                     <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
//                         <NavLink
//                             href={route("home")}
//                             active={route().current("home")}
//                         >
//                             Dashboard
//                         </NavLink>
//                     </div>
//                 </div>

//                 <div className="hidden sm:flex sm:items-center sm:ms-6">
//                     <div className="relative ms-3">
//                         <NavLink
//                             href={route("login")}
//                             active={route().current("login")}
//                         >
//                             Login
//                         </NavLink>
//                         <NavLink
//                             href={route("register")}
//                             active={route().current("register")}
//                         >
//                             Register
//                         </NavLink>
//                     </div>
//                 </div>

//                 <div className="flex items-center -me-2 sm:hidden">
//                     <button
//                         onClick={() =>
//                             setShowingNavigationDropdown(
//                                 (previousState) => !previousState
//                             )
//                         }
//                         className="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
//                     >
//                         <svg
//                             className="w-6 h-6"
//                             stroke="currentColor"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                         >
//                             <path
//                                 className={
//                                     !showingNavigationDropdown
//                                         ? "inline-flex"
//                                         : "hidden"
//                                 }
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth="2"
//                                 d="M4 6h16M4 12h16M4 18h16"
//                             />
//                             <path
//                                 className={
//                                     showingNavigationDropdown
//                                         ? "inline-flex"
//                                         : "hidden"
//                                 }
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth="2"
//                                 d="M6 18L18 6M6 6l12 12"
//                             />
//                         </svg>
//                     </button>
//                 </div>
//             </div>
//         </div>

//         <div
//             className={
//                 (showingNavigationDropdown ? "block" : "hidden") +
//                 " sm:hidden"
//             }
//         >
//             <div className="pt-2 pb-3 space-y-1">
//                 <ResponsiveNavLink
//                     href={route("home")}
//                     active={route().current("home")}
//                 >
//                     Home
//                 </ResponsiveNavLink>
//             </div>

//             <div className="pt-4 pb-1 border-t border-gray-200">


//                 <div className="mt-3 space-y-1">
//                     <ResponsiveNavLink href={route("login")}>
//                         Login
//                     </ResponsiveNavLink>
//                     <ResponsiveNavLink href={route("register")}>
//                         Register
//                     </ResponsiveNavLink>

//                 </div>
//             </div>
//         </div>
//     </nav>

//     {header && (
//         <header className="bg-white shadow">
//             <div className="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
//                 {header}
//             </div>
//         </header>
//     )}

//     <main>{children}</main>
// </div>

    );
}

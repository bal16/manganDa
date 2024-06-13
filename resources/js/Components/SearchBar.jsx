import { memo, forwardRef } from "react";
// import React, { forwardRef } from "react";

const SearchBar = forwardRef(({ value, handleChange, handleKeyPress }, ref) => {
    return (
        <div className="mx-auto w-full  px-0">
            <div className="relative mx-auto w-max ">
                <input
                    type="text"
                    name="searchbar"
                    value={value}
                    onChange={handleChange}
                    autoComplete="off"
                    // onChange={handleChange}
                    onKeyDown={handleKeyPress}
                    ref={ref}
                    className="peer cursor-pointer relative z-10 h-12 w-12 rounded-full border bg-transparent pl-12 outline-none border-marshland-950 focus:w-full focus:cursor-text focus:border-marshland-950 focus:pl-16 focus:pr-4 transition-all ease-in-out duration-300 "
                    autoFocus
                />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-marshland-950 px-3.5 peer-focus:border-marshland-600 peer-focus:stroke-marshland-950 transition-all"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
            </div>
        </div>

        // <input
        //     className="w-full px-5 font-light border rounded-full text-start bg-marshland-950 bg-opacity-70 placeholder:text-ecru-white-100 focus:ring-green-yellow-950 focus:border-green-yellow-950 placeholder:font-light text-ecru-white-100 focus:bg-opacity-80"
        //     type="text"
        //     name="searchbar"
        //     value={value}
        //     placeholder="Search"
        //     onChange={handleChange}
        //     onKeyDown={handleKeyPress}
        //     ref={ref}
        // />
    );
});

export default SearchBar;

// export default forwardRef(memo(function SearchBar({value='', handleChange}){
//     return (
//         <input  ref={ref} className="w-full px-5 font-light border rounded-full text-start bg-marshland-950 bg-opacity-70 placeholder:text-ecru-white-100 focus:ring-green-yellow-950 focus:border-green-yellow-950 placeholder:font-light text-ecru-white-100 focus:bg-opacity-80" type="text" name="searchbar" value={value} placeholder="Search" onChange={handleChange} />
//     )
// }
// ))

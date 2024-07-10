import { memo, forwardRef } from "react";

const SearchBar = forwardRef(({ value, handleChange, handleKeyPress }, ref) => {
    return (
        <div className="w-full px-0 mx-auto transition-all">
            <div className="relative grid w-full transition-all">
                <input
                    type="text"
                    name="searchbar"
                    value={value}
                    onChange={handleChange}
                    autoComplete="off"
                    onKeyDown={handleKeyPress}
                    ref={ref}
                    className="relative z-10 w-12 h-12 pl-12 transition-all duration-500 ease-in-out bg-transparent border rounded-full outline-none cursor-pointer peer ms-0 border-marshland-950 focus:w-full focus:cursor-text focus:border-marshland-950 focus:pl-16 focus:pr-4"
                    autoFocus
                />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-marshland-950 px-3.5 peer-focus:border-marshland-600 peer-focus:stroke-marshland-950 transition-all ease-in-out duration-300"
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
    );
});

export default SearchBar;

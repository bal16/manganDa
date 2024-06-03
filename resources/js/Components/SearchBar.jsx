import { memo } from "react"
export default memo(function SearchBar({value='', handleChange}){
    return (
        <input  className="w-full px-5 font-light border rounded-full text-start bg-marshland-950 bg-opacity-70 placeholder:text-ecru-white-100 focus:ring-green-yellow-950 focus:border-green-yellow-950 placeholder:font-light text-ecru-white-100 focus:bg-opacity-80" type="text" name="searchbar" value={value} placeholder="Search" onChange={handleChange} />
    )
}
)

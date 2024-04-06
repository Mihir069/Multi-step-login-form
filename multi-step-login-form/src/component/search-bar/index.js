const SearchBar = () =>{
    return(
        <>
            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none ">
                    <img src="/./svg/magnifying-glass-solid.svg" alt="search" className="w-6" />
                </div>
                <input type="search" id="default-search" class="w-full p-4 ps-10 text-sm text-gray-700 border rounded-lg focus:ring-blue-500 bg-gray-300  " placeholder="Search" />

            </div>
        </>
    )
}
export default SearchBar;
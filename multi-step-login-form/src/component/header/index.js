import { Link } from "react-router-dom";
import Logo from "../logo";
import SearchBar from "../search-bar";

const Header = () => {
    return (
        <>
            <div className="grid grid-col-1 md:grid-cols-12 pt-3 px-7">
                <div className="col-span-4 md:col-span-1 content-center">
                    <div className="float-left">
                        <Logo />
                    </div>
                </div>
                <ul className="flex col-span-8 font-semibold content-center ml-10">
                    <li className="py-5 px-5 ">
                        <Link href="#" className="  text-gray-500 hover:text-blue-500">Inspiration</Link>
                    </li>
                    <li className="py-5 px-5">
                        <Link href="#" className=" text-gray-500 hover:text-blue-700 ">Find Work</Link>
                    </li>
                    <li className="py-5 px-5">
                        <Link href="#" className=" text-gray-500 md:hover:text-blue-700 md:p-0 ">Learn Design</Link>
                    </li>
                    <li className="py-5 px-5">
                        <Link href="#" className="  text-gray-500 md:hover:text-blue-700 md:p-0 ">Go Pro</Link>
                    </li>
                    <li className="py-5 px-5">
                        <Link href="#" className="  text-gray-500 md:hover:text-blue-700 md:p-0 ">Hire Designers</Link>
                    </li>
                </ul>
                <div className=" flex mt-3">
                    <div className="float-right ">
                        <div className="search-bar ">
                            <SearchBar />
                        </div>
                    </div>
                </div>
                <div className="flex">
                    <div className="float-right w-6 ml-5 mt-5">
                        <div >
                            <img src="/./svg/briefcase-solid.svg" alt="brief-case" />
                        </div>
                    </div>
                    <div className="float-right w-6 ml-3 mt-5">
                        <div >
                            <img src="/./svg/user.png" alt="user" />
                        </div>
                    </div>
                    <div className="float-right w-7 ">
                        <div className="mt-3">
                            <button className="bg-pink-500 hover:bg-pink-800 py-2 ml-4 text-center text-white rounded-md w-24">Upload</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header;
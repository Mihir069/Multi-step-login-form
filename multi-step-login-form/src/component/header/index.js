import { Link } from "react-router-dom";
import Logo from "../logo";
import SearchBar from "../search-bar";

const Header = () => {
    return (
        <div className="bg-white ">
            <div className="container mx-auto px-4 md:px-6 py-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="w-28 mr-2">
                            <Logo/>
                        </div>
                        <ul className="hidden md:flex ml-6 space-x-6">
                            <li>
                                <Link to="#" className="text-gray-500 hover:text-pink-500">Inspiration</Link>
                            </li>
                            <li>
                                <Link to="#" className="text-gray-500 hover:text-pink-500">Find Work</Link>
                            </li>
                            <li>
                                <Link to="#" className="text-gray-500 hover:text-pink-500">Learn Design</Link>
                            </li>
                            <li>
                                <Link to="#" className="text-gray-500 hover:text-pink-500">Go Pro</Link>
                            </li>
                            <li>
                                <Link to="#" className="text-gray-500 hover:text-pink-500">Hire Designers</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex items-center">
                        <SearchBar />
                        <div className="ml-4 md:ml-6">
                            <img src="/./svg/briefcase-solid.svg" alt="brief-case" className="w-6 h-6" />
                        </div>
                        <div className="ml-4 md:ml-6">
                            <img src="/./svg/user.png" alt="user" className="w-6 h-6" />
                        </div>
                        <button className="bg-pink-500 hover:bg-pink-800 text-white py-2 px-4 rounded-md hidden md:block ml-4">Upload</button>
                    </div>
                </div>
                <div className="mt-3 md:hidden">
                    <select className="block w-full border border-gray-300 py-2 px-3 rounded-md bg-white text-gray-500">
                        <option value="#">Inspiration</option>
                        <option value="#">Find Work</option>
                        <option value="#">Learn Design</option>
                        <option value="#">Go Pro</option>
                        <option value="#">Hire Designers</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Header;

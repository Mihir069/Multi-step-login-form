import { Link } from "react-router-dom";
import Media from "../social-media";

const Footer = () => {
    return (
        <footer>
            <div className="mx-auto w-full max-w-screen-xl">
                <div className="flex flex-wrap justify-between px-4 py-6 lg:py-8">
                    <div className="w-full md:w-1/4 px-4">
                        <Link to='/'>
                            <img src="/./svg/dribbble-logo.png" alt="logo" className="w-20" />
                        </Link>
                        <h2 className="mt-6 text-gray-500 font-medium">Dribbble is the world's leading community for creative to share,grow and get hired</h2>
                        <div className="flex mt-8">
                            <Media />
                        </div>
                    </div>
                    <div className="w-full md:w-auto px-4">
                        <h2 className="mb-6 text-sm text-gray-900 font-bold">For designers</h2>
                        <ul className="text-gray-600 font-medium">
                            <li className="mb-4">
                                <Link to='/' className="hover:underline">Go Pro!</Link>
                            </li>
                            <li className="mb-4">
                                <Link to='/' className="hover:underline">Explore design work</Link>
                            </li>
                            <li className="mb-4">
                                <Link to='/' className="hover:underline">Design blog</Link>
                            </li>
                            <li className="mb-4">
                                <Link to='/' className="hover:underline">Overtime podcast</Link>
                            </li>
                            <li className="mb-4">
                                <Link to='/' className="hover:underline">playoffs</Link>
                            </li>
                            <li className="mb-4">
                                <Link to='/' className="hover:underline">weekly Warm-up</Link>
                            </li>
                            <li className="mb-4">
                                <Link to='/' className="hover:underline">Refer a Friend</Link>
                            </li>
                            <li className="mb-4">
                                <Link to='/' className="hover:underline">Code of conduct</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full md:w-48 px-4">
                        <h2 className="mb-6 text-sm text-gray-900 font-bold">Hire designers</h2>
                        <ul className="text-gray-600 font-medium">
                            <li className="mb-4">
                                <Link to='/' className="hover:underline">Post a job opening</Link>
                            </li>
                            <li className="mb-4">
                                <Link to='/' className="hover:underline">Post a freelance project</Link>
                            </li>
                            <li className="mb-4">
                                <Link to='/' className="hover:underline">Search for designers</Link>
                            </li>
                            <h2 className="mb-6 text-sm text-gray-900 font-bold">Hire designers</h2>
                            <li className="mb-4">
                                <Link to='/' className="hover:underline">Advertise with us</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full md:w-48  px-4">
                        <h2 className="mb-6 text-sm text-gray-900 font-bold">Company</h2>
                        <ul className="text-gray-600 font-medium">
                            <li className="mb-4">
                                <Link to='/' className="hover:underline">About</Link>
                            </li>
                            <li className="mb-4">
                                <Link to='/' className="hover:underline">Careers</Link>
                            </li>
                            <li className="mb-4">
                                <Link to='/' className="hover:underline">Support</Link>
                            </li>
                            <li className="mb-4">
                                <Link to='/' className="hover:underline">Media Kit</Link>
                            </li>
                            <li className="mb-4">
                                <Link to='/' className="hover:underline">Testimonials</Link>
                            </li>
                            <li className="mb-4">
                                <Link to='/' className="hover:underline">API</Link>
                            </li>
                            <li className="mb-4">
                                <Link to='/' className="hover:underline">Terms of service</Link>
                            </li>
                            <li className="mb-4">
                                <Link to='/' className="hover:underline">Privacy policy</Link>
                            </li>
                            <li className="mb-4">
                                <Link to='/' className="hover:underline">Cookie policy</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full md:w-48 px-4">
                        <h2 className="mb-6 text-sm text-gray-900 font-bold">Directories</h2>
                        <ul className="text-gray-600 font-medium">
                            <li className="mb-4">
                                <Link to='/' className="hover:underline">Design jobs</Link>
                            </li>
                            <li className="mb-4">
                                <Link to='/' className="hover:underline">Designers for hire</Link>
                            </li>
                            <li className="mb-4">
                                <Link to='/' className="hover:underline">freelance designers for hire</Link>
                            </li>
                            <li className="mb-4">
                                <Link to='/' className="hover:underline">About</Link>
                            </li>
                            <li className="mb-4">
                                <Link to='/' className="hover:underline">Tags</Link>
                            </li>
                            <li className="mb-4">
                                <Link to='/' className="hover:underline">Places</Link>
                            </li>
                            <h2 className="mb-6 text-sm text-gray-900 font-bold">Design assets</h2>
                            <li className="mb-4">
                                <Link to='/' className="hover:underline">Dribbble Marketplace</Link>
                            </li>
                            <li className="mb-4">
                                <Link to='/' className="hover:underline">Creative Market</Link>
                            </li>
                            <li className="mb-4">
                                <Link to='/' className="hover:underline">Fontspring</Link>
                            </li>
                            <li className="mb-4">
                                <Link to='/' className="hover:underline">Font Squirrel</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full md:w-44 px-4">
                        <h2 className="mb-6 text-sm text-gray-900 font-bold">Design Resources</h2>
                        <ul className="text-gray-600 font-medium">
                            <li className="mb-4">
                                <Link to='/' className="hover:underline">freelancing</Link>
                            </li>
                            <li className="mb-4">
                                <Link to='/' className="hover:underline">Design Hiring</Link>
                            </li>
                            <li className="mb-4">
                                <Link to='/' className="hover:underline">Design Portfolio</Link>
                            </li>
                            <li className="mb-4">
                                <Link to='/' className="hover:underline">Design Education</Link>
                            </li>
                            <li className="mb-4">
                                <Link to='/' className="hover:underline">Creative Process</Link>
                            </li>
                            <li className="mb-4">
                                <Link to='/' className="hover:underline">Design Industry Trends</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="px-4 py-6 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-700 sm:text-center">© 2023 <Link to='/'>Dribbble</Link>. All Rights Reserved.</span>
                <div className="flex mt-4 sm:justify-center md:mt-0">
                    <p className="text-gray-400 mx-2"><span className="text-gray-700">20,501,853</span> shot dribbbled</p>
                    <img src="/./svg/dribbble-icon-1.svg" alt="dribbble" className="w-5"/>
                </div>
            </div>
        </footer>
    )
}
export default Footer;
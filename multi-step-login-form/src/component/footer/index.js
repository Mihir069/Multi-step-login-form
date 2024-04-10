import { Link } from "react-router-dom";
import Media from "../social-media";

const Footer = () => {
    return (
        <footer className="bg-gray-100">
            <div className="container mx-auto py-8 px-14">
                <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
                    <div className="mb-6 md:mb-0">
                        <Link to='/'>
                            <img src="/./svg/dribbble-logo.png" alt="logo" className="w-20" />
                        </Link>
                        <p className="mt-4 text-gray-500 font-medium">Dribbble is the world's leading community for creatives to share, grow, and get hired.</p>
                        <div className="flex mt-6">
                            <Media />
                        </div>
                    </div>

                    <div className="text-sm text-gray-900 hidden md:block">
                        <h2 className="font-bold mb-4">For designers</h2>
                        <ul className="text-gray-600 font-medium">
                            <li className="mb-3"><Link to='/' className="hover:underline">Go Pro!</Link></li>
                            <li className="mb-3"><Link to='/' className="hover:underline">Explore design work</Link></li>
                            <li className="mb-3"><Link to='/' className="hover:underline">Design blog</Link></li>
                            <li className="mb-3"><Link to='/' className="hover:underline">Overtime podcast</Link></li>
                            <li className="mb-3"><Link to='/' className="hover:underline">Playoffs</Link></li>
                            <li className="mb-3"><Link to='/' className="hover:underline">Weekly Warm-up</Link></li>
                            <li className="mb-3"><Link to='/' className="hover:underline">Refer a Friend</Link></li>
                            <li className="mb-3"><Link to='/' className="hover:underline">Code of Conduct</Link></li>
                        </ul>
                    </div>

                    <div className="text-sm text-gray-900 hidden md:block">
                        <h2 className="font-bold mb-4">Hire designers</h2>
                        <ul className="text-gray-600 font-medium">
                            <li className="mb-3"><Link to='/' className="hover:underline">Post a job opening</Link></li>
                            <li className="mb-3"><Link to='/' className="hover:underline">Post a freelance project</Link></li>
                            <li className="mb-3"><Link to='/' className="hover:underline">Search for designers</Link></li>
                            <li className="mb-3"><Link to='/' className="hover:underline">Advertise with us</Link></li>
                        </ul>
                        <h2 className="font-bold mb-4">Brands</h2>
                        <ul className="text-gray-600 font-medium">
                            <li className="mb-2"><Link to='/' className="hover:underline">Advertise with us</Link></li>
                        </ul>
                    </div>

                    <div className="text-sm text-gray-900 hidden md:block">
                        <h2 className="font-bold mb-4">Company</h2>
                        <ul className="text-gray-600 font-medium">
                            <li className="mb-3"><Link to='/' className="hover:underline">About</Link></li>
                            <li className="mb-3"><Link to='/' className="hover:underline">Careers</Link></li>
                            <li className="mb-3"><Link to='/' className="hover:underline">Support</Link></li>
                            <li className="mb-3"><Link to='/' className="hover:underline">Media Kit</Link></li>
                            <li className="mb-3"><Link to='/' className="hover:underline">Testimonials</Link></li>
                            <li className="mb-3"><Link to='/' className="hover:underline">API</Link></li>
                            <li className="mb-3"><Link to='/' className="hover:underline">Terms of Service</Link></li>
                            <li className="mb-3"><Link to='/' className="hover:underline">Privacy Policy</Link></li>
                            <li className="mb-3"><Link to='/' className="hover:underline">Cookie Policy</Link></li>
                        </ul>
                    </div>

                    <div className="text-sm text-gray-900 hidden md:block">
                        <h2 className="font-bold mb-4">Directories</h2>
                        <ul className="text-gray-600 font-medium">
                            <li className="mb-3"><Link to='/' className="hover:underline">Design jobs</Link></li>
                            <li className="mb-3"><Link to='/' className="hover:underline">Designers for hire</Link></li>
                            <li className="mb-3"><Link to='/' className="hover:underline">Freelance designers for hire</Link></li>
                            <li className="mb-3"><Link to='/' className="hover:underline">About</Link></li>
                            <li className="mb-3"><Link to='/' className="hover:underline">Tags</Link></li>
                            <li className="mb-3"><Link to='/' className="hover:underline">Places</Link></li>
                            
                            <li className="mb-3"><Link to='/' className="hover:underline">Dribbble Marketplace</Link></li>
                            <li className="mb-3"><Link to='/' className="hover:underline">Creative Market</Link></li>
                            <li className="mb-3"><Link to='/' className="hover:underline">Fontspring</Link></li>
                            <li className="mb-3"><Link to='/' className="hover:underline">Font Squirrel</Link></li>
                        </ul>
                        <h2 className="font-bold mt-4 mb-2">Design assets</h2>
                        <ul className="text-gray-600 font-medium">
                            <li className="mb-3"><Link to='/' className="hover:underline">Dribbble Marketplace</Link></li>
                            <li className="mb-3"><Link to='/' className="hover:underline">Creative Market</Link></li>
                            <li className="mb-3"><Link to='/' className="hover:underline">Fontspring</Link></li>
                            <li className="mb-3"><Link to='/' className="hover:underline">Font Squirrel</Link></li>
                        </ul>
                    </div>
                    
                    
                    <div className="text-sm text-gray-900 hidden md:block">
                        <h2 className="font-bold mb-4">Design Resources</h2>
                        <ul className="text-gray-600 font-medium">
                            <li className="mb-3"><Link to='/' className="hover:underline">Freelaning</Link></li>
                            <li className="mb-3"><Link to='/' className="hover:underline">Design Hiring</Link></li>
                            <li className="mb-3"><Link to='/' className="hover:underline">Design Portfolio</Link></li>
                            <li className="mb-3"><Link to='/' className="hover:underline">Design Education</Link></li>
                            <li className="mb-3"><Link to='/' className="hover:underline">Creative Process</Link></li>
                            <li className="mb-3"><Link to='/' className="hover:underline">Design Industry Trends</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bg-gray-200 px-4 py-4 flex justify-between items-center">
                <span className="text-sm text-gray-700">© 2023 <Link to='/'>Dribbble</Link>. All rights reserved.</span>
                <div className="flex items-center">
                    <p className="text-gray-500 mx-2"><span className="font-bold">20,501,853</span> shots dribbbled</p>
                    <img src="/./svg/dribbble-icon-1.svg" alt="dribbble" className="w-5" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;

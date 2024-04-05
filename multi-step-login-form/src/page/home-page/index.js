import { Link } from "react-router-dom";
import Logo from "../../component/logo";

const Home = () => {
    return (
        <>
            <div className="grid grid-col-1 md:grid-cols-12 pt-10 px-10">
                <div className="col-span-4 md:col-span-1 content-center">
                    <div className="float-left">
                        <Logo />
                    </div>
                </div>


                <ul className="flex col-span-10 font-semibold content-center">
                    <li className="py-2 px-5 ">
                        <Link href="#" className="  text-gray-500 hover:text-blue-500">Inspiration</Link>
                    </li>
                    <li className="py-2 px-5">
                        <Link href="#" className=" text-gray-500 hover:text-blue-700 ">Find Work</Link>
                    </li>
                    <li className="py-2 px-5">
                        <Link href="#" className=" text-gray-500 md:hover:text-blue-700 md:p-0 ">Learn Design</Link>
                    </li>
                    <li className="py-2 px-5">
                        <Link href="#" className="  text-gray-500 md:hover:text-blue-700 md:p-0 ">Go Pro</Link>
                    </li>
                    <li className="py-2 px-5">
                        <Link href="#" className="  text-gray-500 md:hover:text-blue-700 md:p-0 ">Hire Designers</Link>
                    </li>
                </ul>


            </div>
        </>
    )
}
export default Home;
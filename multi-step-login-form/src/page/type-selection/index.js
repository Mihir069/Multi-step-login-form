import { useNavigate} from "react-router-dom";
import Logo from "../../component/logo";
const TypeSelection = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(-1)
    }
    const handleClickButton = () => {
        navigate(`/home`)
    }
    return (
        <>
            <div className="grid grid-col-1 md:grid-cols-12 pt-10 px-10">
                <div className="col-span-4 md:col-span-1 content-center">
                    <div className="float-left">
                        <Logo />
                    </div>
                </div>
                <div className="col-span-4 md:col-span-1 mx-6 py-2 pl-7 hover:bg-slate-200 cursor-pointer " onClick={handleClick}>
                    <img src="/./svg/angle-left-solid.svg" alt="left-arrrow" className=" max-w-4" />
                </div>
            </div>

            <div className="mx-auto max-w-7xl mt-10 p-4">
                <div className="block my-6 text-center">
                    <h2 className="text-3xl text-[#060606] font-bold">What brings you to dribbble?</h2>
                    <p className="mt-2 text-[#757575]">Select the option that describe you. Don't worry, you can explore other option later.</p>
                </div>
                <form >
                    <div className="flex mt-16">
                        <div className="max-w-sm rounded border overflow-hidden shadow-lg m-5">
                            <div className="px-6 py-4">
                                <img src="/./svg/choice-logo-1.png" alt="logo" className="max-w-80" />
                                <p className="text-gray-700  font-bold text-2xl text-center">
                                    I'm a designer looking to share my work
                                </p>
                                <div className="w-full">
                                    <input type="checkbox" className="rounded-full mx-32 my-4 p-3 accent-pink-700" />
                                </div>

                            </div>
                        </div>
                        <div className="max-w-sm rounded border overflow-hidden shadow-lg m-5">
                            <div className="px-6 py-4">
                                <img src="/./svg/choice-logo-2.png" alt="logo" className="max-w-80" />
                                <p className="text-gray-700  font-bold text-2xl text-center">
                                    I'm a looking to hire a designer
                                </p>
                                <div className="w-full">
                                    <input type="checkbox" className="rounded-full mx-32 my-4 p-3 accent-pink-700" />
                                </div>
                            </div>
                        </div>
                        <div className="max-w-sm rounded border overflow-hidden shadow-lg m-5">
                            <div className="px-6 py-4">
                                <img src="/./svg/choice-logo-3.png" alt="logo" className="max-w-80" />
                                <p className="text-gray-700  font-bold text-2xl text-center">
                                    I'm looking for design inspiration
                                </p>
                                <div className="w-full">
                                    <input type="checkbox" className="rounded-full mx-32 my-4 p-3 accent-pink-700" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" flex my-10 justify-center "onClick={handleClickButton}>
                        <button className="bg-pink-500 hover:bg-pink-800 py-3 text-white rounded-md w-64" >Next</button>
                    </div>
                </form>

            </div>
        </>
    )
}
export default TypeSelection;
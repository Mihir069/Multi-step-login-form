import Logo from "../../component/logo";

const TypeSelection = () =>{
    return(
        <>
        <div className="grid grid-col-1 md:grid-cols-12 pt-10 px-10">
            <div className="col-span-4 md:col-span-1">
                <div className="float-left">
                    <Logo/>
                </div>
            </div>
            <div className="col-span-4 md:col-span-1">
                <div className="float-left">
                    
                </div>
            </div>
        </div>
        <div className="mx-auto max-w-xl p-4">
            <div className="block my-6">
                <h2 className="text-3xl text-[#060606] font-bold">What brings you to dribbble?</h2>
                <p className="mt-2 text-[#757575]">Select the option that describe you. Don't worry, you can explore other option later.</p>
            </div>
        </div>
        </>
    )
}
export default TypeSelection;
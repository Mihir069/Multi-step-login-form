import { Link } from "react-router-dom";

const SignInFrom = () => {

    return (
        <>
            <div className="text-sm font-semibold ">
                <h6 className="float-right mx-10 my-5">
                    Already a member? <Link to="/" className="text-blue-500">Sign In</Link>
                </h6>

            </div>
            <div className=" mx-auto w-full max-w-sm mt-10">
                <h2 className="text-2xl text-[#060606] font-bold justify-start">Sign up to Dribbble</h2>
            </div>

            <div className="mt-4 mx-auto w-full max-w-sm">
                <form  >
                    <div className={`grid grid-cols-2 gap-5 `}>
                        <div className="my-5 block">
                            <label htmlFor="text" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
                            <input type="text" placeholder="name" className="mt-1 w-full px-3 py-2 bg-gray-200 border-slate-300 rounded-md text-sm placeholder-slate-400  invalid:bg-red-500" />
                        </div>
                        <div className="my-5 block">
                            <label htmlFor="text" className="block text-sm font-medium leading-6 text-gray-900">Username</label>
                            <input type="text" placeholder="username" className="mt-1 w-full px-3 py-2 bg-gray-200 border-slate-300 rounded-md text-sm placeholder-slate-400  invalid:bg-red-500" />
                           
                        </div>
                    </div>
                    <div className="my-5 block">
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
                        <input type="email" placeholder="Email" className="mt-1 w-full px-3 py-2 bg-gray-200 border-slate-300 rounded-md text-sm placeholder-slate-400  invalid:bg-red-300" />
                      
                    </div>
                    <div className="my-5">
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                        <input type="password" placeholder="6+ characters" className="mt-1 w-full px-3 py-2 bg-gray-200 border-slate-300 rounded-md text-sm placeholder-slate-400  invalid:bg-red-200"/>
                      
                    </div>
                    <div className="my-5">
                        <input type="checkbox" className="border border-gray-400 cursor-pointer" required />
                        <span className="mx-3">
                            Creating an account means you're okay with our <Link to="/" className="text-blue-500 font-semibold">Terms of Service</Link>,<Link to="/" className="text-blue-500 font-semibold">Privacy Policy</Link> and our default <Link to="/" className="text-blue-500 font-semibold">Settings</Link>.
                        </span>
                    </div>
                    <div className="mt-5">
                        <button className=" bg-pink-500 hover:bg-pink-800 py-3 text-center text-white rounded-md w-2/4">Create Account</button>
                    </div>
                    <span className="text-xs block text-gray-500 w-80 mt-4 ">
                        This site is protected by reCAPTCHA and the Google <Link to="/" className="text-blue-500 font-semibold">Privacy Policy</Link> and <Link to="/" className="text-blue-500 font-semibold">Terms of Service</Link> apply
                    </span>
                </form>

            </div>
        </>
    )
}
export default SignInFrom;
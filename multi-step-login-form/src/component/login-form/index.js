import { Link } from "react-router-dom";

const LoginForm = () =>{
    return (
        <>
        <div class="text-sm font-semibold ">
            <h6 className="float-left mx-10 my-5">
                New Member? <Link to="/" class="text-blue-500">Sign Up</Link>
            </h6>
            
        </div>
        <div className="mt-10 mx-auto w-full max-w-sm">
            <h2 className="text-2xl text-[#060606] font-bold justify-start">Sign in to Dribbble</h2>
        </div>
        
        <div className="mt-10 mx-auto w-full max-w-sm">
            <form action="#">
                <div className="grid grid-cols-2 gap-5">
                    <div className="my-5 block">
                        <label htmlFor="text" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
                        <input type="text" placeholder="name" className="mt-1 w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm placeholder-slate-400  invalid:bg-pink-500"/>
                    </div>
                    <div className="my-5 block">
                        <label htmlFor="text" className="block text-sm font-medium leading-6 text-gray-900">Username</label>
                        <input type="text" placeholder="username" className="mt-1 w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm placeholder-slate-400  invalid:bg-pink-500" />
                    </div>
                </div>
                <div className="my-5 block">
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
                    <input type="email" placeholder="Email" className="mt-1 w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm placeholder-slate-400  invalid:bg-pink-500"/>
                </div>
                <div className="my-5">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                    <input type="password" placeholder="6+ characters" className="mt-1 w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm placeholder-slate-400  invalid:bg-pink-500"/>
                </div>
                <div className="my-5">
                    <input type="checkbox" className="border border-gray-400 cursor-pointer" />
                    <span className="mx-3">
                        Creating an account means you're okay with out <a href="#" class="text-blue-500 font-semibold">Terms of Service</a>,<a href="#" class="text-blue-500 font-semibold">Privacy Policy</a> and our default <a href="#" class="text-blue-500 font-semibold">Settings</a>.
                    </span>
                </div>
                <div class="mt-5">
                    <button class=" bg-pink-500 hover:bg-pink-800 py-3 text-center text-white rounded-md w-2/4">Login</button>
                </div>
                <span className="text-xs block text-gray-500 w-80 mt-4 ">
                    This site is protected by reCAPTCHA and the Google <a href="#" class="text-blue-500 font-semibold">Privacy Policy</a> and <a href="#" class="text-blue-500 font-semibold">Terms of Service</a> apply
                </span>
            </form>
            
        </div>
        </>
    )
}
export default LoginForm;
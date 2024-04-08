import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUpForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        password: ''
    });
    const [isUsernameTaken, setUserNameTaken] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [submitError, setSubmitError] = useState(false);
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        
        setFormData({
            ...formData,
            [name]: value
        });

        if (name === "username" && value === formData.name) {
            setUserNameTaken(true);
        } else {
            setUserNameTaken(false);
        }
        setSubmitError(false);
    };

    const handlePassword = (e) => {
        const { name, value } = e.target;
        if (name === "password") {
            if (value !== '' && value.length < 6) {
                setPasswordError(true);
            } else {
                setPasswordError(false);
            }
        }
        setFormData({
            ...formData,
            [name]: value
        });
        setSubmitError(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name === '' || formData.username === '' || formData.password === '') {
            setSubmitError(true);
        }

        else if(formData.password.length<6){
            setPasswordError(true)
        }
        else if(formData.username === formData.name){
            setUserNameTaken(true)
            return
        }
        else{
            navigate('/signup/createprofile')
        }
    };

    return (
        <>
            <div className="text-sm font-semibold">
                <h6 className="float-right mx-10 my-5">
                    Already a member? <Link to="/" className="text-blue-500">Sign In</Link>
                </h6>
            </div>
            <div className="mx-auto w-full max-w-sm mt-2">
                <h2 className="text-2xl text-[#060606] font-bold justify-start">Sign up to Dribbble</h2>
                {isUsernameTaken && (
                    <p className="text-red-500 text-sm mt-5 ml-1 relative">
                        <span className="absolute top-0 left-0 h-2 w-2 bg-red-500 rounded-full mr-1"></span>
                        <span className="absolute -top-1.5 left-3">Username has already been taken</span>
                    </p>
                )}
                {passwordError && (
                    <p className="text-red-500 text-sm mt-5 ml-1 relative">
                        <span className="absolute top-5 left-0 h-2 w-2 bg-red-500 rounded-full mr-1"></span>
                        <span className="absolute top-3.5 left-3">Password should be at least 6 characters long</span>
                    </p>
                )}
                {submitError && (
                    <p className="text-red-500 text-sm mt-5 ml-1 relative">
                        <span className="absolute top-5 left-0 h-2 w-2 bg-red-500 rounded-full mr-1"></span>
                        <span className="absolute top-3.5 left-3">Form cannot be blank</span>
                    </p>
                )}
            </div>

            <div className="mt-4 mx-auto w-full max-w-sm ">
                <form onSubmit={handleSubmit}>
                    <div className={`grid grid-cols-2 gap-5`}>
                        <div className="my-5 block">
                            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Name"
                                className="mt-1 w-full px-3 py-2 bg-gray-200 border-slate-300 rounded-md font-medium text-sm placeholder-slate-400"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="my-5 block">
                            <div className="flex">
                                {isUsernameTaken && (
                                    <img
                                        src="/./svg/triangle-exclamation-solid.svg"
                                        alt="Warning sign"
                                        className=" w-4"
                                    />
                                )}
                                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">Username</label>
                            </div>

                            <input
                                type="text"
                                id="username"
                                name="username"
                                placeholder="Username"
                                className={`mt-1 w-full px-3 py-2 bg-gray-200 border-slate-300 rounded-md font-medium text-sm placeholder-slate-400 ${isUsernameTaken ? 'bg-red-200 text-red-500' : ''}`}
                                value={formData.username}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="my-5 block">
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
                        <input
                            type="email"
                            placeholder="Email"
                            className="mt-1 w-full px-3 py-2 bg-gray-200 border-slate-300 rounded-md text-sm placeholder-slate-400 invalid:bg-red-200"
                        />
                    </div>
                    <div className="my-5">
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="6+ characters"
                            className={`mt-1 w-full px-3 py-2 bg-gray-200 border-slate-300 rounded-md text-sm placeholder-slate-400 ${passwordError ? 'bg-red-200' : ''}`}
                            value={formData.password}
                            onChange={handlePassword}
                        />
                    </div>
                    <div className="my-5">
                        <input type="checkbox" className="border border-gray-400 cursor-pointer" />
                        <span className="mx-3">
                            Creating an account means you're okay with our <Link to="/" className="text-blue-500 font-semibold">Terms of Service</Link>, <Link to="/" className="text-blue-500 font-semibold">Privacy Policy</Link> and our default <Link to="/" className="text-blue-500 font-semibold">Settings</Link>.
                        </span>
                    </div>
                    <div className="mt-5">
                        <button className="bg-pink-500 hover:bg-pink-800 py-3 text-center text-white rounded-md w-2/4">Create Account</button>
                    </div>
                    <span className="text-xs block text-gray-500 w-80 mt-4">
                        This site is protected by reCAPTCHA and the Google <Link to="/" className="text-blue-500 font-semibold">Privacy Policy</Link> and <Link to="/" className="text-blue-500 font-semibold">Terms of Service</Link> apply
                    </span>
                </form>
            </div>
        </>
    )
}

export default SignUpForm;

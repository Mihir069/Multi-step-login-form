import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUpForm = () => {

    const [isUsernameTaken, setUserNameTaken] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [submitError, setSubmitError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [isValid,setIsValid] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        password: ''
    });
    const [blur,setBlur] = useState({
        name:false,
        username:false,
        email:false,
        password:false
    })
    const navigate = useNavigate();

    const handleEmailValidate = (email) => {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    };

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

    const handleEmail = (e) => {
        const { name, value } = e.target;
        if (name === "email") {
            if (value !== '' && !handleEmailValidate(value)) {
                setEmailError(true);
            } else {
                setEmailError(false);
            }
        }
        setFormData({
            ...formData,
            [name]: value
        });
        setSubmitError(false);
    };

    const handleBlur = (e) =>{
        const {name,value} = e.target;
        setBlur({
            ...blur,
            [name]:true
        })
        if(value.trim() ===''){
            switch(name){
                case 'name':
                    setSubmitError(true);
                    break;
                case 'username':
                    setSubmitError(true);
                    break;
                case 'email':
                    setSubmitError(true);
                    break;
                case 'password':
                    setSubmitError(true);
                    break;
                default:
                    break;
            }
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, username, email, password } = formData;
        let formErrors = {};

        if (!name) formErrors.name = true;
        if (!username) formErrors.username = true;
        if (!email) formErrors.email = true;
        if (!password) formErrors.password = true;
        setSubmitError(Object.keys(formErrors).length > 0);

        const hasErrors = Object.keys(formErrors).length > 0;
        const isValid = !hasErrors && !isUsernameTaken && !passwordError && !emailError;

        if (isValid) {
            navigate('/signup/createprofile');
        } else {
            setIsValid(false);
        }
    };


    return (
        <>
            <div className="text-sm font-semibold">
                <h6 className="float-right mx-10 my-5">
                    Already a member? <Link to="/" className="text-blue-500">Sign In</Link>
                </h6>
            </div>
            <div className="mx-auto w-full max-w-sm">
                <h2 className="text-2xl text-[#060606] font-bold justify-start">Sign up to Dribbble</h2>
                {isUsernameTaken && (
                    <p className="text-red-500 text-sm mt-5 ml-1 relative">
                        <span className="absolute -top-3.5 left-0 h-2 w-2 bg-red-500 rounded-full mr-1"></span>
                        <span className="absolute -top-5 left-3">Username has already been taken</span>
                    </p>
                )}
            </div>

            <div className="mt-4 mx-auto w-full max-w-sm ">
                <form onSubmit={handleSubmit} noValidate>
                    <div className={`grid grid-cols-2 gap-5`}>
                        <div className="my-5 block">
                            <div className="flex">
                                {submitError && (
                                    <img
                                        src="/./svg/triangle-exclamation-solid.svg"
                                        alt="Warning sign"
                                        className=" w-4"
                                    />
                                )}
                                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
                            </div>
                            
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Name"
                                className={`mt-1 w-full px-3 py-2 bg-gray-200 border-slate-300 rounded-md font-medium text-sm placeholder-slate-400 ${submitError && !formData.name ? 'bg-red-200 text-red-500' : ''}`}
                                value={formData.name}
                                onChange={handleChange}
                                // onBlur={handleBlur}
                            />
                            {submitError && !formData.name && (
                                <p className="text-red-500 text-sm mt-1 ml-1">Name cannot be blank</p>
                            )}
                        </div>
                        <div className="my-5 block">
                            <div className="flex">
                                {isUsernameTaken || (submitError && !formData.username)? (
                                    <img
                                        src="/./svg/triangle-exclamation-solid.svg"
                                        alt="Warning sign"
                                        className=" w-4"
                                    />
                                ):''}
                                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">Username</label>
                            </div>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                placeholder="Username"
                                className={`mt-1 w-full px-3 py-2 bg-gray-200 border-slate-300 rounded-md font-medium text-sm placeholder-slate-400 ${isUsernameTaken ||(submitError && !formData.username) ? 'bg-red-200 text-red-500' : ''}`}
                                value={formData.username}
                                onChange={handleChange}
                                // onBlur={handleBlur}

                            />
                            {submitError && !formData.username && (
                                <p className="text-red-500 text-sm mt-1 ml-1">Username cannot be blank</p>
                            )}
                        </div>
                    </div>
                    <div className="my-5 block">
                        <div className="flex">
                            {emailError||(submitError && !formData.email)? (
                                <img
                                    src="/./svg/triangle-exclamation-solid.svg"
                                    alt="Warning sign"
                                    className=" w-4"
                                />
                            ):''}
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
                        </div>
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            className={`mt-1 w-full px-3 py-2 bg-gray-200 border-slate-300 rounded-md text-sm placeholder-slate-400 ${emailError ||(submitError && !formData.email) ? 'bg-red-200' : ''}`}
                            value={formData.email}
                            onChange={handleEmail}
                            // onBlur={handleBlur}
                        />
                        {submitError && !formData.email && (
                            <p className="text-red-500 text-sm mt-1 ml-1">Email cannot be blank</p>
                        )}
                        {emailError && (
                            <p className="text-red-500 text-sm mt-5 ml-1 relative">
                                <span className="absolute -top-3 left-0 h-2 w-2 bg-red-500 rounded-full mr-1"></span>
                                <span className="absolute -top-5 left-3">Invalid email format</span>
                            </p>
                        )}
                    </div>
                    <div className="my-5 block">
                        <div className="flex">
                            {passwordError ||(submitError && !formData.password)? (
                                <img
                                    src="/./svg/triangle-exclamation-solid.svg"
                                    alt="Warning sign"
                                    className=" w-4"
                                />
                            ):''}
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                        </div>
                        <input
                            type="password"
                            name="password"
                            placeholder="6+ characters"
                            className={`mt-1 w-full px-3 py-2 bg-gray-200 border-slate-300 rounded-md text-sm placeholder-slate-400 ${passwordError ||(submitError && !formData.password) ? 'bg-red-200' : ''}`}
                            value={formData.password}
                            onChange={handlePassword}
                            // onBlur={handleBlur}
                        />
                        {submitError && !formData.password && (
                            <p className="text-red-500 text-sm mt-1 ml-1">Password cannot be blank</p>
                        )}
                        {passwordError && (
                            <p className="text-red-500 text-sm mt-5 ml-1 relative">
                                <span className="absolute -top-3 left-0 h-2 w-2 bg-red-500 rounded-full mr-1"></span>
                                <span className="absolute -top-5 left-3">Password should have at least 6 characters</span>
                            </p>
                        )}

                    </div>
                    <div className="my-5">
                        <input type="checkbox" className="border border-gray-400 cursor-pointer" />
                        <span className="mx-3">
                            Creating an account means you're okay with our <Link to="/" className="text-blue-500 font-semibold">Terms of Service</Link>, <Link to="/" className="text-blue-500 font-semibold">Privacy Policy</Link> and our default <Link to="/" className="text-blue-500 font-semibold">Settings</Link>.
                        </span>
                    </div>
                    <div className="mt-5">
                        <button className="bg-pink-500 hover:bg-pink-800 py-3 text-center text-white rounded-md w-2/4" onClick={handleSubmit}>Create Account</button>
                    </div>
                    <span className="text-xs block text-gray-500 w-80 mt-4">
                        This site is protected by reCAPTCHA and the Google <Link to="/" className="text-blue-500 font-semibold">Privacy Policy</Link> and <Link to="/" className="text-blue-500 font-semibold">Terms of Service</Link> apply
                    </span>
                </form>
            </div>
        </>
    );
};

export default SignUpForm;

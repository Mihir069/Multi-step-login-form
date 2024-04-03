import { useState } from "react";
import { Link } from "react-router-dom";

const SignInFrom = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email,setEmail] = useState("")
    const [name,setname] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [formSuccess,setFormSuccess] = useState(false);
    const [formError,setFormError] = useState(false);


    const isRequired = (value) => value.trim() !== '';
    const isBetween = (length, min, max) => length >= min && length <= max;
    const isPasswordSecure = (password) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
        return regex.test(password);
    };
    const checkUsername = () => {
        const trimmedUsername = username.trim();

        if (!isRequired(trimmedUsername)) {
            setUsernameError('Username cannot be blank.');
            return false;
        } else if (!isBetween(trimmedUsername.length, 3, 25)) {
            setUsernameError('Username must be between 3 and 25 characters.');
            return false;
        } else {
            setUsernameError('');
            return true;
        }
    };
    const checkPassword = () => {
        const trimmedPassword = password.trim();

        if (!isRequired(trimmedPassword)) {
            setPasswordError('Password cannot be blank.');
            return false;
        } else if (!isPasswordSecure(trimmedPassword)) {
            setPasswordError('Password must have at least 8 characters that include at least 1 lowercase character, 1 uppercase character, 1 number, and 1 special character (!@#$%^&*)');
            return false;
        } else {
            setPasswordError('');
            return true;
        }
    };
    const renderError = (field) => {
        if (field === 'username' && usernameError) {
            return <span className="text-red-500">{usernameError}</span>;
        } else if (field === 'password' && passwordError) {
            return <span className="text-red-500">{passwordError}</span>;
        }
        return null;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isUsernameValid = checkUsername();
        const isPasswordValid = checkPassword();
        const formData = {
            name:name,
            username:username,
            email:email,
            password:password
        }
        if (isUsernameValid && isPasswordValid) {
            fetch(`http://localhost:3001/userdb`,{
                method: 'POST',
                headers:{
                    "content-Type" : "application/json"
                },
                body : JSON.stringify(formData)
            })
                .then((res) => res.json())
                .then((data)=>{
                    if(data.status === 'success'){
                        setFormSuccess(true)
                        console.log("Registered Successfully")
                    }else{
                        setFormError(true)
                    }
                })
                .catch((error) => {
                    console.error("Error:", error);
                    setFormError(true);
                });
        }
    };
    return (
        <>
            <div class="text-sm font-semibold ">
                <h6 className="float-right mx-10 my-5">
                    Already a member? <Link to="/login" class="text-blue-500">Sign In</Link>
                </h6>

            </div>
            <div className=" mx-auto w-full max-w-sm">
                <h2 className="text-2xl text-[#060606] font-bold justify-start">Sign up to Dribbble</h2>
            </div>

            <div className="mt-4 mx-auto w-full max-w-sm">
            <form action="#" onSubmit={handleSubmit}>
                <div className={`grid grid-cols-2 gap-5 ${usernameError ? 'error' : ''}`}>
                    <div className="my-5 block">
                        <label htmlFor="text" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
                        <input type="text" placeholder="name" className="mt-1 w-full px-3 py-2 bg-gray-200 border-slate-300 rounded-md text-sm placeholder-slate-400  invalid:bg-red-500" value={name} onChange={(e) => setname(e.target.value)}/>
                    </div>
                    <div className="my-5 block">
                        <label htmlFor="text" className="block text-sm font-medium leading-6 text-gray-900">Username</label>
                        <input type="text" placeholder="username" className="mt-1 w-full px-3 py-2 bg-gray-200 border-slate-300 rounded-md text-sm placeholder-slate-400  invalid:bg-red-500" value={username} onChange={(e) => setUsername(e.target.value)} />
                        {renderError('username')}
                    </div>
                </div>
                <div className="my-5 block">
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
                    <input type="email" placeholder="Email" className="mt-1 w-full px-3 py-2 bg-gray-200 border-slate-300 rounded-md text-sm placeholder-slate-400  invalid:bg-red-300" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    {renderError('email')}
                </div>
                <div className="my-5">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                    <input type="password" placeholder="6+ characters" className="mt-1 w-full px-3 py-2 bg-gray-200 border-slate-300 rounded-md text-sm placeholder-slate-400  invalid:bg-red-200" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    {renderError('password')}
                </div>
                <div className="my-5">
                    <input type="checkbox" className="border border-gray-400 cursor-pointer" required />
                    <span className="mx-3">
                        Creating an account means you're okay with our <Link to="/" class="text-blue-500 font-semibold">Terms of Service</Link>,<Link to="/" class="text-blue-500 font-semibold">Privacy Policy</Link> and our default <Link to="/" class="text-blue-500 font-semibold">Settings</Link>.
                    </span>
                </div>
                <div class="mt-5">
                    <button class=" bg-pink-500 hover:bg-pink-800 py-3 text-center text-white rounded-md w-2/4">Create Account</button>
                </div>
                <span className="text-xs block text-gray-500 w-80 mt-4 ">
                    This site is protected by reCAPTCHA and the Google <Link to="/" class="text-blue-500 font-semibold">Privacy Policy</Link> and <Link to="/" class="text-blue-500 font-semibold">Terms of Service</Link> apply
                </span>
            </form>

            </div>
        </>
    )
}
export default SignInFrom;
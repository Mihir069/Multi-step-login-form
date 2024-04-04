import LoginBanner from "../../component/login-banner";
import LoginForm from "../../component/login-form";

const LoginPage = () => {
    return (
        <>
            <div className="log-in w-full min-h-screen flex flex-col md:flex-row-reverse">
                <div className="relative w-full md:w-1/2 flex flex-col justify-center items-center bg-gray-900 ">
                    <div className="absolute top-[20%] left-[10%] flex flex-col">
                        <h1 className="text-4xl text-white font-bold my-4 text-center md:text-left">Discover the world's top Designer & Creatives.</h1>
                        <span className="text-2xl text-white font-bold my-4 mx-5 text-end font-mono">dribble</span>
                    </div>
                    <LoginBanner />
                </div>
                <div className="w-full md:w-1/2 h-full flex flex-col">
                    <LoginForm />
                </div>
            </div>
        </>
    );
};

export default LoginPage;

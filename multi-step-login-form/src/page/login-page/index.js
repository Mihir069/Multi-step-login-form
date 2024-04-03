import LoginBanner from "../../component/login-banner"
import LoginForm from "../../component/login-form";

const LoginPage = () => {

    return (
        <>
            <div className=" log-in w-full h-screen flex flex-row-reverse ">
                <div className="relative w-1/2 h-full flex flex-col ">
                    <div className="absolute top-[20%] left-[10%] flex flex-col">
                        <h1 className="text-4xl text-white font-bold my-4"> Discover the world's top Designer & Creatives.</h1>
                        <span className="text-2xl text-white font-bold my-4 mx-5 text-end font-mono ">dribble</span>
                    </div>
                    <LoginBanner />
                </div>
                <div className="w-10/12 h-full flex flex-col">
                    <LoginForm />
                </div>
            </div>
        </>


    )
}
export default LoginPage;
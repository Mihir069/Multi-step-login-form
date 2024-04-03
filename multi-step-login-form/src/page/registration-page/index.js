import LoginBanner from "../../component/login-banner"
import SignInFrom from "../../component/sign-form";

const RegistrationPage = () => {

    return (
        <>
            <div className=" sign-in w-full h-screen flex ">
                <div className="relative w-1/2 h-full flex flex-col">
                    <div className="absolute top-[20%] left-[10%] flex flex-col">
                        <h1 className="text-4xl text-white font-bold my-4"> Discover the world's top Designer & Creatives.</h1>
                    </div>
                    <LoginBanner />
                </div>
                <div className="w-10/12 h-full flex flex-col">
                    <SignInFrom />
                </div>
            </div>
        </>


    )
}
export default RegistrationPage;
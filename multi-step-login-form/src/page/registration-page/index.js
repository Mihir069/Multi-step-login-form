import SignUpForm from "../../component/signup-form";
import SignBanner from "../../component/signup-banner";

const RegistrationPage = () => {

    return (
        <>
            <div className="sign-in w-full min-h-screen flex flex-col md:flex-row">
                <div className="relative w-full md:w-1/2 flex flex-col justify-center items-center">
                    <div className="absolute top-[20%] left-[10%] flex flex-col">
                        <span className="my-4">
                            <img src="/./svg/dribbble.png" alt="logo" className="w-1/4 hidden md:block"/>
                        </span>
                        <h1 className="text-4xl text-white font-bold my-4 text-center hidden md:block">Discover the world's top Designer & Creatives.</h1>
                        
                    </div>
                    <SignBanner />
                </div>
                <div className="w-full h-full flex flex-col ">
                    <SignUpForm />
                </div>
            </div>
        </>
    );
};

export default RegistrationPage;

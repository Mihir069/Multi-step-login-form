import Footer from "../../component/footer";
import Header from "../../component/header";
import { Link } from "react-router-dom";
const ConfirmationPage = () => {
    return (
        <>
            <div className="mt-1">
                <Header />
            </div>
            <div className="main text-center mt-3">
                <div className="mx-auto max-w-2xl p-4">
                    <div className="flex flex-col my-10 items-center">
                        <h2 className="text-3xl text-gray-900 font-bold">Please verify your email...</h2>
                        <div className="w-28 mt-3">
                            <img src="/./svg/envelope-solid.svg" alt="envelope"/>
                        </div>
                        <p className="mt-2 text-gray-400 font-semibold">Please verify your email address. We've sent a confirmation email to:</p>
                        <p className="mt-2 text-gray-900 font-bold">account@refero.design</p>
                        <p className="mt-2 text-gray-400 font-semibold">Click the confirmation link in that email to begin using Dribbble</p>
                        <div className="mt-3">
                            <p className="text-gray-400 font-semibold">Didn't receive the email? Check your Spam folder,it may have been caught by a filter. If</p>
                            <p className="text-gray-400 font-semibold">you still don't see it, you can <Link to='/' className="text-pink-600 ">resend the confirmation email.</Link> </p>
                        </div>
                        <div className="mt-3">
                            <p className="text-gray-400 font-semibold">Wrong email address? <Link to="/" className="text-pink-600">Change it</Link></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-11">
                <Footer/>
            </div>
            
        </>

    )
}
export default ConfirmationPage;
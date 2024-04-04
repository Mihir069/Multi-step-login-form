import { useState } from 'react';
import UploadImg from '../../component/upload-img';
import Logo from '../../component/logo';
const CreateProfile = () => {
    return (
        <>
                <div className="m-7 p-4 w-40">
                    <div className="float-left ">
                        <Logo />
                    </div>
                </div>
                <div className="w-full h-full ">
                    <div >
                        <h2 className="text-2xl text-[#060606] font-bold justify-start">Welcome! Lets create your profile</h2>
                        <p>Let other get to know you better! You can do these later</p>
                    </div>
                    <form>
                        <div>
                            Add an avatar
                        </div>
                        <UploadImg />
                        <div>
                            Add your location
                        </div>
                        <div class="mt-5">
                            <button class=" bg-pink-500 hover:bg-pink-800 py-3 text-center text-white rounded-md w-2/4">Create Account</button>
                        </div>
                    </form>
                </div>
                

        </>
    )
}
export default CreateProfile;
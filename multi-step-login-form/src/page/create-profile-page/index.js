import React, { useState } from 'react';
import UploadImg from '../../component/upload-img';
import Logo from '../../component/logo';
import { useNavigate } from 'react-router-dom';

const CreateProfile = () => {
    const navigate = useNavigate();
    const [location, setLocation] = useState('');
    const [isLocationValid, setIsLocationValid] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [isImageUploaded, setIsImageUploaded] = useState(false);
    const validLocations = ['India', 'San Francisco', 'Australia'];

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isLocationValid && isImageUploaded) {
            navigate('/signup/typeselection');
        } else {
            if (location.trim() === '') {
                alert('Please enter a location.');
            }
        }
    };

    const handleLocationChange = (e) => {
        const value = e.target.value;
        setLocation(value);
        setIsLocationValid(value.trim() !== '' && validLocations.includes(value.trim()));
    };

    const handleImageChange = (imageUrl) => {
        setPreviewImage(imageUrl);
        setIsImageUploaded(true);
    };

    const isSubmitDisabled = !(isLocationValid && isImageUploaded);

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-12 pt-8 px-10">
                <div className="col-span-4 md:col-span-1">
                    <div className="float-left">
                        <Logo />
                    </div>
                </div>
            </div>
            <div className="mx-auto max-w-2xl p-4">
                <div className="block my-6">
                    <h2 className="text-3xl text-[#060606] font-bold">Welcome, Let's create your profile</h2>
                    <p className="mt-2 text-[#757575]">Let others get to know you better! You can do these later</p>
                </div>
                <form className="block my-6" onSubmit={handleSubmit}>
                    <div className="my-10 font-bold">Add an avatar</div>
                    <div className="my-10">
                        <UploadImg onImageChange={handleImageChange} />
                    </div>

                    <div className="my-10">
                        <label className="block mb-2 font-bold my-10">Add your location</label>
                        <input
                            type="text"
                            placeholder="Enter a location"
                            className="shadow-md rounded-md w-full px-3 py-2 mt-2 font-bold"
                            value={location}
                            onChange={handleLocationChange}
                        />
                    </div>
                    <div className="my-10">
                        {location.trim() !== '' && !isLocationValid && (
                            <p className="text-sm text-center text-red-400 mt-1 font-semibold w-2/5">
                                Valid locations: India, San Francisco
                            </p>
                        )}
                        <button
                            className="bg-pink-500 hover:bg-pink-800 py-3 text-white rounded-md w-2/5 disabled:bg-pink-300"
                            disabled={isSubmitDisabled}
                        >
                            Next
                        </button>
                        {isLocationValid && (
                            <p className="text-sm text-center text-gray-400 font-bold w-2/5 mt-1">or Press RETURN</p>
                        )}
                    </div>
                </form>
            </div>
        </>
    );
};

export default CreateProfile;

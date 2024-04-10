import React, { useState } from 'react';

const UploadImg = ({ onImageChange }) => {
    const [previewImage, setPreviewImage] = useState('');

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImage(reader.result);
                onImageChange(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="flex items-center space-x-6">
            <div className="w-32">
                <img
                   className=" h-28 w-28  object-cover rounded-full outline-dashed outline-gray-400"
                    src={previewImage || '/./svg/camera.png'}
                    alt={previewImage ? 'Preview' : ''}
                />
            </div>
            <label className="block">
                <input
                    type="file"
                    onChange={handleFileChange}
                    className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
                />
            </label>
        </div>
    );
};

export default UploadImg;

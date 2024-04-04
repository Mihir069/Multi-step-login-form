import { useState } from 'react';
const UploadImg = () => {
    const [previewImage,setPreviewImage] = useState("");
    
    const handleFileChange = (e)=>{
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
              setPreviewImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    }
    return (
        <>
        <div className='flex items-center space-x-6'>
            <div>
                <img id='preview-img' className='h-32 w-32 object-cover rounded-full outline-dashed  outline-gray-400' src={previewImage || './svg/camera.png'}  alt={`${previewImage}`}/>
            </div>
            <label className='block'>
                <input type='file' onChange={handleFileChange} className='block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100'/>
            </label>
        </div>
        </>
    )
}
export default UploadImg;
import UploadImg from "../../component/upload-img";
import Logo from "../../component/logo";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const CreateProfile = () => {
    const navigate = useNavigate();
    const [location, setLocation] = useState("");
    const [userData,setUserData] = useState(null);
    const [isFormFilled, setIsFormFilled] = useState(false);
    const {id} = useParams();

    useEffect(()=>{
        fetch(`http://localhost:3001/userdb/${id}`)
            .then(res=>res.json())
            .then(data=>setUserData(data))
            .catch((error)=>console.error("Error in fetching",error))
    },[id])
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/typeselection/${id}`)
    }

    const handleLocationChange = (e) => {
        setLocation(e.target.value);
        setIsFormFilled(e.target.value !== "");
    }
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-12 pt-10 px-10">
                <div className="col-span-4 md:col-span-1">
                    <div className="float-left ">
                        <Logo/>
                    </div>
                </div>
            </div>
            <div className="mx-auto max-w-2xl p-4">
                <div className="block my-6">
                    <h2 className="text-3xl text-[#060606] font-bold">Welcome, {userData && userData.name}! Let"s create your profile</h2>
                    <p className="mt-2 text-[#757575]">Let others get to know you better! You can do these later</p>
                </div>
                <form className="block my-6" onSubmit={handleSubmit}>
                    <div className="my-10 font-bold">Add an avatar</div>
                    <div className="my-10">
                        <UploadImg />
                    </div>

                    <div className="my-10">
                        <label className="block mb-2 font-bold my-10">Add your location</label>
                        <input type="text" placeholder="Enter a location" className="shadow-md rounded-md w-full px-3 py-2 mt-2" value={location} onChange={handleLocationChange} />
                    </div>
                    <div className="my-10">
                        <button className="bg-pink-500 hover:bg-pink-800 py-3 text-white rounded-md w-2/5" disabled={!isFormFilled}>Next</button>
                    </div>
                </form>
            </div>

        </>
    )
}
export default CreateProfile;
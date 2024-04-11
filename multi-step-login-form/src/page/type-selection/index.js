import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../component/logo';

const TypeSelection = () => {
    const navigate = useNavigate();
    const [selectedItems, setSelectedItems] = useState([]);

    const handleCheckboxChange = (option) => {
        const currentIndex = selectedItems.indexOf(option);
        const newSelectedItems = [...selectedItems];

        if (currentIndex === -1) {
            newSelectedItems.push(option);
        } else {
            newSelectedItems.splice(currentIndex, 1);
        }

        setSelectedItems(newSelectedItems);
    };

    const handleClick = () => {
        navigate(-1);
    };

    const handleClickButton = () => {
        navigate(`/confirmationpage`);
    };

    const isButtonDisabled = selectedItems.length === 0;

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-12 pt-10 px-10">
                <div className="col-span-4 md:col-span-1 content-center flex justify-center">
                    <div className="float-left">
                        <Logo />
                    </div>
                </div>
                <div className="col-span-4 md:col-span-1 mx-6  pl-7 hover:bg-slate-200 cursor-pointer" onClick={handleClick}>
                    <img src="/./svg/angle-left-solid.svg" alt="left-arrow" className="max-w-4 hidden md:block" />
                </div>
            </div>

            <div className=" mx-auto max-w-7xl mt-4 p-4">
                <div className="block my-6 text-center">
                    <h2 className="text-3xl text-[#060606] font-bold">What brings you to dribbble?</h2>
                    <p className="mt-2 text-gray-800 font-bold">
                        Select the options that describe you. Don't worry, you can explore other options later.
                    </p>
                </div>
                <form>
                    <div className="md:flex mt-16">
                        {[
                            {
                                image: '/./svg/choice-logo-1.png',
                                text: "I'm a designer looking to share my work"
                            },
                            {
                                image: '/./svg/choice-logo-2.png',
                                text: "I'm looking to hire a designer"
                            },
                            {
                                image: '/./svg/choice-logo-3.png',
                                text: 'I’m looking for design inspiration'
                            }
                        ].map((option, index) => (
                            <div key={index} className="max-w-sm rounded border overflow-hidden shadow-lg m-5">
                                <div className=" py-4 px-4">
                                    <img src={option.image} alt="logo" className="max-w-80" />
                                    <p className="text-gray-700 font-bold text-2xl text-center">{option.text}</p>
                                    <div className="w-full">
                                        <input
                                            type="checkbox"
                                            className="rounded-full mx-36 my-4 p-3 accent-pink-700 cursor-pointer"
                                            checked={selectedItems.includes(option.text)}
                                            onChange={() => handleCheckboxChange(option.text)}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {selectedItems.length > 0 && (
                        <p className="text-sm  ml-1 relative">
                            <span className="absolute -top-1 right-[370px] text-center text-gray-800 font-bold w-2/5 mt-1">Anything else? You can select multiple</span>
                        </p>
                    )}

                    <div className="flex py-7 justify-center">
                        <button
                            className={`bg-pink-500 hover:bg-pink-800 py-3  text-white rounded-md w-64 ${
                                isButtonDisabled ? 'opacity-50 cursor-not-allowed' : ''
                            }`}
                            onClick={handleClickButton}
                            disabled={isButtonDisabled}
                        >
                            Finish
                        </button>
                    </div>
                    {selectedItems.length > 0 && (
                        <p className="text-sm  ml-1 relative">
                            <span className="absolute -top-7 right-[370px] text-center text-gray-400 font-bold w-2/5 mt-1">or Press RETURN</span>
                        </p>
                    )}
                </form>
            </div>
        </>
    );
};

export default TypeSelection;

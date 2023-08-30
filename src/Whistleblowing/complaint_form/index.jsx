import React, { useState } from 'react';

const ConplaintForm = () => {

    const [inputText, setInputText] = useState('');

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    }

    return (

        <div className="relative bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden">
                <div className=" bg-cover h-screen bg-[url(https://drive.google.com/uc?export=view&id=1VbqaCvp6OGGFT11eaatz_AqWai8yKYol)] bg-repeat z-10">
                <footer className="bg-white text-back text-start mx-16 p-8">
                    <div className="container mx-auto flex flex-col justify-center">
                        <div className="w-full front-normal px-4 mb-6">
                        <h2 className="text-xl font-extrabold mb-4">Complaint Form</h2>
                        </div>
                        <div className="w-full  px-4 mb-6">
                        
                        <h2 className="text-xl font-normal mb-4">Name-Surname</h2>
                        <input
                            type="text"
                            className="border border-gray-300 bg-gray-400 rounded px-4 py-2 w-full"
                            placeholder="..."
                            value={inputText}
                            onChange={handleInputChange}
                        />
                        </div>
                        {/* <p className="mt-2">Entered Text: {inputText}</p> */}
                        
                        <div className="w-full  px-4 mb-6">
                        <h2 className="text-xl front-normal mb-4">Contact Number</h2>
                        <input
                            type="text"
                            className="border border-gray-300 bg-gray-400 rounded px-4 py-2 w-full"
                            placeholder="..."
                            value={inputText}
                            onChange={handleInputChange}
                        />
                        </div>
                        <div className="w-full  px-4 mb-6">
                        <h2 className="text-xl front-normal mb-4">Email</h2>
                        <input
                            type="text"
                            className="border border-gray-300 bg-gray-400 rounded px-4 py-2 w-full"
                            placeholder="..."
                            value={inputText}
                            onChange={handleInputChange}
                        />
                        </div>
                        <div className="w-full  px-4 mb-6">
                        <h2 className="text-xl front-normal mb-4">Type of Complaint</h2>
                        <input
                            type="text"
                            className="border border-gray-300 bg-gray-400 rounded px-4 py-2 w-full"
                            placeholder="..."
                            value={inputText}
                            onChange={handleInputChange}
                        />
                        </div>
                        <div className="w-full  px-4 mb-6">
                        <h2 className="text-xl front-normal mb-4">Complaint Topics</h2>
                        <input
                            type="text"
                            className="border border-gray-300 bg-gray-400 rounded px-4 py-2 w-full"
                            placeholder="..."
                            value={inputText}
                            onChange={handleInputChange}
                        />
                        </div>
                        <div className="w-full  px-4 mb-6">
                        <h2 className="text-xl front-normal mb-4">Details</h2>
                        <input
                            type="text"
                            className="border border-gray-300 bg-gray-400 rounded px-4 py-2 h-40 w-full"
                            placeholder="..."
                            value={inputText}
                            onChange={handleInputChange}
                        />
                        </div>
                        <div className="flex flex-col w-full px-4 mb-6">
                        <h2 className="text-xl front-normal mb-4">Attachment(if have)</h2>
                        <div className="flex flex-row">

                        <input
                            type="text"
                            className="border border-gray-300 bg-gray-400 rounded px-4 py-2 h-40 w-1/2"
                            placeholder="..."
                            value={inputText}
                            onChange={handleInputChange}
                        />
                        <span class="sr-only">Choose file</span>
                        <input type="file" 
                        className="block px-10 mx-8 w-full text-sm text-slate-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:text-sm file:font-semibold
                        file:bg-violet-50 file:text-violet-700
                        hover:file:bg-violet-100
                        "/>
                        </div>
                        </div>
                        
                    </div>
                    
                </footer>
                
                </div>
                </div>

    );
}
export default ConplaintForm;
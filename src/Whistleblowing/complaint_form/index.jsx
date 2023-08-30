import React, { useState } from 'react';

const InputConplaintForm = () => {

    const [inputText, setInputText] = useState('');

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    }

    return (

        
                        <input
                            type="text"
                            className="border border-gray-300 bg-gray-400 rounded px-4 py-2 w-full"
                            placeholder="..."
                            value={inputText}
                            onChange={handleInputChange}
                        />
                        

    );
}
export default InputConplaintForm;
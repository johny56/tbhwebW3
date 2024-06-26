import React, { useState } from "react";
import { useCookies } from 'react-cookie';

const Cookie = () => {

    const [cookies, setCookie] = useCookies(['cookieName']);
    const [isCookieAccepted, setIsCookieAccepted] = useState(false);

    const handleCookieClick = () => {
        setCookie('cookieName', 'cookieValue', { path: '/' });
        setIsCookieAccepted(true);
    };

    if (isCookieAccepted) {
        return null; // Render nothing if the cookie is accepted
    }



    return(

        

            !isCookieAccepted && (
            
            <nav className="fixed right-24 top-80 flex flex-col h-2/4 w-80 bg-trabsition z-30 scale-125">

            <div className="flex flex-row h-1/5 w-full rounded-lg bg-white text-blue-400 p-4 mt-1 border-blue-200 border-2">

                <div className="scale-95">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                    </svg>
                </div>

                <h1 className="text-2xl font-bold pl-2">NOTIFICATION</h1>
                {/* <h2 className="text-normal font-normal pt-2 pl-12">Now</h2> */}
            </div>

            <div className="flex flex-col h-full w-full rounded-lg bg-green-700 text-white p-2 mt-2 z-30 border-2">
                <h1 className="text-xl font-bold">Reminder:</h1>
                <h2 className="text-normal font-normal">We use cookies to enchance your browsing experience and provide personalized content.By continuing to use this website.
                you consent to our use of cookies as outlined in our <p className="inline underline">Cookie Policy. </p>You can manage and adjust your cookie setting anytime through your browser setting.
                 Learn more about how we use cookie and your options in our Cookie Policy.</h2>
                
                 <div className="h-12 w-36 rounded-full bg-yellow-700 ml-20 pt-2 mt-2 text-center text-2xl font-bold">
                    <button onClick={handleCookieClick}>Accept</button>
                 </div>
            </div>

            </nav>

        )
            


    );
}
export default Cookie;
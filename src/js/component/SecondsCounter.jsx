import React, { useEffect, useState } from "react";



export const SecondsCounter = ({ userTime }) => {

    const [seconds, setSeconds] = useState(0);
    const [isActive, setisActive] = useState(true);

    // Continue implementation of user maximum time
    // const [ maxTime, setMaxTime ] = useState(userTime);

    const handleStop = () => {
        setisActive(false);
    };

    const handleResume = () => {
        setisActive(true);
    };

    const handleReset = () => {
        setSeconds(0);
        setisActive(true);
    };

    useEffect(() => {
        if (isActive) {
            const timer = setInterval(() => setSeconds(seconds + 1), 1000);
            return () => (clearInterval(timer));
        }
    }, [seconds, isActive]);


    return (
        <>
            <div className="text-center">
                <h1 className="text-info">Seconds: {seconds}</h1>
            </div>
            <article className=" text-center">
                {isActive && <button type="button" className="btn btn-info m-2 text-black" onClick={handleStop} >Stop</button>}
                {!isActive && <button type="button" className="btn btn-info m-2" onClick={handleResume} >Resume</button>}
                <button type="button" className="btn btn-info m-2" onClick={handleReset} >Reset</button>
            </article>

            <p>Made With <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="m-2 bi bi-peace" viewBox="0 0 16 16">
                    <path d="M7.5 1.018a7 7 0 0 0-4.79 11.566L7.5 7.793V1.018zm1 0v6.775l4.79 4.79A7 7 0 0 0 8.5 1.018zm4.084 12.273L8.5 9.207v5.775a6.97 6.97 0 0 0 4.084-1.691zM7.5 14.982V9.207l-4.084 4.084A6.97 6.97 0 0 0 7.5 14.982zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z" />
                </svg>
                and
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill m-2" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                </svg>
            </span> by arroyostack</p>
        </>

    );
};
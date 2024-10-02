import React from "react";
import Banner from "./Banner";


const Tutoring = ({ color }) => {
    return (
        <div className="flex flex-col h-full ">
            <Banner color={color} />
            <h2 className="text-6xl ml-2 mb-3">tutoring</h2>
            <div className="links flex flex-col ml-2 items-start text-4xl">
                <p>Coming soon...</p>
            </div>
        </div>
    )
}

export default Tutoring;

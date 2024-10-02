import { useEffect, useState } from "react";
import React from "react";
import Banner from "./components/Banner";


const Home = ({ color }) => {
    return (
        <div className="flex flex-col h-full ">
            <Banner color={color}/>
            <div className="links flex flex-col ml-2 items-start text-4xl">
                <a href="https://eshano.com/projects">→ projects</a>
                <a href="https://eshano.com/tutoring">→ tutoring</a>
                <a href="mailto:emira@eshano.com">→ contact</a>
                <a href="https://www.linkedin.com/in/emirashano/">→ linkedIn</a>
            </div>
        </div>
    )
}
export default Home;
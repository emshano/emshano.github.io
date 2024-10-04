import React from "react";
import Banner from "./components/Banner";
import { Link } from "react-router-dom";


const Home = ({ color }) => {
    return (
        <div className="flex flex-col h-full ">
            <Banner color={color}/>
            <div className="links flex flex-col ml-2 items-start text-4xl md:text-5xl">
                <Link to="./projects">→ projects</Link>
                <Link to="./tutoring">→ tutoring</Link>
                <a href="mailto:emira@eshano.com">→ contact</a>
                <a href="https://www.linkedin.com/in/emirashano/">→ linkedIn</a>
            </div>
        </div>
    )
}
export default Home;
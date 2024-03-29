import anime from "animejs"
import {useEffect} from "react";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {

    useEffect(() => {
        anime({targets: ['.texty'], opacity: 1, duration: 200, easing: 'linear', delay: 0});
    });

    return (
        <div className="contentLayer relative flex flex-col justify-center items-center w-full">
            {/* first grid element */}
            <div className="flex biggy flex-col md:flex-row ">
                {/* this is the text */}
                <div className="texty flex flex-col justify-center">
                    <h1 className="text-gray-100 text-4xl md:text-7xl font-extrabold" >Emira Shano</h1>
                    <div className="flex flex-row justify-between items-stretch">
                        <Link className="mt-[2px] text-xl font-semibold tracking-tight text-purp2" to="./projects">Projects</Link>
                        <div className="flex flex-row items-center gap-3"> 
                            <a href="https://github.com/emshano" className="icon w-6"><svg id="Layer_1" data-name="Layer 1" viewBox="0 0 98 99"><path className="cls-1" d="M49,0C21.94,0,0,22.72,0,50.76,0,73.18,14,92.2,33.51,98.91c2.45.47,3.35-1.1,3.35-2.44s0-4.4-.07-8.64C23.16,90.9,20.28,81,20.28,81c-2.22-5.86-5.44-7.42-5.44-7.42-4.45-3.15.34-3.09.34-3.09,4.92.36,7.51,5.23,7.51,5.23C27.06,83.51,34.15,81.27,37,80a11,11,0,0,1,3.11-6.79C29.18,71.9,17.74,67.55,17.74,48.1a20,20,0,0,1,5-13.62c-.5-1.28-2.18-6.44.48-13.43,0,0,4.12-1.37,13.48,5.2a44.84,44.84,0,0,1,24.53,0c9.35-6.57,13.46-5.2,13.46-5.2,2.67,7,1,12.15.49,13.43a20,20,0,0,1,5,13.62c0,19.5-11.46,23.79-22.38,25,1.76,1.57,3.33,4.67,3.33,9.4,0,6.79-.06,12.26-.06,13.93,0,1.35.88,2.93,3.37,2.44C84,92.18,98,73.17,98,50.76,98,22.72,76.06,0,49,0Z"></path></svg></a>
                            <a href="https://www.linkedin.com/in/emirashano/" className="icon w-6"><svg id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24"><path d="M19,0H5A5,5,0,0,0,0,5V19a5,5,0,0,0,5,5H19a5,5,0,0,0,5-5V5A5,5,0,0,0,19,0ZM8,19H5V8H8ZM6.5,6.73A1.77,1.77,0,1,1,8.25,5,1.75,1.75,0,0,1,6.5,6.73ZM20,19H17V13.4c0-3.37-4-3.12-4,0V19H10V8h3V9.77c1.4-2.59,7-2.78,7,2.47Z"></path></svg></a>
                            <a href="mailto:emira@eshano.com" className="icon w-6"><svg id="Layer_1" data-name="Layer 1" viewBox="0 0 458 387"><g><path fillRule="evenodd" clipRule="evenodd" d="M358 61H100C78.4609 61 61 78.4609 61 100V287C61 308.539 78.4609 326 100 326H358C379.539 326 397 308.539 397 287V100C397 78.4609 379.539 61 358 61ZM100 0C44.7715 0 0 44.7715 0 100V287C0 342.228 44.7715 387 100 387H358C413.228 387 458 342.228 458 287V100C458 44.7715 413.228 0 358 0H100Z"></path><path fillRule="evenodd" clipRule="evenodd" d="M391.813 93.5102L235.843 173.232C231.515 175.444 226.485 175.444 222.157 173.232L66.1866 93.5101C60.926 90.8212 59.1146 87.8522 58.2335 85.7065C57.0987 82.9426 56.5682 78.9238 57.5278 74.3802C58.4873 69.8366 60.581 66.4541 62.7159 64.4831C64.3733 62.9529 67.2012 61.1088 73.0297 61.1088H384.97C390.799 61.1088 393.627 62.9529 395.284 64.4831C397.419 66.4541 399.513 69.8366 400.472 74.3802C401.432 78.9238 400.901 82.9426 399.766 85.7065C398.885 87.8523 397.074 90.8213 391.813 93.5102ZM260.398 228.387C240.538 238.538 217.462 238.538 197.602 228.387L41.6318 148.665C-28.4872 112.825 -4.65864 -1.38997e-05 73.0297 -1.38997e-05H384.97C462.659 -1.38997e-05 486.487 112.825 416.368 148.665L260.398 228.387Z"></path></g></svg></a>
                        </div>
                    </div>
                </div>
            </div>

            {/* second grid element */}
            <div className="fixed bottom-0">
                <p className="text-gray-600 mt-1 text-xs md:text-md text-center hover:text-gray-100 tracking-tighter">Designed & Built by Emira Shano</p>
            </div>
        </div>
    )


}
export default Home;
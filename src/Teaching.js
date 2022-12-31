
import React, { useEffect } from "react";
import anime from "animejs";
import '../src/assets/tailwind.css'

export default function Teaching() {
    useEffect(() => {
        anime({
            targets: ".backy",
            d: [
                {
                    value:
                        "M-0.5,0.5h1920v884c-207.8-19.9-413.7,116.5-510.8-97.5C1248.4,433.3,785,207.2,560.2,430C413.4,576.7,54.7,453-0.5,431.5V0.5z"
                },
                {
                    value: "M-0.5,0.5h1920v884c-207.8-19.9-222.6,153.9-510.8-97.5C1116,531.7,930,488.9,560.2,633.3C315.2,739,54.7,453-0.5,431.5V0.5z"
                },
            ],
            duration: 14000,
            direction: 'alternate',
            autoplay: true,
            easing: 'linear',
            elasticity: 1200,
            loop: true
        });
    });
    return (
        <div className="contentLayer relative flex flex-col justify-center items-center w-full">
            <p>some text!</p>
        </div>
    )


}

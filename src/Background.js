import React, { useEffect } from "react";
import anime from "animejs";
import '../src/assets/tailwind.css'

export default function Background() {
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
    <div className="fixed top-0 w-extra-wide md:w-xx-wide -mt-1 lg:w-full">
      <svg
        className="backy"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="100%"
        height="100%"
        viewBox="0 0 1920 1080"
        enable-background="new 0 0 1920 1080">
        <defs>
          <linearGradient id="grad2" x1="0%" y1="10%" x2="0%" y2="65%">
            <stop offset="0%" stop-color="#976192" stop-opacity="1" />
            <stop offset="100%" stop-color="#F09235" stop-opacity="1" />
          </linearGradient>
        </defs>
        <path
          className="backy"
          fill="url(#grad2)"
          d="M-0.5,0.5h1920v884c-207.8-19.9-476.8,147.7-573.9-66.4C1185.3,464.4,685.8,254.8,461,477.6C321,617.5,54.7,453-0.5,431.5V0.5z" />
      </svg>
    </div>
  )


}

import Nav from "./components/navbar";
import projects from "./projects"
import Mac from "./components/mac"
import About from "./components/about"
import Card from "./components/card"
import anime from "animejs"
import { useEffect, useRef, useState } from "react";
import React from "react";
import '../src/assets/tailwind.css'

export default function App() {
  const divvy = useRef(null);
  const maccy = useRef(null);

  const [macw, setmacw] = useState(0);
  const [divw, setdivw] = useState(0);
  const [finaloffset, setfinaloffset] = useState(0);

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
    animation();
    let div = divvy.current.offsetWidth;
    let mac = maccy.current.offsetWidth;
    let final = div / 2 + mac / 2;
    console.log(div, mac, final)
    setdivw(div);
    setfinaloffset(final);
    setmacw(mac);
  });

  const animation = () => {
    const me = anime({
      targets: [
        '.st0', '.line', '.st2'
      ],
      strokeDashoffset: [
        anime.setDashoffset, 0
      ],
      easing: 'easeInOutSine',
      duration: 600,
      delay: function (el, i) {
        return 600 + i * 300
      },
      direction: 'alternate',
      loop: false
    });
    const fadeIn = anime({
      targets: [
        '.face', '.texty', '.empty'
      ],
      opacity: 1,
      duration: 300,
      easing: 'linear',
      delay: 3600
    });
    const moveback = anime({
      targets: ['.biggy'],
      translateX: window.innerWidth > 768
        ? -195
        : 0,
      duration: 851,
      delay: 3100,
      easing: 'easeInOutExpo'

    });
    const blink1 = anime({
      targets: ".right",
      d: {
        value: "M69,38.9c-1.4,0-2.5-0.3-2.5-0.6v-2.2c0-0.3,1.1-0.6,2.5-0.6s2.5,0.3,2.5,0.6v2.2 C" +
          "71.5,38.6,70.4,38.9,69,38.9z"
      },
      duration: 45,
      direction: 'alternate',
      autoplay: true,
      easing: 'linear',
      elasticity: 200,
      loop: true,
      delay: 4400
    });

    const blink2 = anime({
      targets: ".left",
      d: {
        value: "M38.3,38.9c-1.4,0-2.5-0.3-2.5-0.6v-2.2c0-0.3,1.1-0.6,2.5-0.6s2.5,0.3,2.5,0.6v2.2" +
          " C40.8,38.6,39.7,38.9,38.3,38.9z"
      },
      duration: 45,
      direction: 'alternate',
      autoplay: true,
      easing: 'easeInOutSine',
      elasticity: 200,
      loop: true,
      delay: 4400
    });
  }

  return (
    <div className="App">
      {/* background svg layer */}
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

      {/* forefront grid layout content layer */}
      <div id="contentLayer" className="relative flex flex-col justify-center items-center w-full">
        
        {/* first grid element */}
        <div class="flex biggy flex-col md:flex-row place-items-center md:justify-self-center" ref={divvy} style={{ marginLeft: window.innerWidth > 768 ? finaloffset : 0 }}>
          
          {/* this is the svg */}
          <div className="flex flex-row" ref={maccy}>
            <svg
              className=" svg-container z-10  justify-center mineline w-32 md:w-48"
              version="1.1"
              id="Layer_2_1_"
              x="0px"
              y="0px"
              width="100%"
              viewBox="0 0 107.2 135.1">

              <g className="stroke-current text-gray-900" id="mac">
                <g className="boxy">
                  <path
                    class="empty opacity-0"
                    fill="#9C9CA5"
                    d="M8.9,114h89.2c0.9,0,1.7,0.8,1.7,1.7v11.5c0,2.4-2,4.4-4.4,4.4H11.9c-2.4,0-4.4-2-4.4-4.4v-11.9
            C7.5,114.6,8.1,114,8.9,114z"/>
                  <path
                    class="empty opacity-0"
                    fill="#9C9CA5"
                    d="M3.2,17.5v92.1c0,2.4,2,4.4,4.4,4.4h92.2c2.4,0,4.4-2,4.4-4.4V17.4c0-7.3-5.9-13.2-13.2-13.2H16.4
            C9.1,4.3,3.2,10.2,3.2,17.5z"/>

                  <path
                    class="empty opacity-0"
                    fill="#FFFFFF"
                    d="M16.3,25.1v50.5c0,4.2,3.4,7.7,7.7,7.7h59.3c4.2,0,7.7-3.4,7.7-7.7V25.1c0-4.2-3.4-7.7-7.7-7.7H24
            C19.8,17.4,16.3,20.9,16.3,25.1z"/>
                  <path
                    class="st2 bottom_panel"
                    fill="none"
                    d="M8.9,114h89.2c0.9,0,1.7,0.8,1.7,1.7v11.5c0,2.4-2,4.4-4.4,4.4H11.9c-2.4,0-4.4-2-4.4-4.4v-11.9
            C7.5,114.6,8.1,114,8.9,114z"/>
                  <path
                    class="st0 outeroutline"
                    fill="none"
                    d="M3.2,17.5v92.1c0,2.4,2,4.4,4.4,4.4h92.2c2.4,0,4.4-2,4.4-4.4V17.4c0-7.3-5.9-13.2-13.2-13.2H16.4
            C9.1,4.3,3.2,10.2,3.2,17.5z"/>

                  <path
                    class="st0"
                    fill="none"
                    d="M16.3,25.1v50.5c0,4.2,3.4,7.7,7.7,7.7h59.3c4.2,0,7.7-3.4,7.7-7.7V25.1c0-4.2-3.4-7.7-7.7-7.7H24
            C19.8,17.4,16.3,20.9,16.3,25.1z"/>

                  <path class="st1 line" d="M66.8,96.5h22H66.8z" />
                  <path class="st1 line" d="M18.5,100.9h8.8H18.5z" />
                </g>

                <g class="fill-current" id="eyes">
                  <path
                    class="st3 face left"
                    d="M38.3,44.1c-1.4,0-2.5-1.1-2.5-2.5v-8.8c0-1.4,1.1-2.5,2.5-2.5s2.5,1.1,2.5,2.5v8.8C40.8,43,39.7,44.1,38.3,44.1z" />
                  <path
                    class="st3 face right"
                    d="M69,44.1c-1.4,0-2.5-1.1-2.5-2.5v-8.8c0-1.4,1.1-2.5,2.5-2.5s2.5,1.1,2.5,2.5v8.8C71.5,43,70.4,44.1,69,44.1z" />
                </g>

                <g class="fill-current">
                  <path
                    class="st1 face nose"
                    d="M50.5,57.5c0,0,3.3,1.1,5.3-0.3c1.3-0.9,2.2-3,0.9-16.3c-0.4-4.4-0.9-8-0.9-8s0.5,3.6,0.9,8
            c1.3,13.4,0.4,15.4-0.9,16.3C53.7,58.6,50.5,57.5,50.5,57.5z"/>
                  <path
                    class="st1 face mouth"
                    d="M42.7,65.7c0.7,0.7,4.4,4.6,10.5,4.8c6.6,0.2,10.8-4.1,11.4-4.8c-0.6,0.7-4.8,5-11.4,4.8
            C47.1,70.4,43.4,66.5,42.7,65.7z"/>
                </g>
              </g>
            </svg>
          </div>

          {/* this is the text */}
          <div class="texty flex z-10 flex-col opacity-0 justify-center mt-6 md:ml-8">
            <h1 class="text-gray-100 -ml-1 text-center md:text-left text-4xl md:text-7xl font-bold">Emira Shano</h1>
            <div className="flex flex-row justify-start items-center gap-3 mt-2">
              <a href="https://github.com/emirahajj" className="icon w-6"><svg id="Layer_1" data-name="Layer 1" viewBox="0 0 98 99"><path class="cls-1" d="M49,0C21.94,0,0,22.72,0,50.76,0,73.18,14,92.2,33.51,98.91c2.45.47,3.35-1.1,3.35-2.44s0-4.4-.07-8.64C23.16,90.9,20.28,81,20.28,81c-2.22-5.86-5.44-7.42-5.44-7.42-4.45-3.15.34-3.09.34-3.09,4.92.36,7.51,5.23,7.51,5.23C27.06,83.51,34.15,81.27,37,80a11,11,0,0,1,3.11-6.79C29.18,71.9,17.74,67.55,17.74,48.1a20,20,0,0,1,5-13.62c-.5-1.28-2.18-6.44.48-13.43,0,0,4.12-1.37,13.48,5.2a44.84,44.84,0,0,1,24.53,0c9.35-6.57,13.46-5.2,13.46-5.2,2.67,7,1,12.15.49,13.43a20,20,0,0,1,5,13.62c0,19.5-11.46,23.79-22.38,25,1.76,1.57,3.33,4.67,3.33,9.4,0,6.79-.06,12.26-.06,13.93,0,1.35.88,2.93,3.37,2.44C84,92.18,98,73.17,98,50.76,98,22.72,76.06,0,49,0Z"></path></svg></a>            
              <a href="https://www.linkedin.com/in/emirashano/" class="icon w-6"><svg id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24"><path d="M19,0H5A5,5,0,0,0,0,5V19a5,5,0,0,0,5,5H19a5,5,0,0,0,5-5V5A5,5,0,0,0,19,0ZM8,19H5V8H8ZM6.5,6.73A1.77,1.77,0,1,1,8.25,5,1.75,1.75,0,0,1,6.5,6.73ZM20,19H17V13.4c0-3.37-4-3.12-4,0V19H10V8h3V9.77c1.4-2.59,7-2.78,7,2.47Z"></path></svg></a>
              <a href="mailto:emira@eshano.com" class="icon w-6"><svg id="Layer_1" data-name="Layer 1" viewBox="0 0 458 387"><g><path fill-rule="evenodd" clip-rule="evenodd" d="M358 61H100C78.4609 61 61 78.4609 61 100V287C61 308.539 78.4609 326 100 326H358C379.539 326 397 308.539 397 287V100C397 78.4609 379.539 61 358 61ZM100 0C44.7715 0 0 44.7715 0 100V287C0 342.228 44.7715 387 100 387H358C413.228 387 458 342.228 458 287V100C458 44.7715 413.228 0 358 0H100Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M391.813 93.5102L235.843 173.232C231.515 175.444 226.485 175.444 222.157 173.232L66.1866 93.5101C60.926 90.8212 59.1146 87.8522 58.2335 85.7065C57.0987 82.9426 56.5682 78.9238 57.5278 74.3802C58.4873 69.8366 60.581 66.4541 62.7159 64.4831C64.3733 62.9529 67.2012 61.1088 73.0297 61.1088H384.97C390.799 61.1088 393.627 62.9529 395.284 64.4831C397.419 66.4541 399.513 69.8366 400.472 74.3802C401.432 78.9238 400.901 82.9426 399.766 85.7065C398.885 87.8523 397.074 90.8213 391.813 93.5102ZM260.398 228.387C240.538 238.538 217.462 238.538 197.602 228.387L41.6318 148.665C-28.4872 112.825 -4.65864 -1.38997e-05 73.0297 -1.38997e-05H384.97C462.659 -1.38997e-05 486.487 112.825 416.368 148.665L260.398 228.387Z"></path></g></svg></a>          </div>
            </div>
            
        </div>

        {/* second grid element */}
        <div className="fixed bottom-0">
          <p className="text-gray-600 mt-1 text-md md:text-xl text-center hover:text-gray-100 tracking-tighter">Designed & Built by Emira Shano</p>
        </div>
      </div>

    </div>
  )


}

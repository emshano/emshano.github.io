import React, { useState, useEffect, useRef } from "react";
import anime from "animejs";

export default function Mac() {

  const divvy = useRef(null);
  const maccy = useRef(null);

  const [macw, setmacw] = useState('');
  const [divw, setdivw] = useState('');
  const [finaloffset, setfinaloffset] = useState('');


  useEffect(() => {
    animation();
    let div = divvy.current.offsetWidth;
    let mac = maccy.current.offsetWidth;
    let final = div/2 + mac / 2;
    setdivw(div);
    setfinaloffset(final);
    setmacw(mac);
  })


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
    <div className="grid grid-cols-1 grid-rows-2 justify-center items-center w-full min-h-screen">

      <div class="flex biggy flex-col md:flex-row bg-black" ref={divvy} style={{ marginLeft: window.innerWidth > 768 ? finaloffset : 0 }}>
        <div class="svg-container z-10" ref={maccy}>
          <svg
            class="mineline w-32 md:w-48"
            version="1.1"
            id="Layer_2_1_"
            x="0px"
            y="0px"
            width="100%"
            viewBox="0 0 107.2 135.1">

            <g class="stroke-current text-gray-900" id="mac">
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

        <div class="texty flex z-10 flex-col opacity-0 justify-center mt-6 md:ml-8">
          <h1 class="text-gray-100 text-center md:text-left text-7xl leading-14">Emira Shano</h1>
          <a href="https://github.com/emirahajj" class="text-purp2 bold text-center md:text-left text-3xl hover:text-white">Github</a>
          <a href="https://www.linkedin.com/in/emirashano/" class="text-purp2 bold text-center md:text-left text-3xl hover:text-white">LinkedIn</a>
          <a href="mailto:emira@eshano.com" class="text-purp2 bold text-center md:text-left text-3xl hover:text-white">Contact Me</a>
        </div>
        

      </div>
      <div className="self-end">
        <p className="text-gray-600 mt-1 text-xl text-center hover:text-gray-100 tracking-tighter">Designed & Built by Emira Shano</p>
      </div>
      
    </div>

  )

}
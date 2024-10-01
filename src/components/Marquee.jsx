import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);


function Marquee() {
    const marqueeRef = useRef(null);

    useGSAP(() => {
        const marquee = marqueeRef.current;
        const totalWidth = marquee.scrollWidth;
        gsap.to("#marquee h1", {
            x: `-${totalWidth}px`,
            // scrollTrigger: {
            //   trigger: "#marquee",
            //   scroller: "body",
            //   markers: true,
            //   start: "top 0%",
            //   end: "top -150%",
            //   duration: 10,
            //   scrub: 2,
            //   pin: true,

            // },
            duration: 30,
            delay: 1,
            repeat: -1,
        });

        gsap.to("#main-container", {
            yPercent: -100,
            scrollTrigger: {
                trigger: "#main-container",
                start: "top bottom",
                end: "bottom top",
                scrub: 2,
                duration: 10,
            }
        });

    })

    return (
        <div id="main-container" className="w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]">
            <div ref={marqueeRef} id='marquee' className="border-t-2 border-b-2 border-zinc-300 flex gap-10 overflow-hidden whitespace-nowrap">
                <h1 className="text-[18vw] leading-none font-bold uppercase pt-10 mb-4"> we are ochi </h1>
                <h1 className="text-[18vw] leading-none font-bold uppercase pt-10 mb-4"> we are ochi </h1>
            </div>
        </div>
    );
}

export default Marquee;

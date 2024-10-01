import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import image from '../assets/about-03.jpg';
import image2 from '../assets/Homepage-Photo-663x469.jpg';


gsap.registerPlugin(ScrollTrigger);

function About() {
    const marqueeRef = useRef(null);


    useGSAP(() => {
        const marquee = marqueeRef.current;
        const totalWidth = marquee.scrollWidth;

        gsap.to("#image-container img", {
        // x: -1000,
        x: `-${totalWidth}px`,
        scrollTrigger: {
             trigger:"#image-section",
             scroller:"body",
             scrub:2,
             start:"top 0%",
             end:"+=3000",
             duration: 10,
             pin:true
        },

     })

    //  gsap.to("#about", {
    //     yPercent: -100,
    //     scrollTrigger: {
    //         trigger: "#about",
    //         start: "top bottom",
    //         end: "bottom top",
    //         scrub: 10,
    //         duration: 10,
    //         // pin:true
    //     }
    // });


   });
      

    return (
        <div id="about" className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl'>
            <h1 className="font-['Neue_Montreal'] text-[3vw] text-black leading-[4.5vw] tracking-tighter">
                Ochi is a strategic presentation agency for forward-thinking businesses that need to 
                raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.
            </h1>
            <div id="image-section" className='w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-[#a1b562]'>
                <div className="w-1/2">
                    <h1 className="text-5xl font-semibold text-black">Our Approach: </h1>
                    <button className="uppercase flex gap-10 items-center px-10 py-6 bg-zinc-900 mt-10 rounded-full text-white">
                        Read more
                        <div className="w-3 h-3 bg-zinc-100 rounded-full"></div>
                    </button>
                </div>
                <div className='w-1/2 h-[70vh] rounded-3xl '>
                    <div id="image-container" ref={marqueeRef} className="flex gap-40 overflow-hidden">
                        <img src={image} alt="Image 1" className="w-[100vw] h-auto" />
                        <img src={image2} alt="Image 2" className="w-[100vw] h-auto" />
                        <img src={image} alt="Image 3" className="w-[100vw] h-auto" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;

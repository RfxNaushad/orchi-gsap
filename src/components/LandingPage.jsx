import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';  

gsap.registerPlugin(ScrollTrigger);
import { FaArrowUpLong } from "react-icons/fa6";


function LandingPage() {
    useGSAP(() => {
        gsap.to("#landing-page", {
            scrollTrigger: {
                trigger: "#landing-page",
                start: "top top",        
                end: "bottom bottom",    
                scrub: 10,
                duration: 10,              
                markers: true,
            }
        });

        gsap.fromTo(
            "#text2",
            { x: "-100vw", opacity: 0 }, 
            { 
                x: "0", 
                opacity: 1, 
                duration: 1.5, 
                ease: "power3.out", 
                delay: 1, 
            }
        );

        // Animate the green card "popping up"
        gsap.fromTo(
            "#green-card",
            { scale: 0, opacity: 0 },  
            { 
                scale: 1, 
                opacity: 1, 
                duration: 0.8, 
                ease: "back.out(1.7)", 
                delay: 2 
            }
        );

    }); 


    return (
        <div id="landing-page" className="w-full h-screen bg-zinc-900 pt-1">
            {/* <div className="textstructure mt-52 px-20">
                {["We Create", "Eye Opening", "presenation"].map((item, index) => {
                    return (
                        <div key={index} className="masker">
                            <div className="w-fit flex items-end overflow-hidden">
                                {index === 1 && (<div className="mr-5 w-[8vw] h-[6.4vw] rounded-md relative  bg-green-500"></div>)}
                                <h1 className={`uppercase text-[9vw] 
                            leading-[7.6vw] tracking-tighter font-semibold`}>{item}</h1>
                            </div>
                        </div>
                    )
                })}
            </div> */}
            <div className="textstructure mt-52 px-20">
                {["We Create", "Eye Opening", "presentation"].map((item, index) => {
                    return (
                        <div key={index} className="masker">
                            <div className="w-fit flex items-end overflow-hidden">
                                {/* For the second text, we add the green card */}
                                {index === 1 && (
                                    <div
                                        id="green-card"
                                        className="mr-5 w-[8vw] h-[6.4vw] rounded-md relative bg-green-500"
                                    ></div>
                                )}
                                <h1
                                    id={index === 1 ? "text2" : ""}
                                    className={`uppercase text-[9vw] leading-[7.6vw] tracking-tighter font-semibold`}
                                >
                                    {item}
                                </h1>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="border-t-[1px] border-zinc-700 mt-24 flex justify-between items-center py-5 px-20">
                {["For public and private companies",
                    "Fro the first pitch to IPO "].map((item, index) => <p key={index} className="text-md- font-light- tracking-tighter leading-none">{item}</p>)}
                <div className="start flex items-center gap-5">
                    <div className="px-5 py-2 border-[1px] 
                    border-zinc-500 font-light text-md uppercase rounded-full">start the project</div>
                    <div className="w-10 h-10 flex items-center justify-center border-[1px] 
                    border-zinc-500 rounded">
                        <span className="rotate-[45deg]"><FaArrowUpLong /></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;

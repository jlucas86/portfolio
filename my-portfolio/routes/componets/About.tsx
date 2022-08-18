/** @jsx h */
import { h } from "preact";
import { tw } from "twind";
import { useState, useEffect, useRef} from "preact/hooks";

// TODO - determin what information to display
// TODO - determin background (mayeb a simple n-body simulation)

/**
 * componet is a breif introduction to the creator similar to a cover letter intro.
 * uses cool bacground animation (balls follows moudse or nbody simulation that takes into effect the mouse)
 */

export default function About() {

    let postionY: [number, number, number, number, number, number, number, number, number, number] = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
    let postionYB: [number, number, number, number, number, number, number, number, number, number] = [90, 90, 90, 90, 90, 90, 90, 90, 90, 90]

    const [posX, setPosX] = useState(10);
    const [posY, setPosY] = useState(postionY);
    const [posYB, setPosYB] = useState(postionYB);

    const [sw, setSw] = useState(window.innerWidth);
    const [viewBoxD, setViewBoxD] = useState("0 0 ".concat(window.innerWidth+" 100"));

    useEffect(()=> {    
        setTimeout(() => {      
            if(posX >= 100){
                setPosX(10)
            }else{
                setPosX(posX+.2)
                setPosY(posY)
                setPosYB(posYB)
            } 
         }, 5);
    },[posX])

    

    return (
        <div class={tw`bg-primary text-white pt-14 px(10 lg:64 xl:80 2xl:96) h-screen flex flex-col items-center justify-center`}>
            <svg viewBox="0 0 200 100" >

                <circle cx={posX} cy={posY[0]} r="2.5" stroke="black" stroke-width="0" fill="white" />
                <circle cx={posX+10} cy={posY[1]} r="2.5" stroke="black" stroke-width="0" fill="white" />
                <circle cx={posX+20} cy={posY[2]} r="2.5" stroke="black" stroke-width="0" fill="white" />
                <circle cx={posX+30} cy={posY[3]} r="2.5" stroke="black" stroke-width="0" fill="white" />
                <circle cx={posX+40} cy={posY[4]} r="2.5" stroke="black" stroke-width="0" fill="white" />
                <circle cx={posX+50} cy={posY[5]} r="2.5" stroke="black" stroke-width="0" fill="white" />
                <circle cx={posX+60} cy={posY[6]} r="2.5" stroke="black" stroke-width="0" fill="white" />
                <circle cx={posX+70} cy={posY[7]} r="2.5" stroke="black" stroke-width="0" fill="white" />
                <circle cx={posX+80} cy={posY[8]} r="2.5" stroke="black" stroke-width="0" fill="white" />
                <circle cx={posX+90} cy={posY[9]} r="2.5" stroke="black" stroke-width="0" fill="white" />
            </svg>
            <div class={tw``}>
                <h1 class={tw`text-3xl py-4`}>Hello, my name is <span class={tw`text-textTitle`}>Joshua Lucas</span>.</h1>
                <p class={tw`text-xl pb-4`}> 
                    I am a software deveoper, currently focusing on full stack development. 
                    I graduated from University of Maryland, Baltimore County (UMBC), with B.S. in computer science.
                    Since graduating, I have worked on few freelace projects of varying types.
                    As well as personal projects, with the goal of providing daily utiltiy to grow a large use base. 
                </p>
            </div>
            <svg viewBox={viewBoxD} >

                <circle cx={posX} cy={posYB[0]} r="2.5" stroke="black" stroke-width="0" fill="white" />
                <circle cx={posX+10} cy={posYB[1]} r="2.5" stroke="black" stroke-width="0" fill="white" />
                <circle cx={posX+20} cy={posYB[2]} r="2.5" stroke="black" stroke-width="0" fill="white" />
                <circle cx={posX+30} cy={posYB[3]} r="2.5" stroke="black" stroke-width="0" fill="white" />
                <circle cx={posX+40} cy={posYB[4]} r="2.5" stroke="black" stroke-width="0" fill="white" />
                <circle cx={posX+50} cy={posYB[5]} r="2.5" stroke="black" stroke-width="0" fill="white" />
                <circle cx={posX+60} cy={posYB[6]} r="2.5" stroke="black" stroke-width="0" fill="white" />
                <circle cx={posX+70} cy={posYB[7]} r="2.5" stroke="black" stroke-width="0" fill="white" />
                <circle cx={posX+80} cy={posYB[8]} r="2.5" stroke="black" stroke-width="0" fill="white" />
                <circle cx={posX+90} cy={posYB[9]} r="2.5" stroke="black" stroke-width="0" fill="white" />
            </svg>
        </div>
      );
  }
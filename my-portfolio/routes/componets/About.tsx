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

    let radious : number = 40
    let YB: number = 100-radious
    let postionY: [number, number, number, number, number, number, number, number, number, number] = [40, 10, 10, 10, 10, 10, 10, 10, 10, 10]
    let postionYB: [number, number, number, number, number, number, number, number, number, number] = [100-40, 90, 90, 90, 90, 90, 90, 90, 90, 90]

    for(let i =0; i< postionY.length; ++i){
        postionY[i] = radious
        postionYB[i] = YB
    }
    

    const [posX, setPosX] = useState(40);
    const [posY, setPosY] = useState(postionY);
    const [posYB, setPosYB] = useState(postionYB);

    const [sw, setSw] = useState(window.innerWidth);
    const [viewBoxD, setViewBoxD] = useState("0 0 ".concat(window.innerWidth+" 100"));

    useEffect(()=> {    
        setTimeout(() => {      
            if(posX+(10*5) >= sw){
                setPosX(10)
            }else{
                setPosX(posX+.2)
                setPosY(posY)
                setPosYB(posYB)
            } 
         }, .1);
    },[posX])

    

    return (
        <div class={tw`bg-primary text-white pt-14 px(10 lg:64 xl:80 2xl:96) h-screen flex flex-col items-center justify-center`}>
            <svg viewBox={viewBoxD} >
                {posY.map((posY, index) => (
                    <circle cx={posX+(radious*2)*index} cy={posY} r={radious} stroke="black" stroke-width="0" fill="white" />
                ))}

                
            </svg>
            <div class={tw``}>
                <h1 class={tw`text-3xl py-4`}>Hello, my name is <span class={tw`text-textTitle`}>Joshua Lucas</span>.</h1>
                <p class={tw`text-xl pb-4`}> 
                    I am a software deveoper, currently focusing on full stack development. 
                    I graduated from University of Maryland, Baltimore County (UMBC), with B.S. in computer science.
                    Since graduating, I have worked on freelace projects of varying types, including web scrapers, home automation, 
                    and In-system programming.
                    As well as projects with a personal goal in mind.
                    Some of the projects include a restaurant based social media platform, a recipe recommendation app, 
                    and multiple scientific simulations.
                </p>
            </div>
            <svg viewBox={viewBoxD} >

                {posYB.map((posYB, index) => (
                        <circle cx={posX+(radious*2)*index} cy={posYB} r={radious} stroke="black" stroke-width="0" fill="white" />
                    ))}
            </svg>
        </div>
      );
  }
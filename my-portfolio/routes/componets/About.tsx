/** @jsx h */
import { h } from "preact";
import { tw } from "twind";

// TODO - determin what information to display
// TODO - determin background (mayeb a simple n-body simulation)

/**
 * componet is a breif introduction to the creator similar to a cover letter intro.
 * uses cool bacground animation (balls follows moudse or nbody simulation that takes into effect the mouse)
 */

export default function About() {
    return (
        <div class={tw`bg-primary text-white pt-14 px(10 lg:64 xl:80 2xl:96) h-screen flex flex-col items-center justify-center`}>
            <div class={tw``}>
                <h1 class={tw`text-3xl py-4`}>Hello, my name is <span class={tw`text-textS`}>Joshua Lucas</span>.</h1>
                <p class={tw`text-xl pb-4`}> 
                    I am a software deveoper, currently focusing on full stack development. 
                    I graduated from University of Maryland, Baltimore County (UMBC), with B.S. in computer science.
                    Since graduating, I have worked on few freelace projects of varying types.
                    As well as personal projects, with the goal of providing daily utiltiy to grow a large use base. 
                    
                </p>
            </div>
            
        </div>
      );
  }
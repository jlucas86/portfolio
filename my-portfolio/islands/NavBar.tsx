/** @jsx h */
import { h } from "preact";
import { tw } from "twind";
import { useState, useEffect } from "preact/hooks";


/**
 * 
 */

export default function NavBar() {

    const [display, setDisplay] = useState(tw` fixed flow-root bg-purple-400 h-20 w-screen`);
    const [yPosition, setyPostion] = useState(0);

    const navBarControl = () =>{
        
        if(window.scrollY > yPosition)
            setDisplay(tw`hide`)
        else
            setDisplay(tw` fixed flow-root bg-purple-400 h-20 w-screen duration-300 scale-y-10`)
        setyPostion(window.scrollY)
    }

    useEffect(() =>{
        window.addEventListener('scroll', () => navBarControl())
      })
    return (
            <div class={display}>
                <div class={tw`float-left mx-20`}>Joshua Lucas</div>
                <div class={tw` flex float-right mx-20`}>
                    <div class={tw`px-1`}>about </div>
                    <div class={tw`px-1`}>projects </div>
                    <div class={tw`px-1`}>skills </div>
                    <div class={tw`px-1`}>resume </div>
                    <div class={tw`px-1`}>contact </div>
                </div>
            </div>
      );
  }
/** @jsx h */
import { h } from "preact";
import { tw } from "twind";


/**
 * 
 */

export default function NavBar() {
    return (
            <div class={tw` flow-root bg-purple-400`}>
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
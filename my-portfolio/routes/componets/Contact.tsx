/** @jsx h */
import { h } from "preact";
import { tw } from "twind";

export default function Contact() {
    return (
        <div>
          <div class={tw`text-5xl `}>Contact:</div>
          <div class={tw`flex content-center justify-center`}>
              <button class={tw`mx-5 px-5 bg-purple-300 rounded-md`}>email</button>
              <button class={tw`mx-5 px-5 bg-purple-300 rounded-md`}>linked in</button>
              <button 
                class={tw`mx-5 px-5 bg-purple-300 rounded-md`} 
                onclick="window.open('https://github.com/jlucas86')">
                  github
              </button>
          </div>
        </div>
      );
  }
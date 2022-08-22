/** @jsx h */
import { h } from "preact";
import { tw } from "twind";

export default function Buttons() {

    return (
        <div class={tw`fixed flow-root h-10 w-20 pt-4 bottom-80 ml-auto bg-red-500`}>
          <div class={tw`flex flex-col content-center justify-center `}>
              <input 
                type="image" 
                src="/img/email.png" 
                alt="email"
                class={tw`w-10 h-10 p-8 mx-10 my-5 bg-button rounded-lg bg-cover`}
                onclick="console.log(window.pageYOffset)"
              />
              <input 
                type="image" 
                src="/img/github.png"
                alt="github" 
                onclick="window.open('https://github.com/jlucas86')"
                class={tw`w-10 h-10 p-8 mx-10 my-5 bg-button rounded-lg bg-cover`}
              />
              <input 
                type="image" 
                src="/img/linkedin.png" 
                alt="linkedIn"
                class={tw`w-10 h-10 p-8 mx-10 my-5 bg-button rounded-lg bg-cover`}
              />
              
          </div>
        </div>
      );
  }
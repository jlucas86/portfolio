/** @jsx h */
import { h } from "preact";
import { tw } from "twind";


 // TODO - add image for email
 // TODO - add image for github
 // TODO - add image for linkedIn
 // TODO - make linkedin button open new linkedin tab
 // TODO - make email button functional (have it display email with copy prompt and/or open email app on pc)
 // TODO - set div size
 // TODO - set div background color (maybe darker purple )
 // TODO - set button color (maybe lighter purple)
 
 

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
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
 
 /**
  * componet creates a div containing all relevent forms of contact pluse
  * an easy way to use them. 
  * Each contact form is dipicted as a button with the logo of said form.
  * When the github button is clicked a new tabe is opend liking to github of creator,
  * The same is done for linkedin.
  * When email is pushed the email app is opend on the users pc/mac and propts the email
  * 
  */

export default function Contact({contactRef}) {

    return (
        <div class={tw`bg-gray-600 px-10`}>
          <div class={tw`text-5xl `}>Contact Me:</div>
          <div class={tw`flex content-center justify-center`}>
              <input 
                type="image" 
                src="/img/email.png" 
                alt="email"
                class={tw`w-1/2 max-w-xs p-8 m-10 bg-purple-500 rounded-lg`}
                onclick="console.log(window.pageYOffset)"
              />
              <input 
                type="image" 
                src="/img/github.png"
                alt="github" 
                onclick="window.open('https://github.com/jlucas86')"
                class={tw`w-1/2 max-w-xs p-8 m-10 bg-purple-500 rounded-lg`}
              />
              <input 
                type="image" 
                src="/img/linkedin.png" 
                alt="linkedIn"
                class={tw`w-1/2 max-w-xs p-8 m-10 bg-purple-500 rounded-lg`}
              />
              
          </div>
        </div>
      );
  }
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
        <div class={tw`bg-gray-600 px-10 py-14 h-screen h-screen flex flex-col items-center justify-center`}>
          <div class={tw`text-5xl text-textTitle underline`}>Contact Me:</div>
          <div class={tw`flex content-center justify-center `}>
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
          <div>
          <form action="https://formsubmit.co/sk8jjcl@gmail.com" method="POST"  class={tw` flex flex-col items-center justify-center`}>

            <div class={tw` flex my-4`}>
              <input type="text" name="name" class={tw` rounded-lg mx-1 p-2`}  placeholder="Full Name" required></input>
              <input type="email" name="email" class={tw` rounded-lg mx-1 p-2`} placeholder="Email Address" required></input>
            </div>
            <input type="hidden" name="_subject" value="New submission!"></input>
              
              
              <textarea placeholder="Your Message" class={tw` rounded-lg mx-1 p-2`} name="message" rows="10" required></textarea>
              <button type="submit">Send</button>

          </form> 
          </div>
        </div>
      );
  }
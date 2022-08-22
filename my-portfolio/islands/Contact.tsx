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
          <div>
          <form action="https://formsubmit.co/sk8jjcl@gmail.com" method="POST"  class={tw` flex flex-col items-center justify-center`}>

            <div class={tw` flex my-4`}>
              <input type="text" name="name" class={tw` rounded-lg mx-0.5 p-2 w-48`}  placeholder="Full Name" required></input>
              <input type="email" name="email" class={tw` rounded-lg mx-0.5  p-2 w-48`} placeholder="Email Address" required></input>
            </div>
            <input type="hidden" name="_subject" value="New submission!"></input>
              
              
              <textarea placeholder="Your Message" class={tw` rounded-lg mx-1 w-96 p-2 `} name="message" rows="10" required></textarea>
              <button type="submit" class={tw`w-20 p-2 m-2 bg-button rounded-lg text-textP font-bold  border-1 border-button hover:border-white`}>Send</button>

          </form> 
          </div>
        </div>
      );
  }
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
        <div class={tw`bg-primary text-white pt-14 px-10`}>
            <h1 class={tw`text-3xl py-4`}>Joshua Lucas</h1>
            <p class={tw`text-xl pb-4`}> 
                I am a software deveoper with a B.S in computer science from UMBC. My goals as a software developer are to produce
                high quality software to solve modernday problems from large to small. One such problem is the ability to find good 
                quality food where ever you go. I am curently working on this problem by developing a webapp to allow friend, restuarants, 
                and reveiwers/influencers to communicat, post reviews, and vote on the helpfullness of reveiws. 
                
            </p>
        </div>
      );
  }
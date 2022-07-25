/** @jsx h */
import { h } from "preact";
import { tw } from "twind";

// TODO - make list of skills
// TODO - get immages for skills
// TODO - make list using grid 
// TODO - on hover over ellement scrolle out name (to the right of the image)
// TODO - when ellement is hoverd over move other elements to the sid 

/**
 * componte is a list of skill the creator has relevent to programing, i.e.
 * languages, and tools. These skills are desplayed as a list of logos that
 * show the full name on hover (moving the other skills to the side). 
 */

export default function Skills() {
    return (
        <div>
          <div class={tw`text-5xl `}>skills:</div>
          <div class={tw`flex w-full flex-row flex-wrap`}>
              <div class={tw`p-5`}> test med </div>
              <div class={tw`p-5`}> test meadf </div>
              <div class={tw`p-5`}> test me </div>
              <div class={tw`p-5`}> test meadfss </div>
              <div class={tw`p-5`}> test mess </div>
              <div class={tw`p-5`}> test me </div>
              <div class={tw`p-5`}> test meadfasdfasdf </div>
              <div class={tw`p-5`}> test me </div>
              <div class={tw`p-5`}> test meadf </div>
              <div class={tw`p-5`}> test me </div>
              <div class={tw`p-5`}> test measdfasdfasdf </div>
              <div class={tw`p-5`}> test medfasd </div>
              <div class={tw`p-5`}> test me </div>
              <div class={tw`p-5`}> test measdf </div>
              <div class={tw`p-5`}> test measdfdsf </div>
              <div class={tw`p-5`}> test mesadf </div>
          </div>

        </div>
      );
  }
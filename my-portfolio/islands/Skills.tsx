/** @jsx h */
import { h } from "preact";
import { tw } from "twind";
import { useState } from "preact/hooks";

// TODO - make list of skills
// TODO - get immages for skills
// TODO - make list using grid 
// TODO - on hover over ellement scrolle out name (to the right of the image)
// TODO - when ellement is hoverd over move other elements to the sid 

interface skillProps {
  skills: Array<[string, string]>;
}

/**
 * componte is a list of skill the creator has relevent to programing, i.e.
 * languages, and tools. These skills are desplayed as a list of logos that
 * show the full name on hover (moving the other skills to the side). 
 */

export default function Skills(props: skillProps) {
  const [name, setName] = useState("");
  return (
        <div class={tw` bg-purple-300`}>
          <div class={tw`text-5xl `}>skills:</div>
          <div class={tw`grid grid-cols-6 gap-4`}>
            {props.skills.map(skill => (
              <img
                id ={skill[0]} 
                src={skill[1]} 
                height="100px"
                alt={skill[0]} 
              />
            ))}
                <img
                id
                src="/logo.svg"
                height="100px"
                alt="the fresh logo"
              />
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
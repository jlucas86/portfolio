/** @jsx h */
import { h } from "preact";
import { tw } from "twind";
import { useState, useEffect } from "preact/hooks";

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
        <div class={tw` bg-gray-600 px-10`}>
          <div class={tw`text-5xl flex`}>
            <div>skills:</div>
            <div>{name}</div>
          </div>
          
          <div class={tw`grid grid-cols-6 gap-4`}>
            {props.skills.map(skill => (
              <img
                id ={skill[0]} 
                src={skill[1]} 
                height="100"
                width="100"
                alt={skill[0]} 
                onmouseover= {()=> setName(skill[0])}
                onmouseout= {()=> setName("")}
              />
            ))}
          </div>

        </div>
      );
  }
/** @jsx h */
import { h } from "preact";
import { tw } from "twind";

interface projectProps{
    title: string,
    tools: string,
    hardware: string,
    goal: string,
    solution: string,
    github: string,
    image: string,
    imageAlt: string,
}

// TODO - display image/embeded video on left of div
// TODO - project infromation to the right of div including title, tools used, goal and solution to goal

/**
 * container receves a JSON for a project then displayes it. The JSON contains
 * a image or video link, title, skiills used, and goal of project and breif 
 * description of how it was accomplished
 */

export default function Project(props: projectProps) {
    return (
        <div class={tw`flex px-10 py-4 mx-96 rounded-lg justify-center hover:shadow-2xl hover:bg-hover hover:scale-110 duration-300`}>
          
          <div class={tw` flex`}>
              <div>
                <img
                    id ={props.imageAlt} 
                    src={props.image} 
                    height="500"
                    width="500"
                    alt={props.imageAlt}
                    class={tw`h-80`}
                />
              </div>
            <div class={tw` mx-14`}>
                <div  class={tw`text-5xl text-textS`}>{props.title}</div>
                    <div class={tw` flex text-textP `}>
                        <div class={tw`font-bold`}>Tools:</div>
                        <div class={tw``}>{props.tools}</div>
                    </div>
                    {props.hardware != null &&
                        <div class={tw` flex text-textP`}>
                            <div class={tw`font-bold`}>Hardware:</div>
                            <div class={tw``}>{props.hardware}</div>
                        </div>
                    }
                    <div class={tw` flex text-textP`}>
                        <div class={tw`font-bold`}>Goal:</div>
                        <div class={tw``}>{props.goal}</div>
                    </div>
                    <div class={tw` flex text-textP`}>
                        <div class={tw`font-bold`}>Solution:</div>
                        <div class={tw``}>{props.solution}</div>
                    </div>
                </div>
            
          </div>
          
        </div>
      );
  }
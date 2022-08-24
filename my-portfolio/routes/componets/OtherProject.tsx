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
}



export default function OtherProject(props: projectProps) {


    return (
        <div class={tw`flex px-2 py-4 w-80 border-2 border-white hover:border-0 rounded-lg  hover:shadow-2xl hover:bg-hover hover:scale-110 duration-300  `}>
          
          <div class={tw``}>
              
            <div class={tw` mx-14`}>
                <div  class={tw`text-3xl text-textSubTitle`}>{props.title}</div>
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